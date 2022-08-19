import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManagerReviewModal from './ManagerReviewModal';
import ReviewDetailModal from './ReviewDetailModal';

import { toast } from 'react-toastify';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [detailsReview, setDetailsReview] = useState(null);
    const [employeeReview, setEmployeeReview] = useState(null);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/pendingReview/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setReviews(data)
                    
                })
        }
    }, [user]);

    const onSubmit = data  => {
        
        data.givenBy=user?.displayName
        data.image=user?.photoURL
        fetch(`http://localhost:5000/employeeReviews`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
    
        })
          .then(res => res.json())
          .then(data => {
            
            console.log(data)
            if (data.acknowledged === true) {
              toast("Review Has been submit Successfully!")
              console.log(data);
            }
    
          })

          fetch(`http://localhost:5000/pendingReview/${data.id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        toast.success(`review: ${data.id} is deleted`);
                        window.location.reload()
                    }
                })
               
      };

      

    return (
        <div>
            
            <h1 className='text-3xl font-bold text-primary text-center py-8'>Pending Review: {reviews.length}</h1>
            
<table class="border-collapse w-full">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Title</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Done by</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Proof</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
     
    <tbody>
    {
        reviews.map(review =>(
        
        <tr key={review._id} class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Title</span>
                <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">{review.title}</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Done by</span>
                {review.employeeName}
            </td>
          	<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Proof</span>
                <span cols='20' rows='3'>{review.proof}</span>
          	</td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <label onClick={() => setDetailsReview(review)} for="details-review-modal" className="btn text-stone-100 btn-sm border-none bg-secondary rounded-md p-1 hover:text-yellow-100 mr-2">Details</label>

                <label onClick={() => setEmployeeReview(review)} for="details-manager-review-modal" className="btn text-stone-100 btn-sm border-none bg-success rounded-md p-1 hover:text-yellow-100 mr-2">Review</label>
                
               
                <a href="#" class="text-stone-100 border bg-error rounded-md p-1 hover:text-success ">Feedback</a>
            </td>
        </tr>
        ))
    }
    </tbody>
    
</table>
{
            detailsReview && <ReviewDetailModal
                review={detailsReview}>
            </ReviewDetailModal>}
            
            {
                employeeReview && <ManagerReviewModal
                review={employeeReview}
               
                onSubmit={onSubmit}>
            </ManagerReviewModal>}
            
        </div>
    );
};

export default Review;