import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./SocialLink.css";
const SocialLink = (props) => {
  return (
    <>
      <div className="icons">
        <a href="" id='anchor-links'><FacebookIcon className="social-media-icon" /></a>
        <a href="" id='anchor-links'><TwitterIcon className="social-media-icon" /></a>
        <a href="" id='anchor-links'><LinkedInIcon className="social-media-icon" /></a>
        <a href="" id='anchor-links'><InstagramIcon className="social-media-icon" /></a>
      </div>
    </>
  );
};

export default SocialLink;