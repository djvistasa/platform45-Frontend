/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styledComponents/styledButton';

export function Button(props) {
  const {
    title,
    disabled,
    onClick,
    type,
    borderRadius = false,
    primary = false,
    width,
  } = props;

  const handleClick = () => {
    if (typeof onClick === 'function' && onClick) {
      onClick();
    }
  };
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={handleClick}
      borderRadius={borderRadius}
      primary={primary}
      width={width}
    >
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  borderRadius: PropTypes.bool,
  primary: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
};

export default Button;
