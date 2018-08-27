import styled from 'styled-components';
import { calculateRem } from '../../../utils/calculateRem';
import buttonStyles from './buttonStyles';
import { siteTheme } from '../../../utils/variables';

// NOTE: change yourElementType to your preferred type: e.g button
export const StyledButton = styled.button`
  ${buttonStyles};
  height: ${calculateRem(53)};
  border-radius: ${calculateRem(5.3)};
  background: ${props => props.primary ? siteTheme.colors.tiffanyBlue : siteTheme.colors.paleGrey};
  color: ${props => props.primary ? '#fff' : siteTheme.colors.charcoalGrey};
  margin-bottom: ${calculateRem(9)};
  width: ${props =>
    props.width
      ? `${calculateRem(props.width)}rem;`
      : '100%'};
`;

export default StyledButton;
