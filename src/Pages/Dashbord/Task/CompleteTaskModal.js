import React, { useState } from 'react';

const CompleteTaskModal = ({task, handleConfirm}) => {
    const [link, setLink] = useState('');
    console.log(task);
    // const linkFieldValue = document.getElementById('linkField').value;
    // console.log(linkFieldValue);

    const handleLinkBlur = event => {
        setLink(event.target.value);
        console.log(event.target.value);
    }


  
    return (
        <div>
        <input type="checkbox" id="complete-task-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <p className='text-lg text-blue-400'>Please give proof of the task!</p>
                <input id="linkField" onBlur={handleLinkBlur} type="text" placeholder="Give the task link" class="input input-bordered w-full max-w-xs my-3" />
                <div className="modal-action">
                    <label for="complete-task-modal" className="btn btn-xs btn-outline btn-error">Cancel</label>
                    <button onClick={() => handleConfirm({task, link, setLink})
                    }  className="btn btn-outline btn-success btn-xs text-white" >Confirm</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CompleteTaskModal;