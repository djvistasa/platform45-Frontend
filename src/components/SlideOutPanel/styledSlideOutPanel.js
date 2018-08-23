import styled from 'styled-components';
import slideOutPanelStyles from './slideOutPanelStyles';
import { calculateRem } from '../../utils/calculateRem';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledSlideOutPanel = styled.div`
  ${ slideOutPanelStyles };
  top: ${props => props.isPanelOpen ? calculateRem(props.mainPanelHeight) : 0}

`;

export default StyledSlideOutPanel;