import styled from 'styled-components';
import { calculateRem } from '../../utils/calculateRem';
import buttonStyles from './buttonStyles';

// NOTE: change yourElementType to your preferred type: e.g button
export const StyledButton = styled.button`
  ${buttonStyles};
  width: ${props =>
    props.width
      ? `${calculateRem(props.width)}rem;`
      : '100%'};
`;

export default StyledButton;
