import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const LeaderBoard = () => {
    const [employees, setEmployees] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/employee`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log("employee", data);
                    setEmployees(data)
                    
                })
        }
    }, [user]);
    return (
        <div>
            <h1>Leader Board</h1>
        </div>
    );
};

export default LeaderBoard;