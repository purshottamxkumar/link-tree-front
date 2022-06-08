import React from 'react';
import "./Ticket.css";

const home = (props) => {
  return (
      <>
      <div className="ticket-images">
        <img src="/images/links_images_colorless/fb.png" alt="facebook-img" />
      </div>
      <div className="ticket-text">
        {props.text}
      </div>
      </>
  )
}

export default home