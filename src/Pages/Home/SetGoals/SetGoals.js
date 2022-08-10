import React from 'react';
import feedback1 from "../../../Image/feedback1.svg"
const SetGoals = () => {
    return (
        <div class="bg-base-100 max-h-lg lg:py-20">
            <div class="card-body items-center text-center">
                <h2 class="lg:text-4xl text-2xl font-semibold lg:px-20">Create a performance management process that <br /> works for your organization.</h2>                
            </div>
            <figure class="px-10 pt-10 lg:flex hidden justify-center items-center">
                <img src={feedback1} alt="Shoes" class="rounded-xl" />
            </figure>
        </div>
    );
};

export default SetGoals;