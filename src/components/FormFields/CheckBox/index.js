/**
 *
 * CheckBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledCheckBox from './styledComponents/styledCheckBox';

function CheckBox(props) {
  const {
    input,
    defaultChecked,
    label,
    left,
    value,
    meta: { touched, error, warning },
    primary = false,
  } = props;

  return (
    <div>
      <label htmlFor={input.name} id={input.name}>
        {!left && <span>{label}</span>}
        <StyledCheckBox
          primary={primary ? 1 : 0 }
          {...input}
          type="checkbox"
          value={value}
          defaultChecked={defaultChecked}
        />
        {left && <span>{label}</span>}
      </label>
      {touched && (
        (error && <FormFieldError error={error} />) ||
        (warning && <FormFieldWarning warning={warning}/>)
      )}
    </div>
  );
}

CheckBox.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.any,
  left: PropTypes.bool,
  primary: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  value: PropTypes.string,
};

export default CheckBox;
