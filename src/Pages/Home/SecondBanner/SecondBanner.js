import React from 'react';
import banner2 from '../../../Image/banner2.png'

const SecondBanner = () => {
    return (
        <div class="hero min-h-screen lg:p-20">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner2} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                <div className='lg:p-10'>
                    <h1 class="text-5xl font-bold">Adjustable And Easy</h1>
                    <p class="py-6">Your company is unique, and your performance management strategy should be too. We embrace your requirements, so you can manage your entire vision from one place; reviews, goals and feedback. Let's go with us.</p>
                    <button class="btn btn-link font-bold text-blue-400 hover:no-underline text-xl">Explore Our Features <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;