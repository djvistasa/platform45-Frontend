/**
 *
 * TogglePanelButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledTogglePanelButton from './styledTogglePanelButton';


function TogglePanelButton(props) {
  const { handleClick } = props;
  return (
    <StyledTogglePanelButton onClick={handleClick} >
      <i></i>
    </StyledTogglePanelButton>
  );
}

TogglePanelButton.propTypes = {
  handleClick: PropTypes.func,
};

export default TogglePanelButton;
