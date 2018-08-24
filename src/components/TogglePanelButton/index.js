/**
 *
 * TogglePanelButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledTogglePanelButton from './styledTogglePanelButton';


function TogglePanelButton(props) {
  const { handleClick, isPanelOpen, isInitialLoad } = props;
  return (
    <StyledTogglePanelButton
      onClick={handleClick}
      isPanelOpen={isPanelOpen}
      isInitialLoad={isInitialLoad}
    >
      <i></i>
    </StyledTogglePanelButton>
  );
}

TogglePanelButton.propTypes = {
  handleClick: PropTypes.func,
  isPanelOpen: PropTypes.bool,
  isInitialLoad: PropTypes.bool,
};

export default TogglePanelButton;
