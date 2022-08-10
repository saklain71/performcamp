import React from 'react';
//import Link from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <h1 className="text-2xl text-center" >Explore Dashboard</h1>
      
          <label for="my-drawer-4" class="drawer-button btn btn-primary text-center">Explore Dashbord</label>
        </div> 
        <div className="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           
            
          </ul>
        </div>
      </div>
    );
};

export default Dashbord;