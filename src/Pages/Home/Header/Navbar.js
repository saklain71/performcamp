import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/Copy_of_perform-removebg-preview.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div class="navbar sticky z-10 top-0 bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Customers</a></li>
                        <li tabindex="0">
                            <a class="justify-between">
                                Product
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2 hover:-translate-y-1 bg-white hover:scale-90">
                                <li className='text-gray-500'><Link to="/overview">Overview</Link></li>
                                <li className='text-gray-500'><Link to="/reviewCheckin">Review and Check in</Link></li>
                                <li className='text-gray-500'><Link to="/goalManagement">Goal Management</Link></li>
                                <li className='text-gray-500'><Link to="/continuousFeedback">Continuous Feedback</Link></li>
                            </ul>
                        </li>
                        <li className=" hover:-translate-y-1 hover:scale-90"><Link to="/pricing" href>Pricing</Link></li>
                    <li className=" hover:-translate-y-1 hover:scale-90"><a href='/resources'>Resources</a></li>
                        <li><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s"><button className='btn btn-error text-white font-bold'>Get A Demo</button></a></li>
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost hover:-translate-y-1 hover:scale-90 p-0"><img src={logo} style={{ height: "50px" }} alt="" /></Link>
            </div>
            <div class="navbar-center font-bold hidden lg:flex">
                <ul class="menu menu-horizontal  p-0">
                    <li className='hover:-translate-y-1 hover:scale-90'><a>Customers</a></li>
                    <li className='hover:-translate-y-1 hover:scale-90' tabindex="0">
                        <a>
                            Product
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2 hover:-translate-y-1 bg-white hover:scale-90">
                            <li className='text-gray-500'><Link to="/overview">Overview</Link></li>
                            <li className='text-gray-500'><Link to="/reviewCheckin">Review and Check in</Link></li>
                            <li className='text-gray-500'><Link to="/goalManagement">Goal Management</Link></li>
                            <li className='text-gray-500'><Link to="/continuousFeedback">Continuous Feedback</Link></li>
                        </ul>
                    </li>
                    <li className=" hover:-translate-y-1 hover:scale-90"><Link to="/pricing" href>Pricing</Link></li>
                    <li className=" hover:-translate-y-1 hover:scale-90"><a href='/resources'>Resources</a></li>
                    <li><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s"><button className='hover:-translate-y-1 hover:scale-110 btn btn-error text-white font-bold'>Get A Demo</button></a></li>
                </ul>
            </div>
            <div class="navbar-end">
                {
                    user
                        ?
                        <div>

                            <button onClick={handleSignOut} className="btn btn-outline rounded-full lg:px-7 font-bold"> Sign Out</button>
                        </div>

                        :
                        <Link to="/login"><button onClick={handleSignOut} className='btn btn-outline rounded-full lg:px-7 font-bold'>Log in</button></Link>
                }

            </div>

        </div>
    );
};

export default Navbar;