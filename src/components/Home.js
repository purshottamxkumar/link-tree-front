import React from "react";
import "./Home.css";
import Ticket from "./Ticket.js";

const home = () => {
  return (
    <>
      <div className="head">
        <h1>
          <a
            href="https://github.com/purshottamxkumar/link-tree-front"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linktree
          </a>
        </h1>
      </div>
      <div className="main">
        <div className="main-content">
          <div className="left">
            <div className="left-image">
              <img
                src="/images/profile.png"
                alt="profile-img"
                className="profile-img"
              />
            </div>
          </div>
          <div className="middle-content">
            <div className="middle-content-without-tickets">
              <div className="middle-without-tickets-left">
                <h1>Purshottam Kumar!</h1>
                <p id="about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  laborum cupiditate optio dolorem architecto hic illo cum,
                  soluta molestiae vero tenetur? Minus reiciendis, assumenda
                  officiis exercitationem explicabo nihil! Id, sit.
                </p>
              </div>
              <div className="middle-without-tickets-right">
                <div className="links">
                  <a
                    href="https://www.facebook.com/thepurshottamkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/links_images_colorful/fb.png"
                      alt="facebook-logo"
                      className="icon"
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/thepurshottam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/links_images_colorful/twitter.png"
                      alt="twitter-logo"
                      className="icon"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thepurshottamkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/links_images_colorful/linkedin.png"
                      alt="linkedin-logo"
                      className="icon"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/purshottamxkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/links_images_colorful/instagram.png"
                      alt="instagram-logo"
                      className="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="middle-content-with-tickets">
              <div className="tickets">
                <Ticket
                  text="a new ticket"
                  href="https://www.facebook.com/thepurshottamkumar"
                  src="/images/monkey.png"
                  alt="monkey-img"
                />
              </div>
              <div className="tickets">
                <Ticket
                  text="Lorem ipsum dolor sit amet."
                  src="/images/monkey.png"
                />
              </div>
              <div className="tickets">
                <Ticket
                  text="a fat guy on railway station"
                  src="/images/monkey.png"
                />
              </div>
              <div className="tickets">
                <Ticket text="a skinny guy" src="/images/monkey.png" />
              </div>
              <div className="tickets">
                <Ticket text="Lorem ipsum." src="/images/monkey.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
