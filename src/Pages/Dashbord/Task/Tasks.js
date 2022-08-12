import React, { useEffect, useState } from 'react';
import './Task.css'


const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/task")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    }, [isReload]);

    

    return (
        <div>
            <div className='mid-content task-background border lg:m-12 text-black shadow-2xl rounded-lg'>
                <h1 className='font-bold text-4xl text-center py-5'>Task list</h1>
                {tasks.map((task) => (
                    <div className=' border p-5 shadow rounded-lg m-2'>
                        <div className='flex  justify-start w-full'>
                            <div>
                                <p className=''><span className='font-bold text-3xl'>Task title: </span><span className='text-3xl'>{task?.title}</span></p>
                                <p className='text-xl'><span className='font-bold'>Description: </span><span>{task?.description}</span></p>
                                <p className='text-md'><span className='font-bold'>Assigned to: </span>{task?.email}</p>
                            </div>

                        </div>


                    </div>
                ))}
            </div>

        </div>
    );
};

export default Tasks;