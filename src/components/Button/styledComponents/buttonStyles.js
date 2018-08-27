import { css } from 'styled-components';
import { calculateRem } from '../../../utils/calculateRem';
// import breakpoint from 'styled-components-breakpoint';

const buttonStyles = css`
  width: 100%;
  transition: 0.25s opacity ease;
  padding: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${calculateRem(16)};
  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
  }
`;

export default buttonStyles;
