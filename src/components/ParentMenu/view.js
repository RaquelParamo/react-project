import React, { useEffect, useState, Fragment, useRef } from 'react';

import Sticky from '../Sticky';
import './styles.scss';

export default () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  /*useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);*/

  return (
    <Fragment>
      <div className="topnav">
        <a className="active" href={'/'}>
          Home
        </a>
        <a href={'/user'}>Reset Search</a>
      </div>
    </Fragment>
  );
};
