/**
 *
 * SingleSelectOptionsGroup
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledRadioButton from '../RadioButton/styledRadioButton'

/* eslint-disable react/prefer-stateless-function */
class SingleSelectOptionsGroup extends PureComponent {
  handleChange = (event) => {
    const { input } = this.props;
    return input.onChange(event.target.value);
  }

  render() {
    const { options, primary = false, input, label, meta: { touched, error, warning } } = this.props;
    return (
      <div>
        <FormControl component="fieldset" required>
          <FormLabel component="label">{label}</FormLabel>
          <RadioGroup
            aria-label={label}
            {...input}
            onChange={this.handleChange}
          >
            {options.map((option) => (
              <FormControlLabel key={option.id} value={option.title.toString()} control={<StyledRadioButton primary={primary ? 1 : 0}  />} label={option.title} disabled={option.disabled}  />
            ))}
          </RadioGroup>
        </FormControl>
        {touched && (
          (error && <FormFieldError error={error} />) ||
          (warning && <FormFieldWarning warning={warning}/>)
        )}
      </div>
    );
  }
}

SingleSelectOptionsGroup.propTypes = {
  options: PropTypes.array,
  labelFormatter: PropTypes.func,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  primary: PropTypes.bool,
};

export default SingleSelectOptionsGroup;
