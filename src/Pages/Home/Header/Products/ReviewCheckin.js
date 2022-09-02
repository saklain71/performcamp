import React from 'react';
import img1 from '../../../../Image/rImg1.png'
import img2 from '../../../../Image/rImg2.png'
import img3 from '../../../../Image/rImg3.png'
import img4 from '../../../../Image/rImg4.png'
import background_1 from '../../../../Image/background_image/Copy of background_image_1.png'


const ReviewCheckin = () => {
    return (
        <div className='container p-5'>
            <div class="pt-10 bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full" >
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <h1 className='text-4xl font-semibold'>Performance Reviews & Check-Ins</h1>
                        <p class="text-xl whitespace-normal py-6">Run timely and efficient review cycles. PerformYard facilitates any review process, across any frequency and with customizable inputs. Access our best practice review questions, forms, and templates to drive success.</p>
                        <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s">Get A Demo</a></button> 
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div className=''>
                        <h1 class="text-4xl font-bold">Customize Forms & Cycles</h1>
                        <p class="py-6 text-xl">Customize reviews to meet your needs, from the questions you ask to the timelines you follow. Choose from a variety of question types to get the answers you and your staff want - even include up-to-date goal performance in your reviews.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={img2} class="lg:max-w-lg rounded-lg " alt="" />
                    </figure>
                    <div className=''>
                        <h1 class="lg:text-4xl text-3xl font-bold">Deploy & Track Progress</h1>
                        <p class="py-6 text-xl">Launch review cycles at the time of your choosing and easily monitor who has done what to ensure timely completion of those important reviews. Access a live progress dashboard giving managers and HR staff the information needed to ensure high participation rates.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="flex lg:flex-col flex-col-reverse justify-center items-center lg:px-24">
                    <div className='text-center'>
                        <h1 class="lg:text-4xl text-3xl font-bold">Include 360s & External Input</h1>
                        <p class="py-6 text-xl">Incorporate inputs from people across the organization. Customers can include self assessments, feedback from direct reports, and multiple managers or executives in the process. PerformCamp also allows inputs on employee performance from anyone outside your organization at no additional cost.</p>
                    </div>
                    <figure>
                        <img src={img3} class=" rounded-lg " alt="" />
                    </figure>
                </div>
            </div>
            <div class="hero mb-14">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img4} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div className=''>
                        <h1 class="text-4xl font-bold">Analyze & Visualize Results</h1>
                        <p class="py-6 text-xl">Dive into the results of your review processes, comparing employee performance through a variety of visuals and exports that enable the analysis that HR teams need. PerformYard reporting allows for simple calibration analysis so that top performers are identified and rewarded.</p>
                    </div>
                </div>
            </div>
            <div class="hero bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full relative" >
                <img src={background_1} class="w-full h-96 absolute rounded-lg mx-6" alt='' />
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <p class="text-xl whitespace-normal lg:font-bold font-semibold py-6">See how PerformCamp can streamline your review or check-in process.</p>
                        <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s">Get A Demo</a></button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCheckin;