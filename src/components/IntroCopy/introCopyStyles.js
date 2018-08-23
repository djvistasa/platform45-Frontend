import { css } from 'styled-components';
import { calculateRem } from '../../utils/calculateRem';
import { siteTheme } from '../../utils/variables';
// import breakpoint from 'styled-components-breakpoint';

const introCopyStyles = css`
  padding: 0 ${calculateRem(27)};
  text-align: center;
  color: ${siteTheme.colors.black};
  margin-bottom: ${calculateRem(42.1)};
    h1 {
      font-size: ${calculateRem(36)};
      max-width: ${calculateRem(179)};
      margin:0 auto ${calculateRem(24)};
      font-weight: bold;
    }

    p {
      font-size: ${calculateRem(22)};
      line-height: 1.26;
    }
`;

export default introCopyStyles;
