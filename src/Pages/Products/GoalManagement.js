import React from 'react';
import img1 from '../../Image/gImg1.png'
import img2 from '../../Image/gImg2.png'
import img3 from '../../Image/gImg3.png'
import img4 from '../../Image/gImg4.png'

const GoalManagement = () => {
    return (
        <div className='container p-5'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img1} class="lg:max-w-lg rounded-lg" alt="" />
                    <div className=''>
                        <h1 class="text-4xl font-bold">Cascade Your Goals</h1>
                        <p class="py-6 text-xl">Document and communicate your strategy across the business, from the highest levels downward. Make it clear who owns what, defining expectations, timelines and contributions to ensure line of sight for action and success. Break it down into executable parts and assign responsibilities across the organizational structure.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={img2} class="lg:max-w-lg rounded-lg" alt="" />
                    </figure>
                    <div className=''>
                        <h1 class="lg:text-4xl text-3xl font-bold">Track Individual Progress</h1>
                        <p class="py-6 text-xl">Allow every member of your team to define and track their individual goals, all tied to the company's strategy and objectives. Make the process for managing goals continuous throughout the year and enable a documented conversation between employee and manager. Each goal has its own repository for updates, feedback, and even collaboration for team goals that are shared.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="flex lg:flex-col flex-col-reverse justify-center items-center lg:px-24 ">
                    <div className='text-center'>
                        <h1 class="lg:text-4xl text-3xl font-bold">Get Clear Visualizations</h1>
                        <p class="py-6 text-xl">Make the process for communicating progress and expectations consistent and repeatable across all facets of the business. Then turn those progress updates into clean charts and  dashboards. This provides executives, management and team members the understanding of not just how you’re doing, but where you’re going.</p>
                    </div>
                    <figure>
                        <img src={img3} class=" rounded-lg" alt="" />
                    </figure>
                </div>
            </div>
            <div class="hero mb-14">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img4} class="lg:max-w-lg rounded-lg" alt="" />
                    <div className=''>
                        <h1 class="text-4xl font-bold">Gather Performance Insights</h1>
                        <p class="py-6 text-xl">Learn where your team is excelling, and where you might be falling off track, with the visibility provided by updates, rollups and influences. Use these insights to adjust resources and change direction, all while keeping your eyes on the prize.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalManagement;