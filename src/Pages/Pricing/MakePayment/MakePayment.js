import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MakePayment = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetch(`https://whispering-gorge-29329.herokuapp.com/bookings`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/')
                }
                return res.json()
            })
            .then(data => setBookings(data));


    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            const url = `https://whispering-gorge-29329.herokuapp.com/bookings/${id}`
            fetch(url, {
                method: "DELETE",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success(`Canceled Your Bookings`)
                    }
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                })
        }
    }
    return (
        <div >
            <h2 className="text-center mt-10 text-3xl font-semibold">Payment Confirmation</h2>
            <div className='py-52 grid lg:grid-cols-3 md:grid-cols-2 items-center gap-10'>
                {
                    bookings.map((booking) =>
                        <div class="card w-full bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <h2 class="card-title">Service Type</h2>
                                        <h3>{booking?.service}</h3>
                                    </div>
                                    <h2>Total Amount: <span className="text-2xl font-bold">${booking?.price}</span></h2>
                                </div>
                                <div class="card-actions justify-end items-center">
                                    {(booking.price && !booking.paid) && <Link class="btn btn-sm btn-primary" to={`/confirmPayment/${booking._id}`}>Pay Now</Link>}
                                    {(booking.price && booking.paid) && <span className='text-green-600 font-bold'>Paid</span>}
                                    {!booking.paid && <button onClick={() => handleDelete(booking._id)} className='btn btn-link btn-sm text-error'>Cancel</button>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MakePayment;