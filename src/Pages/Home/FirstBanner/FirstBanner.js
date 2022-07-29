import React from 'react';
import banner1 from '../../../Image/banner1.png'

const FirstBanner = () => {
    return (
        <div class="hero min-h-screen lg:p-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <figure classNane='hidden'>
                    <img src={banner1} class="hover:-translate-y-1 hover:scale-110 lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                </figure>
                <div className=''>
                    <h1 class="lg:text-4xl text-3xl font-bold">Performance Management <br /> that's easy for Everyone</h1>
                    <p class="py-6">For annual reviews, quarterly goals, continuous feedback and everything in between, PerformCamp offers flexible features for HR and creates a simple employee experience. Get a better experience.</p>
                    <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'>Get A Demo</button>                    
                </div>
            </div>
        </div>
    );
};

export default FirstBanner;