import styled from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import { siteTheme } from '../../../../utils/variables';
import breakpoint from 'styled-components-breakpoint';
export const StyledLabel = styled.label`
position: relative;
  i {
    background : ${siteTheme.colors.tangerine};
    width: ${calculateRem(8)};
    height: ${calculateRem(8)};
    display: inline-block;
    border-radius: 100%;
    position: relative;
    bottom: ${calculateRem(5)};
    margin-right: ${calculateRem(3)};
      ${breakpoint('tabletPlus')`
        position: absolute;
        top: 0;
        bottom: 12px;
        margin: auto;
        left: -10px;
      `}
  }
  span {
    transition: 0.25s color ease;
    margin-bottom: ${calculateRem(8.3)};
    font-size: ${calculateRem(16)};
    display: inline-block;
    color: ${props => props.valid ? siteTheme.colors.charcoalGrey : siteTheme.colors.tangerine};
  }

  ${breakpoint('tabletPlus')`
      display: flex;
      align-items: center;
      justify-content: space-between;
  `}

`;

export default StyledLabel;