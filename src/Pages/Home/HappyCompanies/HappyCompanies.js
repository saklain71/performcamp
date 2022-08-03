import React from 'react';
import bonding from '../../../Image/02252020_InclusiveLanguage_Blog_R1.png'
import Company from '../HappyCompanies/Company'
import saree from '../../../Image/sharee.jpg'
import ARfruit from '../../../Image/AR Fruits.jpg'
import nalam from '../../../Image/nalam.jpg'
import brosAuto from '../../../Image/Bros Auto.PNG'


const HappyCompanies = () => {
    const companies = [
        {
            _id: 1,
            name: "SareeAloy",
            img: saree,
            employee: 1200,
            task: "86%",
            remaining: 32
        },
        {
            _id: 2,
            name: "Nalam Production",
            img: nalam,
            employee: 1000,
            task: "96%",
            remaining: 21
        },
        {
            _id: 3,
            name: "AR Fruits Warehouse",
            img: ARfruit,
            employee: 1450,
            task: "77%",
            remaining: 12
        },
        {
            _id: 4,
            name: "Bro's Auto Parts",
            img: brosAuto,
            employee: 600,
            task: "92%",
            remaining: 17
        }

    ]

    return (
        <div className='lg:p-20'>
            <h2 className='text-5xl mt-20 font-bold text-center mb-2'>Clients Project</h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center shadow-lg lg:mb-20'>
                <div className='pt-20 p-5'>
                    <img src={bonding} className="lg:h-80" alt="" />
                </div>
                <div className='lg:pt-20 p-5'>
                    <p className='lg:text-3xl text-2xl'>PeformCamp provides streamlined accessibility and connection for global organizations.
                    </p>
                    <p className='mt-10 lg:text-xl text-gray-500'>
                        We are a global company. We needed a solution for a global workforce one that was user friendly and easy to access. With PerformCamp, everyone had access to it.
                    </p>
                </div>

            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {
                    companies.map(company => <Company
                        key={company._id}
                        company={company}
                    ></Company>)
                }
            </div>

        </div>
    );
};

export default HappyCompanies;