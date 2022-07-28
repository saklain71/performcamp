import React from 'react';
import img1 from "../../../Image/img1.png"
import img2 from "../../../Image/img2.png"
import img3 from "../../../Image/img3.jpeg"
import img4 from "../../../Image/img4.png"
import img5 from "../../../Image/img5.png"
import img6 from "../../../Image/img6.png"

const Companies = () => {
    return (
        <div class="bg-base-100 max-h-lg py-10">
            <div class="card-body items-center text-center">
                <h2 class="text-xl text-gray-400 font-semibold px-20">Thousands of HR Professionals Trust PerformCamp</h2>
            </div>
            <div className=' grid grid-cols-6 px-20 justify-center items-center'>
                <img className='hover:-translate-y-1 hover:scale-90' src={img1} style={{width: '170px'}} alt="" />
                <img className='hover:-translate-y-1 hover:scale-90' src={img2} style={{width: '170px'}} alt="" />
                <img className='hover:-translate-y-1 hover:scale-90' src={img3} style={{width: '170px'}} alt="" />
                <img className='hover:-translate-y-1 hover:scale-90' src={img4} style={{width: '170px'}} alt="" />
                <img className='hover:-translate-y-1 hover:scale-90' src={img5} style={{width: '170px'}} alt="" />
                <img className='hover:-translate-y-1 hover:scale-90' src={img6} style={{width: '170px'}} alt="" />
            </div>
        </div>
    );
};

export default Companies;