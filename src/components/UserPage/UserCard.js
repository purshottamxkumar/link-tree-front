import React from "react";
import SocialLink from "./SocialLink";
const userSocial = [
  {
    url: "https://www.facebook.com/thepurshottamkumar/",
    img: "https://www.flaticon.com/free-icon/facebook_124010",
    alt: "facebook",
  },
  {
    url: "https://www.twitter.com/thepurshottam",
    img: "https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png",
    alt: "facebook",
  },
  {
    url: "https://www.linkedin.com/in/thepurshottamkumar",
    img: "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg",
    alt: "facebook",
  },
  {
    url: "https://www.instagram.com/purshottamxkumar",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png",
    alt: "facebook",
  },
];
const UserCard = () => {
  return (
    <div className="usercard-wrapper">
      <div className="profile">
        <div className="userimage">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            alt="profile-img"
            className="profile-img"
          />
        </div>
      </div>
      <div className="social-links">
        {userSocial.map((strategy, i) => {
          return <SocialLink user={user} />;
        })}
      </div>
    </div>
  );
};

export default UserCard;
