import React from 'react';
import logo from '../../../Image/Copy_of_perform-removebg-preview.png'

const Navbar = () => {
    return (
        <div class="navbar bg-base-100 p-10">
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
                            <ul class="p-2">
                                <li><a>Overview</a></li>
                                <li><a>Review and Check in</a></li>
                                <li><a>Other Features</a></li>
                            </ul>
                        </li>
                        <li><a>Pricing</a></li>
                        <li><a>Resources</a></li>
                        <li><button className='btn btn-error text-white font-bold'>Get A Demo</button></li>
                    </ul>
                </div>
                <a class="btn btn-ghost hover:-translate-y-1 hover:scale-90 p-0"><img src={logo} style={{ height: "50px" }} alt="" /></a>
            </div>
            <div class="navbar-center font-bold hidden lg:flex">
                <ul class="menu menu-horizontal  p-0">
                    <li className='hover:-translate-y-1 hover:scale-90'><a>Customers</a></li>
                    <li className='hover:-translate-y-1 hover:scale-90' tabindex="0">
                        <a>
                            Product
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2 hover:-translate-y-1 hover:scale-90">
                            <li><a>Overview</a></li>
                            <li><a>Review and Check in</a></li>
                            <li><a>Other Features</a></li>
                        </ul>
                    </li>
                    <li className=" hover:-translate-y-1 hover:scale-90"><a href>Pricing</a></li>
                    <li className=" hover:-translate-y-1 hover:scale-90"><a>Resources</a></li>
                    <li><button className='hover:-translate-y-1 hover:scale-110 btn btn-error text-white font-bold'>Get A Demo</button></li>
                </ul>
            </div>
            <div class="navbar-end">
                <button className='btn btn-outline rounded-full lg:px-7 font-bold'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;