import styled from 'styled-components';
import togglePanelButtonStyles from './togglePanelButtonStyles';
import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledTogglePanelButton = styled.button`
  ${ togglePanelButtonStyles };
  ${breakpoint('tabletPlus')`
    transform: ${props => !props.isInitialLoad ? (props.isPanelOpen ? 'rotate(90deg)' : 'rotate(-90deg)') : ''}
  `}

`;

export default StyledTogglePanelButton;