/**
 *
 * SlideOutPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledSlideOutPanel from './styledSlideOutPanel'


function SlideOutPanel(props) {
  const { isPanelOpen, mainPanelHeight } = props;
  return (
    <StyledSlideOutPanel isPanelOpen={isPanelOpen} mainPanelHeight={mainPanelHeight}>
      <h1>My world today</h1>
      <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. View all days eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
      </p>
    </StyledSlideOutPanel>
  );
}

SlideOutPanel.propTypes = {
  isPanelOpen: PropTypes.bool,
  mainPanelHeight: PropTypes.number,
};

export default SlideOutPanel;
