import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo/PerformCamp-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

       return (
        <div class="navbar sticky z-10 top-0 bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/customers'>Customers</a></li>
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
                    <li className='hover:-translate-y-1 hover:scale-90'><a href='/customers'>Customers</a></li>
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

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Profile dropdown */}
              {
                  user  ?<div>
                        <Menu as="div" className="ml-3 z-30 relative">
                  <div className="flex justify-center items-center gap-3">
                  <span className="text-rose-400 font-bold lg:block hidden">{user.displayName}</span>
                  
                  {
                       user.photoURL? <img
                       className="h-8 w-8 rounded-full "
                       referrerpolicy="no-referrer"
                       src={user.photoURL}
                       alt=""
                     /> :<img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="" className="h-8 w-8 rounded-full" />
                     }
                    <Menu.Button className=" flex text-sm rounded-full focus:outline-none hover:transition-all">
                    
                      <span className="sr-only">Open user menu</span>
                      
                      <FontAwesomeIcon icon={faEllipsisVertical} className="h-6 hover:animate-spin w-5 text-rose-400 font-bold group-hover:text-rose-600" aria-hidden="true" />
                     
                    </Menu.Button>
                    
                    
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg overflow-hidden text-center bg-rose-400 text-white ring-1 ring-black ring-opacity-5 cursor-pointer focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                          <Link to="/dashboard"   className={classNames(active ? 'bg-teal-500' : '', 'block px-4 py-2 text-sm ')}
                          >
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
        
                          <button onClick={handleSignOut} className='border-t-2 hover:text-gray-100 w-full font-bold hover:bg-teal-500 px-4 py-2 text-sm '
                          >
                            Log out <FontAwesomeIcon icon={faRightFromBracket} className="h-4 hover:translate-x-2 w-5 text-white  group-hover:text-rose-600" aria-hidden="true" />
                          </button>
                        
                    
                    </Menu.Items>
                  </Transition>
                </Menu>
                  </div> :
                  <div>
                      <Link to="/login">
                      <button  className='btn btn-outline rounded-full lg:px-7 font-bold'
                        >Login</button>
                      </Link>
                  </div>
              }
              </div>


            </div>

        </div>
    );
};

export default Navbar;