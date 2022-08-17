import React from 'react';

const ReviewDetailModal = ({review}) => {
    return (
        <div>
            <input type="checkbox" id="details-review-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-purple-400">Title: {review.title}</h3>
                <p className='text-md'><span className='text-blue-400'>Description:</span> {review.description}</p>
                <p><span className='text-blue-400'>Employee Name:</span> {review.employeeName}</p>
                <p><span className='text-blue-400'>Employee Email:</span> {review.email}</p>
                <p><span className='text-blue-400'>Deadline: </span></p>
                <p><span className='text-blue-400'>Proof:</span> {review.proof}</p>
                <div className="modal-action">
                    <label for="details-review-modal" className="btn btn-xs btn-outline btn-error">Cancel</label>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ReviewDetailModal;