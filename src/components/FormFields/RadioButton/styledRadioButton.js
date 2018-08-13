import styled from 'styled-components';
import RadioButton from '@material-ui/core/Radio';
import radioButtonStyles from './radioButtonStyles';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledRadioButton = styled(RadioButton)`
  ${radioButtonStyles};
  ${props => props.primary ? 'color: green !important' : 'color: blue !important'}
`;

export default StyledRadioButton;
