import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useManager from '../../hooks/useManager';


const Dashbord = () => {
    const [user] = useAuthState(auth);
    const [manager] = useManager(user);
    console.log(manager);
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className=" drawer-toggle" />

            <div className="drawer-content  m-5">
                <label for="my-drawer-4" class="drawer-button  btn btn-error">Explore Dashboard
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                    </svg>
                </label>

                <Outlet className="bg-black"></Outlet>

            </div>

            <div className="drawer-side ">

                <label for="my-drawer-4" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">User Profile</Link></li>
                    <li><Link to="/dashboard/leaderboard">Leader Board </Link></li>
                    <li><Link to="/dashboard/goal">Goal</Link></li>
                    <li><Link to="/dashboard/deadline">Deadline</Link></li>

                    {
                        !manager && <>

                            <li><Link to="/dashboard/task">Task</Link></li>
                            <li><Link to="/dashboard/feedback">Feedback</Link></li>
                            <li><Link to="/dashboard/employeeReview">Review</Link></li>
                        </>
                    }

                    {
                        manager && <>
                            <li><Link to="/dashboard/addtask">Add Task</Link></li>
                            <li><Link to="/dashboard/taskList">Task List</Link></li>
                            <li><Link to="/dashboard/addmember">Add Member</Link></li>
                            <li><Link to="/dashboard/makeManager">Make Manager</Link></li>
                            <li><Link to="/dashboard/managerReview">Review</Link></li>
                        </>
                    }

                    <label for="my-drawer-4" class="drawer-button font-bold btn btn-error">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                        </svg> Back
                    </label>
                </ul>
            </div>
        </div >
    );
};

export default Dashbord;