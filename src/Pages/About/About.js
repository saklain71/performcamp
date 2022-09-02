import React from 'react';
import investor_1 from '../../Image/investor/investor_1.png'
import investor_2 from '../../Image/investor/investor_2.png'
import FourthBanner from '../Home/FourthBanner/FourthBanner';
const About = () => {
    return (
        <div>
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-col  lg:flex-row lg:flex-wrap mx-auto  ">
              <div className="w-full lg:w-2/5 ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.089799570864!2d90.3706028143584!3d23.744176944932352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4b7a19a463%3A0x2be1530e2121e121!2z4Kan4Ka-4Kao4Kau4Kao4KeN4Kah4Ka_IOCnp-Cnqw!5e0!3m2!1sbn!2sbd!4v1661715788811!5m2!1sbn!2sbd" width="400" height="500"  allowfullscreen="" className="rounded-l-lg " loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-full shadow-2xl bg-white  mx-6 lg:mx-0">
    
  
      <div class="p-4 md:p-12 text-center lg:text-left">
        
        
        
        <h1 class="text-3xl font-bold pt-8 lg:pt-0">PerformCamp</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>Company performance evaluation platform</p>
        <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Dhanmondi-15, Dhaka 1205</p>
        <p class="pt-8 text-sm">For annual reviews, quarterly goals, continuous feedback and everything in between, PerformCamp offers flexible features for HR and creates a simple employee experience. Get a better experience.</p>
  
        <div class="pt-12 pb-8">
          <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            <a href="https://performcamp-home.web.app">Explore Services</a>
          </button> 
        </div>
  
        <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center lg:justify-between justify-center">
          
          <a class="link" href="https://github.com/saklain71/performcamp" data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
          
        </div>
        
        
  
      </div>
  
    </div>
    
    
    
    
    
    
      
  
  </div>
            
            <div className=' mx-12 border-t-4 my-12'>
                <h2 className='font-bold text-4xl py-4'>The Investors</h2>
                <p className='text-xl py-4'>We’re backed by leaders in HR and technology.</p>
                <div className='card flex flex-col py-4 lg:flex-row '>
                    
                    <img src={investor_1} className='mx-6' alt="investor-1" />
                    <img src={investor_2} alt="investor-2" />
                    
                </div>
            
            </div>
            <FourthBanner/>
        </div>
    );
};

export default About;