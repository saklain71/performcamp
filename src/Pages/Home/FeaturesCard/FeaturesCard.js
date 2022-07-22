import React from 'react';
import happy from '../../../Image/happy.svg';
import goal from '../../../Image/Goals.svg';
import feedback from '../../../Image/feedback.svg';
import Card from './Card';

const FeaturesCard = () => {
    const reviews = [
        {
            _id: 1,
            role: 'Reviews & Checkins',
            description: 'PerformYard facilitates any review process, across any frequency and with a multitude of customizable inputs.',
            img: happy
        },
        {
            _id: 2,
            role: 'Goal Management',
            description: 'Goals and objectives are dynamic and incorporated into your process to align your organization.',
            img: goal,
        },
        {
            _id: 3,
            role: 'Continuous Feedback',
            description: "Feedback let's you recognize achievement, document individual performance and keep track of important notes.",
            img: feedback
        }
    ]
    return (
        <section className='lg:p-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Card
                        key={review._id} review={review}
                    ></Card>)
                }
            </div>
        </section>
    );
};

export default FeaturesCard;