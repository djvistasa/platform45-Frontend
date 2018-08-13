import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import checkBoxStyles from './checkBoxStyles';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledCheckBox = styled(Checkbox)`
  ${checkBoxStyles};
  ${props => props.primary ? 'color: green !important;': 'color: orange !important;'}
`;

export default StyledCheckBox;
