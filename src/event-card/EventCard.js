import "./EventCard.css";

function EventCard(eventInfo) {
   return (
      <div>
         <b>{eventInfo.timeText}</b>
         <i>{eventInfo.event.title}</i>
      </div>
   );
}

export default EventCard;
