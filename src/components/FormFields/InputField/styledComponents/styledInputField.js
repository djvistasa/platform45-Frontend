import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import { calculateRem } from '../../../../utils/calculateRem';
import inputFieldStyles from './inputFieldStyles';
import { siteTheme } from '../../../../utils/variables';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledInputField = styled(Input)`
  ${inputFieldStyles};
  border: ${props => props.valid ? `1px solid ${siteTheme.colors.cloudyBlue}` : `1px solid ${siteTheme.colors.tangerine}`};

  input {
    color: ${props => props.valid ? siteTheme.colors.charcoalGrey : siteTheme.colors.tangerine};
  }
    width: ${props =>
    props.width
      ? `${calculateRem(props.width)}rem;`
      : '100%'};
`;

export default StyledInputField;
