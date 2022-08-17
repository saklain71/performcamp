import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = () => {
    const [reviews, setReviews] = useState('');
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/pendingReview/${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('pending task', data);
                    setReviews(data)
                })
        }
    }, [user]);
    return (
        <div>
            <h1>Review: {reviews.length}</h1>
        </div>
    );
};

export default Review;