import React from 'react';
import FeaturesCard from '../Home/FeaturesCard/FeaturesCard';
import img1 from '../../Image/oViewBanner1.png'
import img2 from '../../Image/oViewBanner2.png'


const Overview = () => {
    return (
        <div className='container'>
            <div className='text-center flex justify-center lg:mx-32 mt-10'>
                <div className=''>
                    <h2 className='text-4xl font-semibold'>Flexibility For HR</h2>
                    <p className='text-xl m-5'>Create your performance management vision with the right combination of reviews, goals and  continuous feedback. PerformYard can be slimmed down for simple annual reviews or built up for more complex strategies.</p>
                </div>
            </div>
            <FeaturesCard></FeaturesCard>
            <div class="hero min-h-screen lg:p-20">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div className=''>
                        <h1 class="text-5xl font-bold">360 Reviews</h1>
                        <p class="py-6 text-xl">Incorporate feedback from across the organization. Employee reviews can include self assessments, feedback from direct reports, and multiple managers or executives in the process. PerformYard also allows inputs on employee performance from people outside your organization, like clients, at no additional cost.</p>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen lg:p-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={img2} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
                    </figure>
                    <div className=''>
                        <h1 class="lg:text-4xl text-3xl font-bold">Reporting</h1>
                        <p class="py-6 text-xl">Dive into the results of your review processes, comparing employee performance through a variety of visuals and exports that enable the analysis that HR teams need. PerformYard reporting allows for simple calibration analysis so that top performers are identified and rewarded. Plot performance over time as a trend or compare employees in a nine-box.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;