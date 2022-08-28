import React, { useEffect, useState } from "react";


//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";





function Deadline() {
  // Array to store month string values
  

  // State for date selected by user
  const [selectedDate, setSelectedDate] = useState([]);
  const [user] = useAuthState(auth);

  // State for text above calander
  
  useEffect(() => {
    if (user) {
        fetch(`http://localhost:5000/task/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('user task', data);
                setSelectedDate(data);
            })
    }
}, [user]);



 

  return (
    <div className="maincontainer">
      
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        // datesSet={
        //   selectedDate.map(event =>(
        //     format(event.deadline)
        //     )
        //     )
        // }
        eventClick={
          function(){
            
            
              selectedDate.map(event =>(
            alert(event.title)
              
            )
            )
          
              
          }
        }
        
        eventContent={function() {
          return(
            <div>
              
  
              {
          selectedDate.map(event =>(
            <p key={event._id} className="font-bold">{event.title}</p>
          ))}
            </div>
          )
    }}
    // titleFormat={function() {
    //   selectedDate.map(event =>(
    //     defaultFormat(event.deadline)
          
    //     )
    //     )
    // }
    // }
        events={[{
             date: '2022-08-10'
        }]}
      />
      
</div>
  );
}

export default Deadline;