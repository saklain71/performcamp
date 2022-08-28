import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0iYbHgcyWlDX98TNiADfw3LJxCEDM4jnXBwrAhugRqjqDfpyfVXKZ1ufi69SM8AeXJZhO9RFHJ720EP95o4CR900UWzXN4eO');

const ConfirmPayment = () => {
    const {id}= useParams()
    const url = `https://whispering-gorge-29329.herokuapp.com/bookings/${id}`;
    const { data: booking, isLoading, } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-blue-500 font-semibold p-5 lg:text-start text-center'>Make Your Payment Here</h2>
            <div className='flex flex-col justify-center items-center p-10'>
                <div class="card-body mb-10 shadow-xl lg:w-96 w-full">
                    <h2 class="card-title"><span className='text-purple-600'>{booking.organization},<span className='text-yellow-600'> Pay And be The Part of PerpormCamp</span></span></h2>                    
                    <p>You are getting service for <span className='text-orange-700 text-xl'>{booking.service}</span></p>
                    <p>Total Amount: <span className='text-orange-700 text-xl'>${booking.price}</span></p>
                </div>
                <div class="card-body mb-10 shadow-xl lg:w-96 w-full">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPayment;