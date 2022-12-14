import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ loading, users, random }) => {
  console.log("users", users);

  if (users.length === 0) {
    return (
      <div style={userStyle}>
        {random.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(18rem, 1fr) )",
  gridGap: "1rem",
};

export default Users;
