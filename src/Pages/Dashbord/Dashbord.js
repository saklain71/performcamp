import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
         
            <div className="drawer-content m-5">
            <label for="my-drawer-4" class="drawer-button btn btn-error">Explore Dashbord</label> 
                <Outlet className="bg-black"></Outlet>   
                   
            </div>

            <div className="drawer-side">
                
                <label for="my-drawer-4" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">User Profile</Link></li>
                    <li><Link to="/dashboard/leaderboard">Leader Board </Link></li>
                    <li><Link to="/dashboard/goal">Goal</Link></li>
                    <li><Link to="/dashboard/task">Task</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                    <li><Link to="/dashboard/feedback">Feedback</Link></li>
                    <li><Link to="/dashboard/deadline">Deadline</Link></li>
                    <label for="my-drawer-4" class="drawer-button btn btn-error">BackToDashboard</label>
                </ul>
            </div>
        </div>
    );
};

export default Dashbord;