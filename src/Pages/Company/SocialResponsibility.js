import React from 'react';
import './SocialResponsibility.css'

const SocialResponsibility = () => {
    return (
        <div>
            <h4 className='bg-purple-300 lg:p-10 p-5 text-center font-semibold lg:text-3xl text-2xl'>Social Responsibilities</h4>
            <div className='csResponsibility flex justify-start lg:p-20 px-2 bg-green-400'>
                <div className='w-96 bg-green-400'>
                    <h2 className='font-bold lg:text-5xl text-white text-2xl'>Hi there, We’re PerformCamp</h2>
                    <h2 className='font-bold lg:text-5xl text-white text-2xl'></h2>                   
                    <p className='text-xl pt-5 text-white'> Corporate Social Responsibility is part of our company’s DNA. See how we’re shaping a future of work that works for everyone.</p>
                </div>                           
            </div>

        </div>
    );
};

export default SocialResponsibility;