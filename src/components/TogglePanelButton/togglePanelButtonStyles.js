import { css } from 'styled-components';
import { calculateRem } from '../../utils/calculateRem';
import { siteTheme } from '../../utils/variables';
import breakpoint from 'styled-components-breakpoint';

const togglePanelButtonStyles = css`
  width: ${calculateRem(63.8)};
  height: ${calculateRem(63.8)};
  border-radius: 100%;
  background: ${siteTheme.colors.black};
  margin: auto;
  display: block;
  transition: 0.25s transform ease;

    i {
      border: solid ${siteTheme.colors.sunflowerYellow};
      border-width: 0 ${calculateRem(3)} ${calculateRem(3)} 0;
      display: inline-block;
      border-radius: ${calculateRem(2)};;
      padding: ${calculateRem(8)};;
      transform: rotate(45deg);
     -webkit-transform: rotate(45deg);
    }

    ${breakpoint('tabletPlus')`
      transform: rotate(-90deg);
    `}
`;

export default togglePanelButtonStyles;
