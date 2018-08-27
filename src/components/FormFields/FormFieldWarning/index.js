/**
 *
 * FormFieldWarning
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledFormFieldWarning from './styledComponents/styledFormFieldWarning'

function FormFieldWarning(props) {
  const { warning } = props;
  return (
    <StyledFormFieldWarning>{ warning }</StyledFormFieldWarning>
  );
}

FormFieldWarning.propTypes = {
  warning: PropTypes.string,
};

export default FormFieldWarning;
