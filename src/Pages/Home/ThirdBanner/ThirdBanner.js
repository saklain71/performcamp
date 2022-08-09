import React from 'react';
import banner3 from '../../../Image/banner3.png'

const ThirdBanner = () => {
    return (
        <div class="hero min-h-screen lg:p-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner3} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                <div className=''>
                    <h1 class="text-5xl font-bold">Facilitated For Employees</h1>
                    <p class="py-6">Employees should be concentrated on performance, not administering performance management. We make it easy for employees to participate in your process. Get the best result from employees.</p>
                    {/* <button class="btn btn-link font-bold text-blue-400 hover:no-underline text-xl">See Our Facilities <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg></button> */}
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;