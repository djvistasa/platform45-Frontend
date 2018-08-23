import { css } from 'styled-components';
import { siteTheme } from '../../utils/variables';
import { calculateRem } from '../../utils/calculateRem';
// import breakpoint from 'styled-components-breakpoint';

const slideOutPanelStyles = css`
  background: ${siteTheme.colors.tangerine};
  position: absolute;
  padding: ${calculateRem(59)} ${calculateRem(20)};

    h1 {
      font-size: ${calculateRem(36)};
      font-weight: bold;
      margin-bottom: ${calculateRem(21)};
    }

    p {
      font-size: ${calculateRem(18)};
      line-height: 1.53;
    }
`;

export default slideOutPanelStyles;
