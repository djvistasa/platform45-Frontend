import { css } from 'styled-components';
import { siteTheme } from '../../utils/variables';
import { calculateRem } from '../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';

const slideOutPanelStyles = css`
  background: ${siteTheme.colors.tangerine};
  position: absolute;
  padding: ${calculateRem(59)} ${calculateRem(20)};

  div {

    h1 {
      font-size: ${calculateRem(36)};
      font-weight: bold;
      margin-bottom: ${calculateRem(21)};

         ${breakpoint('tabletPlus')`
          margin-bottom: ${calculateRem(44)};
        `}
    }

    p {
      font-size: ${calculateRem(18)};
      line-height: 1.53;
    }

      ${breakpoint('tabletPlus')`
      max-width: ${calculateRem(423)};
      margin: auto;
      padding-top: ${calculateRem(164)};
    `}
  }

    ${breakpoint('tabletPlus')`
      width: 59%;
      padding: 0;
    `}


`;

export default slideOutPanelStyles;
