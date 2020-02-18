import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function FetchButton({ initialCounter, onFetch }) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    if (counter) {
      onFetch(counter);
    }
  }, [counter]);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div className="banner">
      <h2>Welcome to your Social Network</h2>
      <button type="button" onClick={increaseCounter}>
        <span>Click</span> to discover new users
      </button>
    </div>
  );
}

FetchButton.propTypes = {
  initialCounter: PropTypes.number.isRequired
  // onFetch: PropTypes.func.isRequired
};

export default FetchButton;
