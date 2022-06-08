import React from 'react';
import "./styles.css";
import Ticket from "./Ticket.js";

const home = () => {

  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  }; 
  // Above is for the target = "_blank" code!

  return (
      <>
      <div className="head">
        <h1><a href="https://github.com/purshottamxkumar/link-tree-front" target="_blank">Linktree</a></h1>
      </div>
      <div className="main">
        <div className="main-content">
          <div className="left">
            <div className="left-image">
              <img src = "/images/profile.png"alt="profile-img" className='profile-img'/>
            </div>
          </div>
          <div className="middle">
            <div className="middle-content">
              <div className="middle-content-without-tickets">
                <h1>Purshottam Kumar!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum cupiditate optio dolorem architecto hic illo cum, soluta molestiae vero tenetur? Minus reiciendis, assumenda officiis exercitationem explicabo nihil! Id, sit.</p>
              </div>
              <div className="tickets">
                <Ticket text = "a new ticket"/>
              </div>
              <div className="tickets">
                <Ticket text = "Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
              </div>
              <div className="tickets">
                <Ticket text = "a fat guy on railway station"/>
              </div>
              <div className="tickets">
                <Ticket text = "a skinny guy"/>
              </div>
              <div className="tickets">
                <Ticket text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum cupiditate optio dolorem."/>
              </div>
            </div>
            <div className="middle-links">
              <a href="https://www.facebook.com/thepurshottamkumar/" target="_blank" rel="noopener noreferrer"><img src="/images/links_images_colorful/fb.png" alt="facebook-logo" className='icon'/></a>
              <a href="https://www.twitter.com/thepurshottam" target="_blank" rel="noopener noreferrer"><img src="/images/links_images_colorful/twitter.png" alt="twitter-logo" className='icon'/></a>
              <a href="https://www.linkedin.com/in/thepurshottamkumar" target="_blank" rel="noopener noreferrer"><img src="/images/links_images_colorful/linkedin.png" alt="linkedin-logo" className='icon'/></a>
              <a href="https://www.instagram.com/purshottamxkumar" target="_blank" rel="noopener noreferrer"><img src="/images/links_images_colorful/instagram.png" alt="instagram-logo" className='icon'/></a>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default home