import React from 'react';
import logo from '../../Image/logo/PerformCamp-logo.png'
const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className=" animate-bounce">
                <img src={logo} alt="PerformCamp logo" />
            </div>
        </div>
    );
};

export default Loading;