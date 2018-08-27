import { css } from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import { siteTheme } from '../../../../utils/variables';
// import breakpoint from 'styled-components-breakpoint';

const datePickerStyles = css`
  /** Your Styles go here **/
  background: ${siteTheme.colors.paleGrey};
  border: 1px solid ${siteTheme.colors.cloudyBlue};
  border-radius: ${calculateRem(5.3)};
  height: ${calculateRem(53)};
  padding: 0;
  width: 100%;
  text-indent: ${calculateRem(14.7)};
  outline: none;
  color: ${siteTheme.colors.charcoalGrey};
  font-size: ${calculateRem(16)}

  &::before, &::after {
    content: '',
  }
`;

export default datePickerStyles;
