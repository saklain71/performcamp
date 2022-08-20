import React, { useState } from 'react';

const FeedbackModal = ({review, handleFeedbackSubmit}) => {
    const [comment, setComment] = useState('');


    const handleCommentBlur = event => {
        setComment(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div>
              <div>
        <input type="checkbox" id="feedback-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <p className='text-lg text-orange-400'>Please give the feedback!</p>
                <textarea onBlur={handleCommentBlur} class="form-control textarea textarea-info w-full rounded-2xl max-w-xs my-2" cols="25" rows="2" placeholder="Give the feedback here" name='description' required></textarea>
                <div className="modal-action">
                    <label for="feedback-modal" className="btn btn-xs btn-outline btn-error">Cancel</label>
                    <button onClick={() => handleFeedbackSubmit({review,comment})
                    }  className="btn btn-outline btn-success btn-xs text-white" >Submit</button>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default FeedbackModal;