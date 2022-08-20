import React from 'react';
import employee from '../../Image/team/value Icon/employee.png'
import fun from '../../Image/team/value Icon/fun.png'
import integrity from '../../Image/team/value Icon/integrity.png'
import profit from '../../Image/team/value Icon/profit.png'
import innovation from '../../Image/team/value Icon/innovation.png'
import service from '../../Image/team/value Icon/service.png'
import manOnBar from '../../Image/team/value Icon/man-on-bar-charts.png'

const OurValues = () => {
    return (
        <div>
            <h4 className='bg-purple-300 lg:p-10 p-5 text-center font-semibold lg:text-3xl text-2xl'>Our Values</h4>
            <h3 className='font-bold lg:text-5xl text-2xl text-center pt-7 pb-3'>Our core values guide everything <br /> we do</h3>
            <div className='lg:text-center text-justify px-2 lg:px-52'>
                <p className='text-lg'>Our core values give us a framework for leadership and daily decisions, and help us enjoy our time at work. Sounds so simple, but too often companies get caught up in politics, ivory-tower attitudes, and market mania instead of focusing on the things that probably made them successful in the first place.</p>
                <p className='py-5 text-lg'>The following core values and beliefs define what's important to us at PerformCamp:</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-16'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={employee} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Employee</h2>
                        <p className='text-lg'>Most fundamentally, people are the core of our business. Without them, we would not have a business. We hire the best and expect great accomplishments.</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={service} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Customer Service</h2>
                        <p className='text-lg'>Every investment and decision we make has our customers in mind, and we pull out all stops to make the satisfaction of our customers paramount.</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={integrity} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Integrity</h2>
                        <p className='text-lg'>We say what we mean, and mean what we say. We stick to our commitments, treat everyone equitably, and communicate openly and honestly.</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={innovation} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Innovation</h2>
                        <p className='text-lg'>We aim for innovation not only in our development organization but also in the way we approach all aspects of our business.</p>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={fun} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Fun</h2>
                        <p className='text-lg'>We also feel it’s important to have a sense of humor. We like to laugh—it makes our work that much more enjoyable. We also invest in community and company events that help our employees and their families feel a connection to Workday beyond business as usual.</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="card-actions justify-start">
                            <img src={profit} style={{ width: '56px' }} alt="" />
                        </div>
                        <h2 class="card-title text-2xl">Profitability</h2>
                        <p className='text-lg'>Long-term economic success is what helps us provide employees and customers with the best productivity tools, solutions, and services. While important, profitability is not why we exist. Simply put, at Workday we exist to make and provide great products and services.</p>
                    </div>
                </div>
            </div>
            <div class=" bg-base-200">
                <div class="grid lg:grid-cols-2 grid-cols-1 justify-center items-center py-20">
            <img src={manOnBar}  class=" rounded-lg" />
                    <div className='p-2'>
                        <h1 class="lg:text-5xl text-2xl font-bold">Experience a partner like no other.</h1>
                        <p class="py-6">We're in it with you for the long haul—not just as a vendor, but as a partner. We support you every step of the way, from a rapid deployment to working with you side by side to ensure lasting success. Want proof that it works? Our industry-leading 97% customer satisfaction rating tells the whole story.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurValues;