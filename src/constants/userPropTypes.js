import PropTypes from 'prop-types';

export const userPropTypes = PropTypes.shape({
  id: PropTypes.string,
  gender: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
  streetName: PropTypes.string,
  picture: PropTypes.string,
});

export const arrayOfUserPropTypes = PropTypes.arrayOf(userPropTypes);
