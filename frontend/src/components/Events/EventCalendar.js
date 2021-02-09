import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";

const localizer = momentLocalizer(moment);

function Event({ event }) {
   let timeStart;
   let timeEnd
   let image;
   let button;
   
   if(event.image == "none") {
     timeStart = <p><strong>Start: </strong>{new Date(event.start).toLocaleDateString()}</p>;
     timeEnd = <p><strong>End: </strong>{new Date(event.end).toLocaleDateString()}</p>;
   } else {
     timeStart = <p><strong>Start: </strong>{new Date(event.start).toLocaleString()}</p>;
     timeEnd = <p><strong>End: </strong>{new Date(event.end).toLocaleString()}</p>;
     image = <img src={event.image}></img>;
     button = <button><a href={event.linkToEvent}>Sign up</a></button>;
   }
 
   let popoverClickRootClose = (
     <Popover id="popover-trigger-click-root-close" style={{ opacity: 1 }}>
       <p><strong>{event.title}</strong></p>
       {image}
       {timeStart}
       {timeEnd}
       {button}
     </Popover>
   );

  return (
   <div>
     <div>
       <OverlayTrigger
         id="help"
         trigger="click"
         rootClose
         container={this}
         placement="top"
         overlay={popoverClickRootClose}
       >
         <div>{event.title}</div>
       </OverlayTrigger>
     </div>
   </div>
 );
}

export default class eventCalendar extends Component {
   render() {
      return (
         <Calendar
              startAccessor="start"
              endAccessor="end"
              localizer={localizer}
              events={this.props.holidays}
              defaultDate={new Date()}
              components={{
                event: Event
              }}
            />
      )
   }
}
