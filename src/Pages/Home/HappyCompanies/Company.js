import React from 'react';

const Company = ({ company }) => {
    const { name, img, employee, task, remaining } = company;
    return (
        <div>
            <div >
                {/* <h2 className='text-center text-4xl font-semibold mb-3 mt-5'>{name}</h2> */}
                <img src={img} className="w-full" alt="" />
            </div>
            <div class="shadow bg-green-200  border-b rounded-lg">
                <div class="stat flex flex-row justify-around lg:px-20">
                    <div class="stat-figure text-purple-700 text-3xl font-bold">
                    {name}
                    </div>
                    <div>
                        <div class="stat-value">{task}</div>
                        <div class="stat-title">Tasks done</div>
                        <div class="stat-desc text-pink-600 font-bold">{remaining} tasks is remaining</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;