import { css } from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import { siteTheme } from '../../../../utils/variables';
import breakpoint from 'styled-components-breakpoint';

const customerInfoFormStyles = css`
  /** Your Styles go here **/
  margin: auto;
  padding: ${calculateRem(70)} ${calculateRem(20)} ${calculateRem(21)}
  color: ${siteTheme.colors.charcoalGrey};

    ${breakpoint('tabletPlus')`
      position: absolute;
      right: 0;
      width: 54%;
      top: 0;
    `}
    ${breakpoint('monitor')`
        padding: ${calculateRem(111)} ${calculateRem(143)} ${calculateRem(21)};
        width: 38%;
    `}
`;

export default customerInfoFormStyles;
