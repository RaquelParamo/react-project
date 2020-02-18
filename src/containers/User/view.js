import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import UserList from "../../components/UserList";
import UserProfile from "../../components/UserProfile";

import './styles.scss';

import { UserContextProvider } from "../../context/userContext";
import ParentMenu from "../../components/ParentMenu";

function User({ match }) {
  return (
    <div>
      <nav>
          <ParentMenu/>
        </nav>
      <div className="btn__checkitout">
        
        <Link to={`${match.path}/list`}><button className="btn draw-border ">Check it out!</button></Link>
      </div>
      <UserContextProvider>
        <Switch>
          <Route path={`${match.path}/list`} exact component={UserList} />
          <Route path={`${match.path}/:id`} exact component={UserProfile} />
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default User;