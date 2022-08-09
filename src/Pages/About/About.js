import React from 'react';
import investor_1 from '../../Image/investor/investor_1.png'
import investor_2 from '../../Image/investor/investor_2.png'
import FourthBanner from '../Home/FourthBanner/FourthBanner';
const About = () => {
    return (
        <div>
            <div class="pt-10 bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full" >
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <h1 className='text-4xl font-semibold'>About PerformCamp</h1>
                        <p class="text-md whitespace-normal py-6">We are a company full of makers, helpers and HR professionals who have come together to fix performance management.</p>
                        <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s">Get A Demo</a></button> 
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-12 my-4 gap-10'>
                <div className='card shadow-2xl grid items-center'>
                    
                    <p className='m-6 font-bold'>We believe the best way for employees to achieve their potential and for organizations to get more from human capital is through effective performance management.</p>
                    
                </div>
                <div className='card shadow-2xl grid items-center'>
                    
                    <p className='m-6'>
                    We started PerformCamp because the existing solutions were restrictive and got in the way of quality feedback. Today we build software that packs deep functionality for HR into a simple experience for employees. Our customers create systems of feedback that work for their organization and their people.
                    </p>
                    
                </div>
            </div>
            
            <div className=' mx-12 border-t-4 my-12'>
                <h2 className='font-bold text-4xl py-4'>The Investors</h2>
                <p className='text-xl py-4'>We’re backed by leaders in HR and technology.</p>
                <div className='card flex flex-col py-4 lg:flex-row '>
                    
                    <img src={investor_1} className='mx-6' alt="investor-1" />
                    <img src={investor_2} alt="investor-2" />
                    
                </div>
            
            </div>
            <FourthBanner/>
        </div>
    );
};

export default About;