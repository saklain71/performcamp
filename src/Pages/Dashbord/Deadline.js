import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';


//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { format } from "date-fns";
import { defaultFormat } from "moment";
import { useRef } from "react";
import { setDate } from "date-fns/esm";





function Deadline() {
  // Array to store month string values
  const calendarRef = useRef(null);

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
                setSelectedDate(data);
            })
    }
}, [user]);






  return (
    <div className="maincontainer my-12">
      <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    initialView="dayGridMonth"
                   
                    events ={selectedDate.map(event =>{
                       return {
                        title: event.title, date: event.deadline
                       }
                    })}
                   
                    />
      
      
      
</div>
  );
}

export default Deadline;