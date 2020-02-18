import React, { useContext } from 'react';

import { UserContext, addUser } from '../../context/userContext';
import { getUserById } from '../../services/usersApi';

import UserCard from '../UserCard';
import FetchButton from '../FetchButton';

import './styles.scss';

function UserList() {
  const [state, dispatch] = useContext(UserContext);
  const { userList } = state;

  function handleFetchUser(id) {
    async function fetchUser() {
      const user = await getUserById(id);
      dispatch(addUser(user));
    }

    const hasUser = userList.find(({ id: usId }) => usId === id);
    if (!hasUser) {
      fetchUser();
    }
  }

  console.log(userList);

  return (
    <>
    
      <FetchButton initialCounter={userList.length} onFetch={handleFetchUser} />
      <ul className="UserList__main-list">
       {userList.map(user => (
          <UserCard key={user.city} user={user} />
        ))}
      </ul>
    </>
  );
}

export default UserList;
