import React from 'react';
import { Link } from 'react-router-dom';

import { userPropTypes } from '../../constants/userPropTypes';

import './styles.scss';

function UserCard(props) {
  const user = props.user;
  const { id, city, email, streetName, picture } = user || {};
  return (
    <li className="UserCard__card">
      
      
          <p><img className="cardimg" src={picture} alt={city} /></p>
          <p>City: {city ? <h4>{city}</h4>: null}</p>
          <p>Adress:{streetName}</p>
          <p><a href="mailto:{email}">Email: {email ? <h4>{email}</h4>: null}</a></p>
      
      
    </li>
  );
}

UserCard.propTypes = {
  user: userPropTypes
};

export default UserCard;
