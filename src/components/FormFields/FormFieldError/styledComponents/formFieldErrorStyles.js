import { css } from 'styled-components';
import { siteTheme } from '../../../../utils/variables';
import { calculateRem } from '../../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';

const formFieldErrorStyles = css`
  color: ${siteTheme.colors.tangerine};
  position: absolute !important;
  font-size: ${calculateRem(12)} !important;
  right: 0;
  font-size: 0.75rem;
  bottom: ${calculateRem(-43)};

  ${breakpoint('tabletPlus')`
    bottom: ${calculateRem(-5)};
  `}
  /** Your Styles go here **/
`;

export default formFieldErrorStyles;
