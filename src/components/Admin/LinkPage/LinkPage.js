import React from "react";
import Linkcard from "./Linkcard";
import "./LinkPage.css";
const LinkPage = () => {
  return (
    <div className="Link-content">
      <div className="link-top-nav">
        <button className="addlink">Add Link</button>
      </div>
      <div className="link-body">
        <Linkcard />
      </div>
    </div>
  );
};

export default LinkPage;
