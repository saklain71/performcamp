import React from 'react';
import './SocialResponsibility.css'

const SocialResponsibility = () => {
    return (
        <div>
            <div className='h-screen'>
                <h4 className='bg-purple-100 lg:p-10 p-5 text-center font-semibold lg:text-3xl text-2xl'>Social Responsibilities</h4>
                <div className='csResponsibility flex items-center h-full lg:p-20 px-2'>
                    <div className=''>
                        <h2 className='font-bold lg:text-5xl text-white text-2xl'>Hi there, <br />We’re PerformCamp</h2>
                        <h2 className='font-bold lg:text-5xl text-white text-2xl'></h2>
                        <p className='text-xl pt-5 text-white text-justify'> Corporate Social Responsibility is part of our company’s DNA. See how we’re <br /> shaping a future of work that works for everyone.</p>
                    </div>
                </div>
            </div>
            <div className='mt-28 flex justify-center items-center'>                
                <div className='text-center max-w-2xl'>
                    <h2 className='text-4xl font-bold'>Building something better</h2>
                    <p className='text-xl py-4'>PerformCamp is building a better tomorrow for the workplace and the world through the power of human connection and gratitude.</p>
                    <p className='text-xl'>We’re proud to use our knowledge, technology, and people to lift up global workplaces and communities and improve mental health and social well-being.</p>
                </div>              
            </div>
        </div>
    );
};

export default SocialResponsibility;