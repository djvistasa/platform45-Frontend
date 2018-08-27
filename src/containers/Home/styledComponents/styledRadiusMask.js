import styled from 'styled-components';
import { calculateRem } from '../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';

export const StyledRadiusMask = styled.div`
  ${breakpoint('tabletPlus')`
    width: 41%;
    height: ${props => calculateRem(props.mainPanelHeight)};
    background: white;
    position: absolute;
    top: 0;
    z-index: 2;
  `}
`;

export default StyledRadiusMask;