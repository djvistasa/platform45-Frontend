/**
 *
 * RadioButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRadioButton from './styledComponents/styledRadioButton';
import StyledLabel from './styledComponents/styledLabel';

function RadioButton(props) {
  const { label, checked, defaultChecked, value } = props;

  const field = (checked || defaultChecked) ?
    (<StyledRadioButton {...props} checked={checked} id={'styled-radio'} defaultChecked={defaultChecked} type="radio" />) :
    (<StyledRadioButton {...props} value={value} id={'styled-radio'} type="radio" />);

  return (
    <StyledLabel htmlFor={props.name} checked={checked}>
      {field}
      <span className="spacer">&nbsp;</span>
      { label }
    </StyledLabel>
  );
}

RadioButton.propTypes = {
  input: PropTypes.object,
  value: PropTypes.string,
  meta: PropTypes.object,
  label: PropTypes.any,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};

export default RadioButton;
