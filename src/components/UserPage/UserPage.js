import React from "react";
import UserCard from "./UserCard";
import LinkCard from "./LinkCard";
const UserPage = () => {
  return (
    <div className="user-wrapper">
      <div className="card-wrapper">
        <UserCard />
      </div>
      <div className="user-links">
        <LinkCard />
      </div>
    </div>
  );
};

export default UserPage;
