import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';



const AddEmployee = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = process.env.REACT_APP_IMAGE_STORAGE_KEY
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    const img = result.data.url;
                    const employee = {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        gender: data.gender,
                        designation: data.designation,
                        img: img
                    }
                    fetch('http://localhost:5000/employee', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(employee)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('New Employee Has Been Added to List Successfully');
                                reset();
                            }
                            else {
                                toast.error("Failed to Add Employee")
                            }
                        })
                }
                console.log('imgbb', result)
            })

    };


    return (
        <div >
            <h2 className='text-center font-bold text-3xl lg:p-10 p-5'>Add A New Employee</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='flex gap-5'>
                        <div>
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input {...register("firstName", { required: true })} className="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                            {errors.firstName && <p className='text-red-500'>First name is required</p>}
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input {...register("lastName", { required: true })} className="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                            {errors.lastName && <p className='text-red-500'>Last name is required</p>}
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email Address is required" })} className="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" />
                    <p className='text-red-500'>{errors.email?.message}</p>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Gender</span>

                        </label>
                        <select {...register("gender", { required: "Organization name is required" })} className="select select-bordered border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent">
                            <option>Male</option>
                            <option selected>Female</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Designation</span>

                        </label>
                        <select {...register("designation", { required: "Designation is required" })} className="select select-bordered border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent">
                            <option>Talent Lead</option>
                            <option>Executive</option>
                            <option>Associate</option>
                            <option>Analyst</option>
                            <option selected>General Employee</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Employee ID</span>
                        </label>
                        <input {...register("id", { required: "Employee ID number is required" })} className="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" type='text' />
                        <p className='text-red-500'>{errors.id?.message}</p>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input {...register("img", { required: "Employee's Photo is required" })} className=" border-transparent appearance-none rounded-full border border-gray-300 w-full shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent" type='file' />
                        <p className='text-red-500'>{errors.img?.message}</p>
                    </div>


                    <input type="submit" class="hover:-translate-y-1 hover:scale-110 btn btn-error text-white font-bold w-full mt-5" value="Add Member" />
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;