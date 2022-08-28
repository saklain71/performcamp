import React from 'react';
import { useForm } from "react-hook-form";


const ManagerReviewModal = ({ onSubmit, review}) => {
    const { register, handleSubmit, reset } = useForm();
    

    return (
        <div className=''>
            <form className=" lg:p-20 p-10 flex flex-col space-y-4 justify-center" id='details-manager-review-modal' onSubmit={handleSubmit(onSubmit)}>
    
    <textarea rows="1" cols="30" className=" border-2 p-2 mr-2 border-blue-900 rounded-md" value={review._id} {...register("id", { required: true, maxLength: 50 })} />

    <textarea rows="1" cols="30" className=" border-2 p-2 mr-2 border-blue-900 rounded-md" value={review.email} {...register("email", { required: true, maxLength: 50 })} />

    <textarea rows="1" cols="20" className="border-2 p-2  border-blue-900 rounded-md" value={review.title} {...register("title", { required: true, maxLength: 50 })} />

    <textarea rows="2" cols="45" className="border-2 p-2 text-center  mx-auto border-blue-900 rounded-md" placeholder="Share your experience with this employee" {...register("description")} />


    <input rows="1" cols="10" className="border-2 p-2 text-center mx-auto border-blue-900 rounded-md" placeholder="Rating out of 5" {...register("rating")} />
    

  
  <input for="details-manager-review-modal" className="btn btn-error mx-auto text-white hover:btn-blue-900  cursor-pointer  rounded-lg" type="submit"></input>
  
  


</form>
        </div>
    );
};

export default ManagerReviewModal;