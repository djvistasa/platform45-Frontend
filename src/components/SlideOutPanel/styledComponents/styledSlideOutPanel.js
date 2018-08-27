import styled, { keyframes } from 'styled-components';
import slideOutPanelStyles from './slideOutPanelStyles';
import { calculateRem } from '../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  };
`;
// NOTE: change yourElementType to your preferred type: e.g button
const StyledSlideOutPanel = styled.div`
  ${ slideOutPanelStyles };
  transition: 0,25s top ease;
  top: ${props => props.isPanelOpen ? calculateRem(props.mainPanelHeight) : 0}
  height: ${props => props.isPanelOpen ? calculateRem(props.formHeight) : 0};

  ${breakpoint('tabletPlus')`
    top: 0;
    left: ${props => props.isPanelOpen ? '41%' : '-59%'};
    transition: 0.25s left ease-in-out;
    height: ${props => calculateRem(props.mainPanelHeight)};
    border-bottom-right-radius: ${calculateRem(42.5)};
    border-top-right-radius: ${calculateRem(42.5)};
      div {
        opacity: 0;
        animation: ${props => props.isPanelOpen ? `0.25s ${fadeIn} 0.3s ease forwards` : 'none'};
      }
  `}

`;

export default StyledSlideOutPanel;