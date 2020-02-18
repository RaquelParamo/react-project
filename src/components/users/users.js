import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { fetchUser, fetchPosts } from './fakeApi';
import ParentMenu from '../ParentMenu';

import { UserContext, addUser } from '../../context/userContext';
import { getUserById } from '../../services/usersApi';

import UserCard from '../UserCard';
import FetchButton from '../FetchButton';

import './styles.scss';

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(u => setUser(u));
  }, []);

  if (user === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <main>
        <h1>{user.name}</h1>
        <ProfileTimeline />
      </main>
    </>
  );
}

function ProfileTimeline() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchPosts().then(p => setPosts(p));
  }, []);

  if (posts === null) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map(post => (
        <li key={post.name}>{post.text}</li>
      ))}
    </ul>
  );
}
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
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<ProfilePage />);
