import styled from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import { siteTheme } from '../../../../utils/variables';
export const StyledLabel = styled.label`
   > span {
    background: ${props => props.checked ? siteTheme.colors.cloudyBlue : siteTheme.colors.paleGrey};
    width:${calculateRem(53)};
    height:${calculateRem(53)};

    &:hover {
      background: ${props => props.checked ? siteTheme.colors.cloudyBlue : siteTheme.colors.paleGrey};
    }
      img {
        width:21px
      }
  }

  span:last-child {
    background: none;
  }
`;

export default StyledLabel;