import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ review }) => {
    return (
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img alt="Shoes" src={review.img} style={{ width: '80px' }}  />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-blue-400">{review.role}</h2>
                    <p>{review.description}</p>
                    <div class="card-actions">
                       <Link to={review.route} class="btn btn-link font-bold text-blue-400 hover:no-underline">Learn More <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg></Link> 
                    </div>
                </div>
            </div>
    );
};

export default Card;