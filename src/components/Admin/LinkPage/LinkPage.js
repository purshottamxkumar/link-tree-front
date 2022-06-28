import React, { useEffect, useState } from "react";
import Linkcard from "./Linkcard";
import "./LinkPage.css";
import Button from "@mui/material/Button";
import axios from "axios";

const LinkPage = () => {
  const [userLinks, setUserLinks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/links/getlinks/62b5e8b499d84dc7271cf478`
      );
      setUserLinks(response.data.links);
    };
    fetchData();
  }, []);
  const addLink = async () => {
    const response = await axios.post(
      `http://localhost:5000/links/createlink`,
      {
        creator: "62b5e8b499d84dc7271cf478",
      }
    );
    console.log(response.data);
    setUserLinks((prev) => {
      return [...prev, response.data.link];
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
        {userLinks.map((userLink, index) => {
          return <Linkcard key={index} {...userLink} />;
        })}
      </div>
    </div>
  );
};

export default LinkPage;
