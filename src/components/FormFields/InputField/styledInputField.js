import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { calculateRem } from '../../../utils/calculateRem';
import inputFieldStyles from './inputFieldStyles';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledInputField = styled(TextField)`
  ${inputFieldStyles};
  > label {
      color: ${props => props.valid ? 'green' : 'initial'} !important;
    }
    width: ${props =>
    props.width
      ? `${calculateRem(props.width)}rem;`
      : '100%'};
`;

export default StyledInputField;
