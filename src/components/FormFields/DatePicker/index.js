/**
 *
 * DatePicker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FormFieldError from '../FormFieldError';
import FormFieldWarning from '../FormFieldWarning';
import StyledDatePicker from './styledComponents/styledDatePicker';
import StyledPickerWrapper from './styledComponents/styledPickerWrapper';

/* eslint-disable react/prefer-stateless-function */
class DatePickerInput extends React.PureComponent {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.props.input.onChange(moment(date).format('YYYY-MM-DD'))
  }
  render() {
    const {
      input, placeholder, label, icon,
      meta: {touched, error, warning},
    } = this.props

    return (
      <StyledPickerWrapper>
        <label>{label}</label>
        <StyledDatePicker
          {...input}
          placeholder={placeholder}
          dateFormat="YYYY-MM-DD"
          selected={input.value ? moment(input.value, 'YYYY-MM-DD') : null}
          onChange={this.handleChange}
          icon={icon}
        />
        {touched && (
          (error && <FormFieldError error={error} />) ||
          (warning && <FormFieldWarning warning={warning}/>)
        )}
      </StyledPickerWrapper>
    );
  }
}

export default DatePickerInput;
