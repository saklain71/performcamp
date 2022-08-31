import React from 'react';
import team from '../../Image/team/teamwork.jpg'
import banner from '../../Image/team/team.png'
import img1 from '../../Image/team/original (1).png'
import img2 from '../../Image/team/original (2).png'
import img3 from '../../Image/team/people-tree.png'
import saklain from '../../Image/team/saklain.png'
import eshita from '../../Image/team/eshita.png'
import sabbir from '../../Image/team/sabbir.png'
import erfath from '../../Image/team/erfath.png'

const StoryLeadership = () => {
    return (
        <div className='container'>
            <h4 className='bg-purple-100 lg:p-10 p-5 text-center font-semibold lg:text-3xl text-2xl'>Our Story And Leadership</h4>
            <div class="hero lg:py-20 pb-5 bg-green-50">
                <div class="flex flex-col lg:flex-row lg:justify-around items-center gap-16">
                    <img src={team} class=" rounded-lg shadow-xl"  style={{ width: '600px' }} />
                    <div className='p-2 lg:p-0'>
                        <h4 class="lg:text-4xl text-2xl font-bold">We believe people are happier and healthier when they know their work matters.</h4>
                        <p class="py-6 text-2xl">So we build products that help companies hire well, communicate expectations, and develop talent.</p>
                        <a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s" target='_blank'><button class="btn btn-error text-white font-bold">Get a Demo</button></a>
                    </div>
                </div>
            </div>
            <h3 className='font-bold lg:text-4xl text-2xl text-center pt-7 pb-3 bg-green-100'>We’re shaking up the world <br />
                of enterprise software</h3>
            <div className='flex justify-center items-center bg-green-50'>
                <img src={banner} alt="" />
            </div>

            <div class="hero lg:py-28 py-10 bg-base-200">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-between">
                    <img src={img1} class="lg:max-w-lg rounded-lg" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">We started by asking questions.</h1>
                        <p class="py-6 text-xl text-justify">Why is enterprise software so hard to use? What do businesses need to support change? And how can we give people more time back for what really matters?</p>
                    </div>
                </div>
            </div>

            <div class="hero lg:py-28 py-10 bg-base-200">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row justify-between">
                    <img src={img2} class="lg:max-w-lg rounded-lg" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">We listened to the answers.</h1>
                        <p class="py-6 text-justify text-xl">Our curiosity led us to create something new—a finance, HR, and planning system that evolves as business evolves, and a company that’s out to do right by employees, customers, and the world.</p>
                    </div>
                </div>
            </div>


            <div class="hero lg:py-28 py-10 bg-base-200">
                <div class="flex flex-col lg:gap-20 gap-5 lg:flex-row-reverse justify-between items-center">
                    <img src={img3} class="lg:max-w-lg rounded-lg" />
                    <div className='max-w-lg lg:py-10 p-2'>
                        <h1 class="text-3xl lg:text-5xl font-bold">And we haven’t stopped since.</h1>
                        <p class="py-6 text-xl text-justify">We partner closely with our customers to understand their needs. Then we innovate like crazy to give them the technology to get there. Together, we’re shaping the future of work.</p>
                    </div>
                </div>
            </div>
            <h4 className='bg-green-100 lg:p-10 p-5 text-center font-semibold lg:text-4xl text-2xl'>Meet Our Leadership Team</h4>
            <div className='flex justify-center items-center py-20 bg-green-50 '>
                <div>
                    <div className='flex justify-center items-center pb-16'>
                        <div>
                            <div class="avatar ">
                                <div class="w-44 bg-blue-400 mask mask-squircle">
                                    <img src={saklain} />
                                </div>
                            </div>
                            <h2 className='font-bold text-lg text-center text-purple-700'>Saklain Mustak Onik</h2>
                            <p className='text-center font-semibold'>Co-Founder and CEO</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-20'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div class="avatar ">
                                    <div class="w-44 bg-blue-400 mask mask-squircle">
                                        <img src={sabbir} />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <h2 className='font-bold text-lg text-center text-purple-700'>Sheikh Rashedul Hasan</h2>
                                    <p className='text-center font-semibold'>Chief Operating Officer</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div class="avatar ">
                                    <div class="w-44 bg-blue-400 mask mask-squircle">
                                        <img src={eshita} />
                                    </div>
                                </div>
                                <h2 className='font-bold text-lg text-center text-purple-700'>Eshita Yasmin</h2>
                                <p className='text-center font-semibold'>Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <div class="avatar ">
                                    <div class="w-44 bg-blue-400 mask mask-squircle">
                                        <img src={erfath} />
                                    </div>
                                </div>
                                <h2 className='font-bold text-lg text-center text-purple-700'>Erfath Parvez</h2>
                                <p className='text-center font-semibold'>Chief Design Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryLeadership;