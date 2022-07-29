import React from 'react';

const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            <div className="w-12 h-12 border-b-2 border-blue-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;