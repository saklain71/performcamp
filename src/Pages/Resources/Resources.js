import React from 'react';
import resource_1 from '../../Image/resource_image/resource_img_1.jpeg'
import resource_2 from '../../Image/resource_image/resource_img_2.png'
import resource_3 from '../../Image/resource_image/resource_img_3.png'
import resource_4 from '../../Image/resource_image/resource_img_4.jpg'
import resource_5 from '../../Image/resource_image/resource_img_5.jpg'
import resource_6 from '../../Image/resource_image/resource_img_6.jpg'
import resource_7 from '../../Image/resource_image/resource_img_7.jpg'
import resource_8 from '../../Image/resource_image/resource_img_8.jpg'
import resource_9 from '../../Image/resource_image/resource_img_9.jpg'
import resource_10 from '../../Image/resource_image/resource_img_10.jpeg'
import resource_11 from '../../Image/resource_image/resource_img_11.jpg'
import resource_12 from '../../Image/resource_image/resource_img_12.jpg'
import FourthBanner from '../Home/FourthBanner/FourthBanner';
const Resources = () => {
  return (
    <div className=''>
      <div className='text-center'>
        <h2 className='text-4xl font-bold'>Performance Management Resources</h2>

        <p className='py-6 text-xl'>A practical look at building and implementing your perfect performance management process.</p>
      </div>
      <div class="card lg:card-side  lg:px-36 bg-base-100 ">
        <figure><img className=' md:w-96 lg:w-96 rounded-l-lg' src={resource_1} alt="Album" /></figure>
        <div class="card-body rounded-lg shadow-2xl">
          <h2 class="card-title font-bold py-4">The Purpose of Performance Management: 5 Options</h2>
          <p>Performance Management is a big idea. We’re talking about improving the performance of every employee at your organization.</p>
          <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline text-xl">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg></button></a>

        </div>
      </div>
      <div className='text-center my-12'>
        <h2 className='text-xl font-bold'>Filter Articles By Topic</h2>

        <div class="overflow-x-auto my-4">
          {/* <button class="btn btn-error hover:bg-teal-600  mx-6">All</button> */}
          <button class="btn btn-error hover:bg-teal-600 text-white my-2 mx-6">Performance Management</button>
          <button class="btn btn-error hover:bg-teal-600 text-white my-2 mx-6">Employee Reviews</button>
          <button class="btn btn-error hover:bg-teal-600 text-white my-2 mx-6">Continuous Feedback</button>
          <button class="btn btn-error hover:bg-teal-600 text-white my-2 mx-6">Goal Management</button>
        </div>

      </div>
      <div class="container  m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border  shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_2} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">What Do Performance Management Systems Look Like in 2022?</h2>
              <div class="badge badge-accent badge-outline my-2">Goal Management</div>
              <p class="text-grey-darker text-base">Performance management systems align an organization's goals with its employees' behaviors and efforts. The systems drive feedback, celebrate</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_3} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">Useful HR Tools for Performance Management in 2022</h2>
              <div class="badge badge-accent badge-outline my-2">Performance Management</div>
              <p class="text-grey-darker text-lg">Do your HR tools for performance management help employees improve?

                In one survey, just 14% of employees</p>
                <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_4} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">Building a Business Case for Performance Management</h2>
              <div class="badge badge-accent badge-outline my-2">Employee Review</div>
              <p class="text-grey-darker text-base">It’s hard to make a business case for performance management when the CEO only thinks about old-school review processes. Some traditional</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_5} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">5 Perks of an Online Performance Management System</h2>
              <div class="badge badge-accent badge-outline my-2">Goal Management</div>
              <p class="text-grey-darker text-base">An online performance management system take the hassle out of formal performance reviews. That matters because most performance review</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_6} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">2022 Performance Evaluation Process Flowchart, Tips & Timeline</h2>
              <div class="badge badge-accent badge-outline my-2">Performance Management</div>
              <p class="text-grey-darker text-base">Performance management systems focus on the most important resource in a company; the people. Yet, a study by Deloitte found that over 50% of</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_7} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">The Perk of Modern Performance Management</h2>
              <div class="badge badge-accent badge-outline my-2">Goal Management</div>
              <p class="text-grey-darker text-base">The landscape of perks is shifting. Today’s HR leaders do more than add a list of perks to their offer letters, they design employee experiences.</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_8} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">Setting Up PerformYard is Easy—Here’s Why</h2>
              <div class="badge badge-accent badge-outline my-2">Performance Management</div>
              <p class="text-grey-darker text-base">Implementing performance management software is simple with PerformYard. Hear from our Director of Customer Success on how we</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_9} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">Free Employee Goal Setting Template</h2>
              <div class="badge badge-accent badge-outline my-2">Employee Review</div>
              <p class="text-grey-darker text-base">Our free employee goal setting template will help employees set clear, effective, and inspiring goals to pursue and provide them with a</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_10} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">A Playbook for Aligning Employee Goals with Corporate Objectives</h2>
              <div class="badge badge-accent badge-outline my-2">Performance Management</div>
              <p class="text-grey-darker text-base">Goal alignment in performance management ensures that everyone in the organization, at all levels, are working together to accomplish the</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_11} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">How Apple Does Performance Management (And Ideas for You to Consider)</h2>
              <div class="badge badge-accent badge-outline my-2">Employee Review</div>
              <p class="text-grey-darker text-base">Apple’s performance management techniques can provide inspiration for your own strategy. Here are a few elements that Apple has incorporated</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow-lg">
            <img class="block h-auto w-full lg:w-80 flex-none bg-cover" src={resource_12} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">The Purpose of 90-Day Reviews for New Employees</h2>
              <div class="badge badge-accent badge-outline my-2">Goal Management</div>
              <p class="text-grey-darker text-base">New hire reviews—specifically 90-day reviews—can make a big difference in average tenure for employees, manager-employee relationships, and</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded  border shadow shadow-lg">
            <img className="block h-auto w-full lg:w-64 flex-none bg-cover" src={resource_2} />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <h2 class="text-black font-bold text-xl mb-2 leading-tight">How to Implement Manager Performance Appraisals—Best Practices</h2>
              <div class="badge badge-accent badge-outline my-2">Performance Management</div>
              <p class="text-grey-darker text-base">Here's how to successfully implement manager performance appraisals, along with the key benefits of having employees review their managers.</p>
              <a href="/detailedBlog"><button class="btn btn-link font-bold text-blue-400 hover:no-underline ">Continue Reading <svg xmlns="http://www.w3.org/2000/svg" className="transition transform hover:-translate-x-1  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg></button></a>
            </div>
          </div>
        </div>




      </div>
      <div class="btn-group flex py-4 justify-center">
        <input type="radio" name="options" data-title="1" class="btn hover:checked btn-error" />
        <input type="radio" name="options" data-title="2" class="btn hover:checked btn-error" />
        <input type="radio" name="options" data-title="3" class="btn hover:checked btn-error" />
        <input type="radio" name="options" data-title="4" class="btn hover:checked btn-error" />
      </div>
      <FourthBanner></FourthBanner>
    </div>


  );
};

export default Resources;