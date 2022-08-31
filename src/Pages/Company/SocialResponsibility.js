import React from 'react';
import './SocialResponsibility.css'
import change from "../../Image/team/Responsibilities/change.jpg"
import community from "../../Image/team/Responsibilities/community.png"
import lifting from "../../Image/team/Responsibilities/lifting.jpg"
import hero from "../../Image/team/Responsibilities/hero.png"
import sustain from "../../Image/team/Responsibilities/sustain.jpg"

const SocialResponsibility = () => {
    return (
        <div className='bg-green-50'>
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
            <div className='lg:mt-28 flex justify-center items-center bg-green-100 lg:py-16 p-5'>
                <div className='text-center max-w-2xl'>
                    <h2 className='text-4xl font-bold'>Building something better</h2>
                    <p className='text-xl py-4'>PerformCamp is building a better tomorrow for the workplace and the world through the power of human connection and gratitude.</p>
                    <p className='text-xl'>We’re proud to use our knowledge, technology, and people to lift up global workplaces and communities and improve mental health and social well-being.</p>
                </div>
            </div>
            <div class="hero lg:mt-20 mt-10 ">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-between">
                    <img src={change} class="rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Thriving through change</h1>
                        <p class="py-6 text-justify">Throughout these challenging times, our focus is on helping our people, our customers, and our communities.
                            To help our people, we are offering resilience training, flexible work schedules, and ongoing access to health and wellness opportunities.
                            To help our local communities, we donated iPads to area hospitals to help connect patients with their families; food, PPE, and laptops to local organizations in need; and funds to help partner organizations make face mask shields for healthcare workers.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mt-20 mt-10  ">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row justify-between">
                    <img src={lifting} class="rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Lifting our communities</h1>
                        <p class="py-6 text-justify">We believe in the power of advocacy and technology in removing barriers for children, families, and our future leaders. Through organizations including Lifted Organization, Science Club for Girls, and Boys & Girls Club of the Twin Cities, we are helping create a more equitable world where everyone has an opportunity to succeed.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mt-20 mt-10 ">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-between">
                    <img src={hero} class="rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Honoring Covid-19 Heroes</h1>
                        <p class="py-6 text-justify">We built <b>Thank You Healthcare</b> to give the world one place to say thank you to hospitals and all the amazing healthcare workers – seen and unseen – for all they do and sacrifice every day. Help us commemorate all these moments and ensure that the light shined on these heroes never dims.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mt-20 mt-10 ">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row justify-between">
                    <img src={sustain} class=" rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Working more sustainably</h1>
                        <p class="py-6 text-justify">We’re continually making strides across all areas of the business in our sustainability practices. This includes shifting from physical gift cards to digital gift cards as part of our e-commerce network, up-leveling recycling programs in our offices, and increasing work-based flexibility for our employees to help cut down on emissions. We’re also proud to become a new <b>Charter Member of the Sustainable Business & Enterprise Roundtable</b>.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mt-20 mt-10 mb-10 ">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-between">
                    <img src={community} class=" rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Living diversity, equity, and inclusion</h1>
                        <p class="py-6 text-justify">At PerformCamp, we’ve always stood for a society where all people belong. The diversity that makes up our collective humanity is what makes today’s thriving companies stronger and more innovative. We are a proud supporter of the <b>Dhaka and Chittagong Pride Parades, the Project Sunshine, and Shout Out organizations</b>. We’re also committed to using our resources and influence to shine a light on social and racial injustices and systemic racism that exists in the world. As part of our continued efforts, we made contributions to both NAACP Legal Defense Fund and the Equal Justice Initiative.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialResponsibility;