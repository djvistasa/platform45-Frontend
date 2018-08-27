import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import { calculateRem } from '../../../../utils/calculateRem';
import selectControlStyles from './selectControlStyles';


// NOTE: change yourElementType to your preferred type: e.g button
const StyledSelectControl = styled(Select)`
  ${selectControlStyles};
  width: ${props =>
    props.width
      ? `${calculateRem(props.width)}rem;`
      : '100%'};
  &::after {
    background-color: ${props => props.valid ? 'green' : 'initial'} !important;
  }
`;
export default StyledSelectControl;
