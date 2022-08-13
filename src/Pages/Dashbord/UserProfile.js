import React from 'react';
import './UserProfile.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const UserProfile = () => {
  const [user] = useAuthState(auth)

    

    return (
        <div>
            <h1 className='text-center text-2xl'>Welcome!</h1>
            <div class="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
  <div class="mx-auto w-2/3 user-background">
  
<div class="rounded-lg shadow-lg bg-rose-500 backdrop-blur-md w-full flex flex-row flex-wrap p-3 antialiased" >
  <div class="md:w-1/3 w-full">
    <img class="rounded-lg w-48 shadow-lg antialiased" src={user?.photoURL}/>  
  </div>
  <div class="md:w-2/3 w-full px-3  flex flex-row flex-wrap">
    <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
      <div class="text-2xl lg:text-4xl text-white leading-tight"><p>{user?.displayName}</p></div>
      <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b-2  border-dashed lg:text-2xl border-white pb-1">Administrator</span></div>
      <div class="text-sm text-gray-300 lg:mt-2 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-15 right-0">Email: <b>{user?.email}</b></div>
    </div>
  </div>
</div>
  </div>
  
</div>
        </div>
    );
};

export default UserProfile;