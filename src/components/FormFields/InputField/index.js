/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledInputField from './styledInputField'

function InputField(props) {
  const {
    input,
    label,
    width,
    type,
    placeholder,
    disabled = false,
    autoComplete = 'on',
    rows = 1,
    meta: { touched, error, warning },
  } = props;

  const element = document.getElementById(input.name);

  if (element && element !== null) {
    document.getElementById(input.name).addEventListener('keydown', (el) => {
      if (el.which === 38 || el.which === 40) {
        el.preventDefault();
      }
    });
  }
  return (
    <div>
      <label htmlFor={input.name} >
        <span>{label}</span>
        <StyledInputField
          {...input}
          type={type}
          placeholder={placeholder}
          label={placeholder}
          rows={rows}
          autoComplete={autoComplete || 'off'}
          disabled={disabled}
          valid={!error && !warning ? 1 : 0}
          width={width}
        />
      </label>
      {touched && (
        (error && <FormFieldError error={error} />) ||
        (warning && <FormFieldWarning warning={warning}/>)
      )}
    </div>
  );
}

InputField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  disabled: PropTypes.bool,
  passwordStrengthCheck: PropTypes.bool,
  isSearchField: PropTypes.bool,
  meta: PropTypes.object,
  rows: PropTypes.number,
};

export default InputField;
