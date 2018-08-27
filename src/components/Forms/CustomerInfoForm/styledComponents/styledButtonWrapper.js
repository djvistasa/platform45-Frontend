import styled from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint'

export const StyledButtonWrapper = styled.div`
  ${breakpoint('tabletPlus')`
    width: ${calculateRem(338.7)};
    margin-top: ${calculateRem(83)};
    float: right;
    button {
      width: ${calculateRem(158.7)};
      float: left;
      margin-left: ${calculateRem(21.3)};

      &:first-child {
        margin-left: 0;
      }
    }
  `}
`;

export default StyledButtonWrapper;