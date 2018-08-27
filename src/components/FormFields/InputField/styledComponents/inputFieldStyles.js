import { css } from 'styled-components';
import { siteTheme } from '../../../../utils/variables';
import { calculateRem } from '../../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';

const inputFieldStyles = css`
  transition: 0.25s border-color ease;
  background: ${siteTheme.colors.paleGrey};
  border-radius: ${calculateRem(5.3)};
  min-height: ${calculateRem(53)};
  margin-bottom: ${calculateRem(19)};
  position: relative;

    input {
      padding: 0;
      text-indent: ${calculateRem(14.7)};

    }

  &::before, &::after {
    border-bottom: none !important;
  }

  ${breakpoint('tabletPlus')`
    width: ${calculateRem(380.9)};
  `}
`;

export default inputFieldStyles;
