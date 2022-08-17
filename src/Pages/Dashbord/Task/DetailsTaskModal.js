import React from 'react';

const DetailsTaskModal = ({task}) => {
    console.log(task);
    return (
        <div>
        <input type="checkbox" id="details-task-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-purple-400">{task.title}</h3>
                <p className='text-md'>{task.description}</p>
                <p><span className='text-blue-400'>Appointee:</span> {task?.appointee}</p>
                <p><span className='text-blue-400'>Deadline: </span></p>
                <div className="modal-action">
                    <label for="details-task-modal" className="btn btn-xs btn-outline btn-error">Cancel</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DetailsTaskModal;