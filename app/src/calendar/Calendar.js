import React, { useState, useEffect } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import EventCard from "../event-card/EventCard";
import "./Calendar.css";

export default function Calendar() {
   const [currentEvents, setCurrentEvents] = useState([]);
   const calendarRef = React.useRef();
   const [modal, setModal] = useState({ index: null, active: false });

   useEffect(() => {
      if (modal.active) {
         document.body.classList.add("active-modal");
      } else {
         document.body.classList.remove("active-modal");
      }
   }, [modal.active]);

   const toggleModal = () => {
      setModal((prevModal) => ({
         ...prevModal,
         active: !prevModal.active,
      }));
   };

   const showDetails = (index) => {
      setModal((prevModal) => ({
         index,
         active: true,
      }));
   };

   function handleEventClick(eventInfo) {
      showDetails(eventInfo.event.id);
      alert(
         "Title: " +
            eventInfo.event.title +
            "\nStart: " +
            eventInfo.event.start +
            "\nEnd: " +
            eventInfo.event.end
      );
   }

   function handleDateSelect(selectInfo) {}

   function handleEvents(events) {
      setCurrentEvents(events);
   }

   function handleAddEventBtn() {
      let calendarApi = calendarRef.current.getApi();
      let title = prompt("Input a title");
      let date = prompt("Enter a date in YYYY-MM-DD format");
      let time = prompt("Enter a start time in 00:00 24-hour format");
      let start = new Date(date + "T" + time + ":00");
      let allDayPrompt = prompt(
         'Is this an all day event? (Type "Yes" or "No")'
      );
      let allDay;
      let end;
      let endPrompt;

      if (allDayPrompt.toLocaleLowerCase() === "yes") {
         allDay = true;
      } else {
         allDay = false;
         endPrompt = prompt("Enter an end time in 00:00 24-hour format");
         end = new Date(date + "T" + endPrompt + ":00");
      }

      calendarApi.unselect(); // clear date selection

      if (title) {
         calendarApi.addEvent({
            id: createEventId(),
            title,
            start: start,
            end: end,
            allDay: allDay,
         });
      }
   }

   return (
      <div className="calendar">
         <Sidebar currentEvents={currentEvents} />
         <div className="calendar-main">
            <FullCalendar
               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
               ref={calendarRef}
               headerToolbar={{
                  left: "prev,next today addEventBtn",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
               }}
               initialView="dayGridMonth"
               customButtons={{
                  addEventBtn: {
                     text: "Add Event",
                     click: handleAddEventBtn,
                  },
               }}
               editable={false}
               selectable={false}
               selectMirror={true}
               dayMaxEvents={true}
               weekends={true}
               displayEventEnd={true}
               initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
               select={handleDateSelect}
               eventContent={renderEventContent} // custom render function
               eventClick={handleEventClick}
               eventsSet={handleEvents} // called after events are initialized/added/changed/removed

               /* you can update a remote database when these fire:
           eventAdd={addEvent}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
            />
         </div>
         {/* <div className="cards">
            {currentEvents.map((event) => (
               <div key={event.id} className="card">
                  <h3>{event.title}</h3>
                  <p>{formatDate(event.start)}</p>
                  <p>{formatDate(event.end)}</p>
                  <button className="cardbtn" onClick={()  => showDetails(event.id)}>
                     View Details
                  </button>
                  {modal.active && modal.index === event.id && (
                     <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                           <p>
                              Start: {formatDate(event.start, {
                                 year: "numeric",
                                 month: "short",
                                 day: "numeric",
                                 hour: "numeric",
                                 minute: "2-digit",
                              })}
                           </p>
                           <p>
                              End: {formatDate(event.end, {
                                 year: "numeric",
                                 month: "short",
                                 day: "numeric",
                                 hour: "numeric",
                                 minute: "2-digit",
                              })}
                           </p>
                           <button
                              className="close-modal"
                              onClick={toggleModal}
                           >
                              CLOSE
                           </button>
                        </div>
                     </div>
                  )}
               </div>
            ))}
         </div> */}
      </div>
   );
}

function renderEventContent(eventInfo) {
   return (
      <>
         <b>{eventInfo.timeText}</b>
         <i>{eventInfo.event.title}</i>
      </>
   );
}

function Sidebar({ currentEvents }) {
   return (
      <div className="calendar-sidebar">
         <div className="calendar-sidebar-section"></div>
         <div className="calendar-sidebar-section">
            <h2>All Events ({currentEvents.length})</h2>
            <ul>
               {currentEvents.map((event) => (
                  <SidebarEvent key={event.id} event={event} />
               ))}
            </ul>
         </div>
      </div>
   );
}

function SidebarEvent({ event }) {
   return (
      <li key={event.id}>
         <b>
            {formatDate(event.start, {
               year: "numeric",
               month: "short",
               day: "numeric",
               hour: "numeric",
               minute: "2-digit",
            })}
         </b>
         <i>{event.title}</i>
      </li>
   );
}
