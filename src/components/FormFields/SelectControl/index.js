/**
 *
 * SelectControl
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledSelectControl from './styledSelectControl'


function SelectControl(props) {
  const {
    input,
    label,
    options,
    disabled,
    width,
    placeholder = 'select one',
    meta: { touched, error, warning },
  } = props;

  return (
    <div className="form-select">
      <FormControl fullWidth>
        <InputLabel htmlFor={input.name}>{label}</InputLabel>
        <StyledSelectControl
          {...input}
          disabled={disabled}
          valid={input.value !== '' ? 1 : 0}
          width={width}
          onChange={(e) => input.onChange(e.target.value)}
        >
          <MenuItem value="">{placeholder}</MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </StyledSelectControl>
      </FormControl>
      {touched && (
        (error && <FormFieldError error={error} />) ||
        (warning && <FormFieldWarning warning={warning}/>)
      )}
    </div>
  );
}

SelectControl.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  width: PropTypes.number,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
};

export default SelectControl;

