import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';


function Home() {
  return (
    <div className= "home">

      <h1 className="title">
        <span>S</span>
        <span>o</span>
        <span>c</span>
        <span>i</span>
        <span>a</span>
        <span>l</span>
        </h1>
        
      <div className="black_square">
      <h3 className="people">Meet new people and keep in touch!!</h3>
      <ul>
        <li>
          <Link to="/user"><button className="btn draw-border">Click to enter</button></Link>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Home;