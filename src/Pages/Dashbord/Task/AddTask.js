import React from 'react';
import './AddTask.css'
import banner_1 from '../../../Image/banner/banner_1.png'
import 'tw-elements';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';


const AddTask = () => {
    const [user] = useAuthState(auth);
    const { reset } = useForm();
    const handleTask = event => {
        event.preventDefault();
        console.log('add task', event?.target?.title.value);

        const task = {
            title: event?.target?.title?.value,
            description: event?.target?.description?.value,
            email: event?.target?.email?.value,
            deadline: ''
        }

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    event.target.reset();
                }
                else {

                }

                reset();
            })

    }




    return (
        <div>

            <dh-component>


                <form id="" onSubmit={handleTask}>
                    <div class="bg-base-100 dark:bg-gray-800">
                        <div class="container mx-auto  dark:bg-gray-800 rounded">
                            <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5  dark:bg-gray-800">
                                <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                    <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Add Task</p>
                                </div>
                            </div>
                            <div class="mx-auto">
                                <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                                    <div class="rounded relative mt-8 h-48">
                                        <img src={banner_1} alt="" class="w-full h-full object-cover rounded absolute shadow" />

                                        <div class="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                            <img src={user?.photoURL} alt="" class="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                        </div>
                                    </div>
                                    <div class="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                        <label for="title" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Title</label>
                                        <input tabindex="0" type="text" id="title" name="title" required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400" placeholder="Task title" />
                                    </div>
                                    <div class="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                                        <label for="description" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Description</label>
                                        <textarea id="description" name="description" required class="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600 dark:text-gray-400" placeholder="Detailed description of the task" rows="5"></textarea>
                                        <p class="w-full text-right text-xs pt-1 text-gray-600 dark:text-gray-400">Character Limit: 200</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                            <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                                <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                                    <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Assigned to</p>

                                </div>
                            </div>

                        </div>
                        <div class="mx-auto pt-4">
                            <div class="container mx-auto">
                                
                            <div class="mx-auto pt-4">
                                <div class="container mx-auto">

                                    

                                        <div class="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                            <label for="Email" class="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Email</label>
                                            <div class="border border-green-400 shadow-sm rounded flex">
                                                <div tabindex="0" class="focus:outline-none px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                                        <polyline points="3 7 12 13 21 7" />
                                                    </svg>
                                                </div>
                                                <input tabindex="0" type="email" id="Email" name="email" required class="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-600 dark:text-gray-400" placeholder="example@gmail.com" />
                                            </div>
                                            <div class="flex justify-between items-center pt-1 text-green-700">
                                                <p class="text-xs">Employee found!</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                                                    <path
                                                        class="heroicon-ui"
                                                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                                            0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                                        stroke="currentColor"
                                                        stroke-width="0.25"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="flex  justify-start">
                                            <div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
                                                <input type="text"
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    placeholder="Select a date" data-mdb-toggle="datepicker" />
                                                <label for="floatingInput" class="text-gray-700">Select a deadline</label>
                                            </div>
                                        </div>

                                    </div>
                                    
               
                            </div>
                        </div>
                    </div>
                    
                        <div class="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
                            <div class="xl:w-full py-5 px-8">
                                <div class="flex items-center mx-auto">
                                    <div class="container mx-auto">
                                        <div class="mx-auto xl:w-full">
                                            <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Alerts</p>
                                            <p class="text-sm text-gray-600 dark:text-gray-400 pt-1">Send updates of this activity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mx-auto pb-6">
                                <div class="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                    <p class="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Via Email</p>
                                </div>
                                <div class="px-8">
                                    <div class="flex justify-between items-center mb-8 mt-4">
                                        <div class="w-9/12">
                                            <p class="text-sm text-gray-800 dark:text-gray-100 pb-1">Email notification</p>
                                            <p id="cb1" class="text-sm text-gray-600 dark:text-gray-400">Send Email notification of this task to the employee</p>
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
                            <div class="w-full py-4 pb-10 sm:px-0 bg-white dark:bg-gray-800 flex justify-center">
                                <button role="button" aria-label="cancel form" class="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">Cancel</button>
                                <button role="button" aria-label="Save form" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">Save</button>
                            </div>
                        </div>
                    </div>
                    
                </form>



            </dh-component>

        </div>
    );
};

export default AddTask;