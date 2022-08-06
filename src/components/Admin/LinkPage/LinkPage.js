import React, { useEffect, useState } from "react";
import Linkcard from "./LinkCard";
import "./LinkPage.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import { useUser } from "../../auth/useUser";
const LinkPage = () => {
  const [userLinks, setUserLinks] = useState([]);
  const [token] = useToken();
  const { userId } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/links/getlinks/${userId}`
      );
      setUserLinks(response.data.links);
    };
    fetchData();
  }, [userId]);
  const addLink = async () => {
    const response = await axios.post(
      `http://localhost:5000/links/createlink`,
      {},
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    setUserLinks((prev) => {
      return [...prev, response.data.link];
    });
  };
  return (
    <div className="Link-content">
      <div className="link-top-nav">
        <Button
          style={{ backgroundColor: "rgb(83 13 205)", color: "white" }}
          onClick={addLink}
        >
          Add New Link
        </Button>
      </div>
      <div className="link-body">
        {userLinks.map((userLink, index) => {
          return (
            <Linkcard key={index} {...userLink} setUserLinks={setUserLinks} />
          );
        })}
      </div>
    </div>
  );
};

export default LinkPage;
