import React from "react";

const SocialLink = (props) => {
  return (
    <>
      <div className="social-link">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={props.img} alt={props.alt} className="icon" />
        </a>
      </div>
    </>
  );
};

export default SocialLink;
