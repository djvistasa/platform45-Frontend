/**
 *
 * FormFieldError
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledFormFieldError from './styledFormFieldError'

function FormFieldError(props) {
  const { error } = props;
  return (
    <StyledFormFieldError>{error}</StyledFormFieldError>
  );
}

FormFieldError.propTypes = {
  error: PropTypes.string,
};

export default FormFieldError;
