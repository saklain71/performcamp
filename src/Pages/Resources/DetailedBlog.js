import React from 'react';
import blogImg from '../../Image/detailedBlog/detailedBlog_1.png'
import './DetailedBlog.css'
const DetailedBlog = () => {
    return (
        <div className=''>
            <div className=' my-6 mx-6 lg:mx-72'>
                <div className='text-center'>
                <h2 className='text-5xl font-bold  py-5'>
                Microsoft’s New Approach to Performance Management
                </h2>
                <p className='text-sm font-sans pb-6'>Updated:August 16, 2022</p>
                </div>
                <p className='text-xl text-gray-600'>Microsoft employees recently ranked the company’s culture higher than any other company with over 500 employees. Microsoft even beat out HR darling Google for the top spot.
                <br /><br />
                The software giant’s high ranking is due to factors including fairness and trustworthy management. These two factors play a big role in performance management, which is one of the keys to Microsoft’s success.
                <br /><br />
                This article will show you what Microsoft’s performance management process looks like now. We’ll also show how their willingness to change processes has helped them get to where they are today.</p><br />
                <h2 className='text-4xl  font-bold font-sans mx-6'>
                Out with the Old: How Microsoft Has Changed Its Performance Management Process
                </h2><br />
                <p className='text-xl text-gray-600'>Annual performance reviews are the norm at many organizations, and they used to be the norm at Microsoft. There’s something intuitive about meeting once a year to talk about employee contributions and goals for the upcoming year.
                <br /><br />
                Yearly performance appraisals seem like the natural way to review employees. That doesn’t mean they are the best way to review employees.
                <br /><br />
                Annual appraisals can feel heavy, and they rarely impart useful or actionable information. Here are some of the common complaints about annual reviews:</p><br />
                <ul className='list-disc mx-12 text-2xl font-sans'>
                    <li>Take too long</li>
                    <li>Tend to be one-sided</li>
                    <li>Too formal</li>
                    <li>Too general</li>
                </ul><br />
                <p className='text-xl text-gray-600'>These annual reviews end up becoming another thing management has to check off their to-do list. Employees do what they can to get through the meeting, then return to work without internalizing any of the information.
                <br /><br />
                Annual reviews were driving many of the Microsoft performance management issues in the past, so the company made some changes. The new process focuses on each employee’s role in the future of the company rather than their past performance.</p><br />
                <h2 className='text-4xl  font-bold font-sans mx-6'>
                Microsoft’s Performance Management Process
                </h2><br />
                <p className='text-xl text-gray-600'>Microsoft’s performance management process includes:</p><br />
                <ul className='list-disc mx-12 text-2xl font-sans'>
                    
                    <li>Creating a performance journal</li>
                    <li>Setting goals</li>
                    <li>Conducting flexible performance reviews</li>
                </ul><br />
                <p className='text-xl text-gray-600'>The key to this performance review process is its flexibility. There are three components to the process, but employees don’t have to complete every component in order, or at all, before a performance review. </p><br />
                <img src={blogImg} alt="blogImg" />
                <p className='text-center text-md font-sans'>Source: Microsoft Documentation</p><br />
                <p className='text-xl text-gray-600'>Employees don’t have to write detailed performance journals to create goals. The team doesn’t have to set up goals before conducting a performance review either. This approach creates a nimble process.</p>
            </div>
            <div class="custom-shape-divider-bottom-1661939399">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    );
};

export default DetailedBlog;