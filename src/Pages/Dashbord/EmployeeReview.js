import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify';


const EmployeeReview = () => {

    const [reviews, setReviews] = useState([]);
    const starRating = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/employeeReviews/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                   const sum = data.map(d => d.rating).reduce((prev, curr) => prev + curr, 0);
                   console.log()
                    setReviews(data)
                })
        }
    }, [user]);


const handleUpdate = () =>{

    function getRatingSum(a){
        console.log('get array', a);
        let total=0;
        for(let i in a) { 
            total += parseFloat(a[i].rating);
        }
        return total;
    }
    
    let ratings= getRatingSum(reviews);
    console.log(ratings);

const updateleaderboard = {
    employeeName: user?.displayName,
    employeeImage: user?.photoURL || 'https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg',
    employeeEmail: user?.email,
    completedTasks: reviews.length,
    ratings: ratings
}
    
    fetch(`http://localhost:5000/leaderboard/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateleaderboard)
    })
        .then(res => res.json())
        .then(data => {
           console.log(data); 
           toast.success('You are short listed for employee of the month') 
        })

}
    
    return (
        <div>
            <h1 className='text-2xl text-center font-bold text-primary text-center py-8'>You have got {reviews.length} reviews from Managers</h1>

            
            <p onClick={handleUpdate} className='text-rose-400 text-xl font-bold text-center'><button className='btn btn-success rounded'>Update</button> your reviews to leaderboard to be the best employee of the month! </p>
            
            <div className='grid lg:grid-cols-2  lg:mx-16 '>
            {
  reviews.map(review=>
            <div key={review._id} class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            
  
  <div class="flex justify-center md:justify-end -mt-16">
  
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={review.image}/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Task: {review.title}</h2>
    <p class="mt-2 text-gray-600">{review.description}</p>
  </div>
  
  <div class="flex justify-between mt-4">
  <p><span className='text-warning'>{starRating}</span> <span className='text-xl font-medium text-indigo-500'>{review.rating}/10</span></p>
    <p class="text-xl font-medium text-indigo-500">{review.givenBy}</p>
  </div>
  
</div>
)}
        </div>
        </div>
        
    );
};

export default EmployeeReview;