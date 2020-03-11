import React from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Styles
import { IconSpan } from './styles';

//Color argument should be the property name of the desired icon color found in main_theme.js.

const Icon = ({ icon, size, color }) => {
  let iconSize;
  switch (size) {
    case 'sm':
      iconSize = '.85em';
      break;
    case 'md':
      iconSize = '.95em';
      break;
    case 'lg':
      iconSize = '1em';
      break;
    case 'xl':
      iconSize = '1.2em';
      break;
  }
  return (
    <IconSpan color={color} size={iconSize}>
      <FontAwesomeIcon icon={icon} />
    </IconSpan>
  );
};

export default Icon;

propTypes.Icon = {
  icon: propTypes.array.isRequired,
  size: propTypes.string.isRequired,
  color: propTypes.string.isRequired
};
