import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./LinkCard.css";

const LinkCard = (props) => {
  const { link } = props;
  return (
    <>
      <a
        href={link.link}
        className="w3-button w3-hover-pink w3-large w3-round-xlarge w3-yellow link link-card"
        target={"_blank"}
        rel={"noreferrer"}
      >
        {link.label}
        <div className="icon">
          <BookmarkBorderIcon />
        </div>
      </a>
    </>
  );
};

export default LinkCard;
