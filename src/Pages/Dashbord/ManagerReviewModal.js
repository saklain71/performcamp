import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';



const ManagerReviewModal = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        data.givenBy = user?.displayName
        data.image = user?.photoURL
        fetch(`http://localhost:5000/employeeReviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)


        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged === true) {
                    toast("Review Has been submit Successfully!")

                }

            })
    };


    return (
        <div>
            <form className=" lg:p-20 p-10 flex flex-col  space-y-4 justify-center" id='details-manager-review-modal' onSubmit={handleSubmit(onSubmit)}>

                <input className="border-2 p-2 border-blue-900 rounded-md" placeholder="Review Title" {...register("title", { required: true, maxLength: 100 })} />

                <textarea rows="2" cols="30" className="border-2 p-2 border-blue-900 rounded-md" placeholder="Description" {...register("description")} />


                <textarea rows="1" cols="30" className="border-2 p-2 border-blue-900 rounded-md" placeholder="rating" {...register("rating")} />


                <div className='flex justify-center'>

                    <input className="bg-indigo-900 hover:bg-rose-600 text-white py-2 lg:w-36 cursor-pointer  rounded-lg" type="submit" />
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default ManagerReviewModal;