import React from 'react';
import "./Ticket.css";

const home = (props) => {
  return (
      <>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <div className="ticket-images">
          <img src= {props.src} alt={props.alt} />
        </div>
        <div className="ticket-text">
          {props.text}
        </div>
      </a>
      </>
  )
}

export default home