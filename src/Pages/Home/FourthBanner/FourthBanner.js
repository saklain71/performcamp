import React from 'react';
import background_1 from '../../../Image/background_image/background_image_1.png'
const FourthBanner = () => {
    return (
        <div class="hero bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full relative" >
            <img src={background_1} class="w-full h-96 absolute rounded-lg mx-6" />
  <div class="hero-content text-center px-12">
    
    <div class="mx-10">
      
      <p class="text-xl whitespace-normal font-bold py-6">See how PerformCamp can streamline and automate your performance management process.</p>
      <button className='hover:-translate-y-1 hover:scale-110 btn btn-error lg:w-36 w-full text-white font-bold'>Get A Demo</button>
    </div>
  </div>
</div>
    );
};

export default FourthBanner;