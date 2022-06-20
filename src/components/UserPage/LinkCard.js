import React from "react";

const LinkCard = (props) => {
  return (
    <>
      <a
        href={"www.leetcode.com"}
        className="w3-button w3-hover-pink w3-large w3-round-xlarge w3-yellow link"
        target={"_blank"}
        rel={"noreferrer"}
      >
        {props.label}
      </a>
    </>
  );
};

export default LinkCard;
