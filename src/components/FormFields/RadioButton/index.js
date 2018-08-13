/**
 *
 * RadioButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledRadioButton from './styledRadioButton'

function RadioButton(props) {
  const { input, label, checked, defaultChecked, value } = props;

  const field = (checked || defaultChecked) ?
    (<StyledRadioButton {...input} checked={checked} defaultChecked={defaultChecked} type="radio" />) :
    (<StyledRadioButton {...input} value={value} type="radio" />);

  return (
    <label htmlFor={input.name}>
      {field}
      <span>&nbsp;</span>
      { label }
    </label>
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
