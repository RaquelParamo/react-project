import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import UserCard from "../UserCard";

import { getUserById as fetchUserById } from "../../services/usersApi";
import {
  UserContext,
  addUser,
  getUserById
} from "../../context/userContext";

function UserProfile({ match }) {
  const [state, dispatch] = useContext(UserContext);

  const { id } = match.params;
  const user = getUserById(state, id);

  useEffect(() => {
    async function fetchUser() {
      const user = await fetchUserById(id);
      dispatch(addUser(user));
    }

    if (!user) {
      fetchUser();
    }
  }, [id, user, dispatch]);

  return user ? <UserCard {...user} /> : <h3>Loading user...</h3>;
}

UserProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default UserProfile;
