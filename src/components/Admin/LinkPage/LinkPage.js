import React, { useState } from "react";
import Linkcard from "./Linkcard";
import "./LinkPage.css";
import Button from "@mui/material/Button";
// import axios from "axios";
const LinkPage = () => {
  const [userLinks, setUserLinks] = useState(["a", "b", "c"]);
  /*const addLink = async () => {
    const response = await axios.post(
      `/links/createlink`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setUsersLinks((prev) => {
      return [...prev, response.data];
    });
  };*/
  const addLink = () => {
    setUserLinks((prev) => {
      return [...prev, "s"];
    });
  };
  return (
    <div className="Link-content">
      <div className="link-top-nav">
        <Button
          color="secondary"
          style={{ backgroundColor: "#9b62fe24" }}
          onClick={addLink}
        >
          Add New Link
        </Button>
      </div>
      <div className="link-body">
        {userLinks.map((userLink) => {
          return <Linkcard userLink={userLink} />;
        })}
      </div>
    </div>
  );
};

export default LinkPage;
