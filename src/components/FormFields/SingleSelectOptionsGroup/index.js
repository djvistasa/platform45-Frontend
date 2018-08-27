/**
 *
 * SingleSelectOptionsGroup
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import StyledFormLabel from './styledComponents/styledLabel';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledRadioButton from '../RadioButton';
import StyledFormControl from './styledComponents/styledFormControl';
import StyledRadioGroup from '../SingleSelectOptionsGroup/styledComponents/styledRadioGroup';

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
        <StyledFormControl component="fieldset">
          <StyledFormLabel component="label">{label}</StyledFormLabel>
          <StyledRadioGroup
            aria-label={label}
            {...input}
            onChange={this.handleChange}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.title.toString()}
                control={
                  <StyledRadioButton
                    icon={<img src={option.icon} alt="avatar"/>}
                    checkedIcon={<img src={option.checkedIcon} alt="avatar"/>}
                    primary={primary ? 1 : 0}
                  />
                }
                label={option.title}
                disabled={option.disabled}
              />
            ))}
          </StyledRadioGroup>
        </StyledFormControl>
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
