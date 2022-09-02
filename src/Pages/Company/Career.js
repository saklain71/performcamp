import React from 'react';
import './Career.css';
import img1 from '../../Image/team/Career/withUs.png';
import office from '../../Image/team/Career/office.svg';
import hybrid from '../../Image/team/Career/hybrid.svg';
import remote from '../../Image/team/Career/home.svg';
import innovation from '../../Image/team/Career/innovation.svg';
import teamwork from '../../Image/team/Career/teamwork.svg';
import customers from '../../Image/team/Career/customers.svg';
import urgency from '../../Image/team/Career/urgency.svg';
import quality from '../../Image/team/Career/quality.svg';
import forAll from '../../Image/team/Career/for-all.svg';
import sales from '../../Image/team/Career/sales.jpg';
import operation from '../../Image/team/Career/operation.jpg';
import customer from '../../Image/team/Career/customer.jpg';
import marketing from '../../Image/team/Career/marketing.jpg';
import research from '../../Image/team/Career/research.jpg';
import technology from '../../Image/team/Career/technology.jpg';



const Career = () => {
    return (
        <div>
            <div class=" lg:mt-20 mt-10 mb-10 bg-green-100">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-evenly items-center">
                    <img src={img1} class=" rounded-lg shadow-2xl" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">Careers</h1>
                        <p class="py-6 text-xl text-justify">We’re not the only ones who think our culture is great. Our award-winning culture means we’re doing a lot of things right. We’re consistently ranked one of the best places to work. So, Join with us. Be a part of PerformCamp.</p>
                    </div>
                </div>
            </div>
            <div className='lg:py-16'>
                <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16">Where we work</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-7'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={office} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold mt-4'>In Office</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={hybrid} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold mt-4'>Hybrid</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={remote} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold mt-4'>Remote</h2>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center lg:px-80 lg:py-20 py-10 px-3 text-justify text-xl'>
                    <p>Our Employees do their best work in different ways, whether it’s in the office full time, on a hybrid model, or fully remote. Additionally, they are given the flexibility to adjust their schedules when unexpected events arise, ensuring they can achieve a work life harmony that meets their needs.</p>
                </div>
            </div>

            <div className='lg:py-16 bg-green-100'>
                <h2 class="text-3xl lg:text-4xl font-bold text-center mb-16">We live our values</h2>
                <div className='grid lg:grid-cols-6 grid-cols-2 lg:gap-0 gap-7'>
                    <div className='flex flex-col  items-center mt-0'>
                        <img src={innovation} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold text-center my-7'>Respect for Innovation</h2>
                        <p className='text-xl text-center'>Rebounding with courage and creating new ways for us to be successful.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={teamwork} alt="" />
                        <h2 className='lg:text-3xl text-2xl text-center my-7 font-semibold '>Respect for Teamwork</h2>
                        <p className='text-xl text-center px-5'>Working collaboratively to meet shared objectives.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={customers} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold text-center my-7'>Respect for Customers</h2>
                        <p className='text-xl text-center px-5'>Consciously creating moments that matter in a systemic and scalable way.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={quality} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold text-center my-7'>Respect for <br /> Quality</h2>
                        <p className='text-xl text-center px-5'>Making good and timely decisions that keep us moving forward.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={urgency} alt="" />
                        <h2 className='lg:text-3xl text-2xl  font-semibold text-center my-7'>Respect for Urgency</h2>
                        <p className='text-xl text-center px-5'>Taking on new opportunities with excitement, urgency and enthusiasm.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={forAll} alt="" />
                        <div><h2 className='lg:text-3xl text-2xl  font-semibold text-center my-7'>Respect for <br /> All</h2>
                            <p className='text-xl text-center px-5'>Recognizing the value that different perspectives and cultures bring to our organization.</p></div>
                    </div>
                </div>
            </div>


            <div className='mb-10'>
                <h2 className="text-3xl lg:text-4xl font-bold text-center my-16">Explore your future team</h2>

                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-7'>
                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        <div className='border rounded-2xl bg-opacity-20 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300'>
                            <img src={sales} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">Sales</h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Sharing their passion for our company.</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        
                            <img src={marketing} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">Marketing</h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Telling our story to the world.</p>
                            </div>
                        
                    </div>

                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        <div className='border rounded-2xl bg-opacity-20 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300'>
                            <img src={customer} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">Customer Strategy</h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Helping to leverage our products.</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        <div className='border rounded-2xl bg-opacity-20 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300'>
                            <img src={research} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">E-commerce </h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Creating an immersive & dynamic shopping experience.</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        <div className='border rounded-2xl bg-opacity-20 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300'>
                            <img src={research} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">Operation</h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Supporting the end-user experience. We want to give our best.</p>
                            </div>
                        </div>
                    </div>

                    <div class="shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-2xl">
                        <div className='border rounded-2xl bg-opacity-20 flex flex-wrap flex-col hover:bg-opacity-75 transform duration-300'>
                            <img src={technology} className="lg:max-w-full rounded-t-2xl" alt="" />
                            <div className='pb-10 pt-5 items-center lg:px-4 px-2 bg-teal-500 rounded-b-2xl'>
                                <h2 className="text-2xl lg:text-4xl font-bold text-white transform translate-y-20 group-hover:translate-y-0 duration-300 mb-5">Technology</h2>
                                <div class="bg-green-700 w-40 flex h-2  rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                                <p className='text-xl font-bold opacity-0 text-white  group-hover:opacity-80 transform duration-500'>Innovating and pushing the industry forward.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Career;