import { css } from 'styled-components';
import { calculateRem } from '../../../utils/calculateRem';
// import breakpoint from 'styled-components-breakpoint';

const avatarStyles = css`
  margin: 0 auto ${calculateRem(93)};
  padding-top: ${calculateRem(115)};
  width: ${calculateRem(238)}
`;

export default avatarStyles;
