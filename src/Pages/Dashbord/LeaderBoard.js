import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeaderBoard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [user] = useAuthState(auth);

    const starRating = <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/leaderboard`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('reviews from leaderboard', data);
                    setLeaderboard(data)
                })
        }
    }, [user]);


    const scores = {
        'player1' : 9,
        'player2' : 3,
        'player3' : 7,
        'player4' : 5
    };

    const leader = Object.assign(
        {}, 
        ...Object.entries(leaderboard)
            .sort(([,a], [,b]) => b.ratings-a.ratings)
            .map(([_id], i) => ({[i]: _id}))
     );
     console.log(leader);

    return (
        <div>
            <h1 className='text-3xl font-bold text-primary text-center py-8'>LeaderBoard</h1>

            <table class="border-collapse w-full">
                <thead>
                    <tr>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Rank</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Completed Task</th>
                        <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        leaderboard.map((review, index) => <>

                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Rank</span>
                                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">{index + 1}</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                                    <div className='flex justify-start items-center'>
                                    <img referrerPolicy="no-referrer"
                                        className="h-8 w-8 rounded-full mr-4"
                                        referrerpolicy="no-referrer"
                                        src={review.employeeImage}
                                        alt=""
                                    />
                                    <span>{review?.employeeName}</span>
                                    </div>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Completed Task</span>
                                    <span>{review.completedTasks}</span>
                                </td>
                                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Total Rating</span> {review.ratings}
                                </td>
                            </tr>
                        </>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default LeaderBoard;