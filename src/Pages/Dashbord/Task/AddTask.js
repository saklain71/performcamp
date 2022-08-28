import React, { useState } from 'react';
import './AddTask.css'
import banner_1 from '../../../Image/banner/banner_1.png'
import 'tw-elements';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AddTask = () => {
    const [user] = useAuthState(auth);
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const [date, setDate] = useState(new Date())
    const onSubmit = data => {

        // const task = {
        //     title: event?.target?.title?.value,
        //     description: event?.target?.description?.value,
        //     email: event?.target?.email?.value,
        //     appointee: user?.email,
        //     deadline: '',

        // }


        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("Task Has been submit Successfully!")
                    reset();
                }

            })

    };

    return (
        <div>

            <dh-component>

                <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <div class="bg-base-100 dark:bg-gray-800">
                        <div class="container mx-auto  dark:bg-gray-800 rounded">
                            <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5  dark:bg-gray-800">
                                <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 justify-center">
                                    <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Add Task</p>
                                </div>
                            </div>
                            <div class="mx-auto">
                                <div class="xl:w-6/12 lg:w-6/12 w-full  mx-auto">
                                    <div class="rounded relative mt-8 h-32 lg:h-48">
                                        <img src={banner_1} alt="" class="w-full h-full object-cover rounded absolute shadow" />

                                        <div class="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                            <img src={user?.photoURL} alt="" class="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                        </div>
                                    </div>
                                    <div class="mt-16 flex flex-col items-center ">
                                        <label for="title" class="pb-2 font-bold text-gray-800 dark:text-gray-100">Title</label>
                                        <input {...register("title", { required: "Title is required" })} tabindex="0" type="text" id="title" name="title" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3  shadow-xl rounded text-sm focus:outline-none focus:border-indigo-700 bg-amber-200 placeholder-gray-500 text-gray-600 dark:text-gray-400" cols="30" rows="1" placeholder="Task title" />
                                        <p className='text-red-500'>{errors.title?.message}</p>
                                    </div>
                                    <div class="mt-8 flex flex-col items-center  ">
                                        <label for="description" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Description</label>
                                        <textarea {...register("description", { required: "Description is required" })} id="description" cols="48" rows="3" name="description" required class="bg-amber-200 border border-gray-300 dark:border-gray-700  shadow-xl rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-600 dark:text-gray-400" placeholder="Detailed description of the task" ></textarea>
                                        <p className='text-red-500'>{errors.description?.message}</p>
                                        <p class="w-full text-center text-xs pt-1 text-gray-600 dark:text-gray-400">Character Limit: 200</p>
                                    </div>
                                    <div class="mt-8 flex flex-col items-center">
                                        <label for="description" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Sender</label>
                                        <textarea {...register("appointee", { required: "Appointee is required" })} id="appointee" name="appointee" required class="bg-amber-200 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-xl rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600 dark:text-gray-400" cols="36" rows="1" value={user?.email} ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mx-auto pt-4">
                            <div class="container mx-auto">

                                <div class="mx-auto pt-4">
                                    <div class="container mx-auto w-64">



                                        <div class=" flex flex-col items-center mb-6">
                                            <label class="label">
                                                <span class="label-text font-bold">Receiver</span>
                                            </label>
                                            <input {...register("employeeName", { required: "Employee Name Address is required" })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 mb-2 px-4 bg-amber-200 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='Employee Name' />
                                            <input {...register("email", { required: "Email Address is required" })} class="input border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-amber-200 text-gray-700 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder='Email' />
                                            <p className='text-red-500'>{errors.email?.message}</p>

                                        </div>

                                    </div>
                                    <div class="flex  justify-center">
                                        <div class="datepicker mb-3 xl:w-96" data-mdb-toggle-button="false">
                                        <label class="label">
                                                <span class="label-text font-bold">Select a Deadline From Calendar</span>
                                            </label>
                                            <input {...register("deadline", { required: "Deadline is required" })} type="text"
                                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-amber-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                                data-mdb-toggle="datepicker" value={format(date, 'P')} />
                                            <p className='text-red-500'>{errors.deadline?.message}</p>
                                            <div className='flex justify-center items-center'>
                                                <DayPicker
                                                    mode="single"
                                                    required
                                                    selected={date}
                                                    onSelect={setDate}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 ">

                        <div class="flex items-center text-center mx-auto">
                            <div class="container mx-auto">
                                <div class="mx-auto ">
                                    <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Alerts</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400 pt-1">Send updates of this activity.</p>
                                </div>
                            </div>

                        </div>
                        <div class="container flex justify-center items-center mx-auto pb-6">
                            <div class=" pb-4 border-r border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                                <p class="text-sm font-bold  text-gray-800 dark:text-gray-100">Via Email</p>
                            </div>
                            <div class="px-8">
                                <div class="flex justify-between items-center mb-8 mt-4">
                                    <div class="w-9/12">
                                        <div className='border-b border-gray-300'>
                                            <p class="text-sm  text-gray-800 dark:text-gray-100 pb-1">Email notification</p>
                                        </div>
                                        <p id="cb1" class="text-sm pt-2 text-gray-600 dark:text-gray-400">Send Email notification of this task to the employee</p>
                                    </div>
                                    {/* <div class="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
            <input tabindex="0" aria-labelledby="cb1" type="checkbox" name="email" id="toggle1" class="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
            <label class="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
        </div> */}

                                </div>

                            </div>


                        </div>
                    </div>
                    <div class="container mx-auto w-11/12 xl:w-full">
                        <div class="w-full py-4 pb-10 sm:px-0 bg-gray-100 dark:bg-gray-800 flex justify-center">
                            <button role="button" aria-label="cancel form" class="bg-error focus:outline-none transition duration-150 ease-in-out hover:bg-gray-400 dark:bg-gray-700 rounded text-gray-100 dark:text-indigo-600 px-6 py-2 text-xs mr-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">Cancel</button>
                            <button role="button" aria-label="Save form" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-green-400 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 mr-4 py-2 text-sm" type="submit">Save</button>
                            {/* <button role="button" aria-label="reset form" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-rose-500 focus:outline-none transition duration-150 ease-in-out hover:bg-rose-400 rounded text-white px-8 py-2 text-sm" type="reset">reset</button> */}
                        </div>
                    </div>

                    <ToastContainer></ToastContainer>
                </form>

            </dh-component>

        </div>
    );
};

export default AddTask;