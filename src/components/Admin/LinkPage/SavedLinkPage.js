import React, { useEffect, useState } from "react";
import LinkCard from "../../UserPage/LinkCard";
import axios from "axios";
const SavedLinkPage = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const getresponse = async () => {
      const response = await axios.get(
        `http://localhost:5000/links/getlinksbyusername/`
      );

      const newResponse = response.data;
      setResponse(newResponse);
    };
    getresponse();
  }, []);
  return (
    <>
      <>
        <div className="user-wrapper">
          <div className="container-u">
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                className="w3-margin"
                alt="Person"
                max-width="100%"
                height="150px"
                style={{ borderRadius: "50%" }}
              />
              <div className="w3-text-white">
                <p className="w3-large">
                  <strong>{response.name}</strong>
                </p>
              </div>
              <div className="links-container">
                {response.links.map((link) => {
                  return <LinkCard key={link._id} link={link} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SavedLinkPage;
