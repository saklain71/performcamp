import React from 'react';
import img1 from '../../../../Image/banner/second_banner.jpg'
import img2 from '../../../../Image/cimg2.png'
import img3 from '../../../../Image/cimg3.png'
import img4 from '../../../../Image/cimg4.png'
import img5 from '../../../../Image/cimg5.png'
import background_1 from '../../../../Image/background_image/background_image_1.png'

const ContinuousFeedback = () => {
    return (
        <div className='container p-5'>
            <div class="pt-10 bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full" >
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <h1 className='text-4xl font-semibold'>Continuous Feedback</h1>
                        <p class="text-xl whitespace-normal py-6">Effective performance management is more than a review; it’s a continuous dialogue designed to help employees succeed. PerformYard facilitates ongoing feedback to recognize achievement, document individual performance and track notes.</p>
                        <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s">Get A Demo</a></button> 
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen mt-5">
                <div class="hero-content flex-col  lg:flex-row">
                    <img src={img1} class="lg:max-w-lg rounded-lg" alt="" />
                    <div className=''>
                        <h1 class="text-4xl font-bold">Recognize Outstanding Performances</h1>
                        <p class="py-6 text-xl">Highlight successes and exceptional performance across the organization, recognizing those above-and-beyond efforts. Let your employees know you appreciate their work. Create custom feedback 'tags' so that you can run reports and align feedback to personal development plans or corporate objectives.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={img2} class="lg:max-w-lg rounded-lg" alt="" />
                    </figure>
                    <div className=''>
                        <h1 class="lg:text-4xl text-3xl font-bold">Provide Timely 1-1 Feedback</h1>
                        <p class="py-6 text-xl">Document and share important feedback in the moment, rather than waiting until "review time" to discuss both positive input and constructive comments. Choose to share the input with the employee's manager, which will follow the employee as they move through the organization.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="flex lg:flex-col flex-col-reverse justify-center items-center lg:px-24">
                    <div className='text-center'>
                        <h1 class="lg:text-4xl text-3xl font-bold">Inform Managers</h1>
                        <p class="py-6 text-xl">Keep your managers and company leadership informed about employee performance in a documented, privacy-conscious manner. Enable managers to see a full track record of everything that's important for them to know about their staff. Team feedback can be filtered by contributor, date, and type so that finding the information that matters is easy.</p>
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
                        <h1 class="text-4xl font-bold">Keep Performance Notes</h1>
                        <p class="py-6 text-xl">Record private notes about performance, for yourself and your team so you remember all the good things that have happened when it comes time to do reviews. Performance notes will always be at your fingertips when you need them most.</p>
                    </div>
                </div>
            </div>
            <div class="hero lg:mb-32 mb-14">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <figure>
                        <img src={img5} class="lg:max-w-lg rounded-lg" alt="" />
                    </figure>
                    <div className=''>
                        <h1 class="lg:text-4xl text-3xl font-bold">Send Feedback Requests</h1>
                        <p class="py-6 text-xl">A formal request can make it much easier for employees to share constructive feedback. Requests are great for targeted feedback on specific work or for creating a formal system that encourage a culture of continuous feedback at your organization.</p>
                    </div>
                </div>
            </div>
            <div class="hero bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full relative" >
                <img src={background_1} class="w-full h-96 absolute rounded-lg mx-6" alt='' />
                <div class="hero-content text-center lg:px-12">
                    <div class="lg:mx-10">
                        <p class="text-xl whitespace-normal lg:font-bold font-semibold py-6">Kickstart a dialog of feedback between your managers and employees.</p>                          
                        <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'><a href="https://www.youtube.com/watch?v=CUFIHw9VuQY&t=1s">Get A Demo</a></button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContinuousFeedback;