import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { siteTheme } from '../../../utils/variables';
import { calculateRem } from '../../../utils/calculateRem';


export const StyledWrapper =  styled.div`
  width: 100%;
  background-color: ${siteTheme.colors.sunflowerYellow};
  min-height:100vh;
  padding-bottom: ${calculateRem(116.3)};
  position: relative;
  z-index:3;

    .mask {
      width: 100%;
      height :100%;
      background: blue;
      position: absolute;
      top:0;
    }

    ${breakpoint('tabletPlus')`
      width: 41%;
      border-bottom-left-radius: ${calculateRem(42.5)}
      border-top-left-radius: ${calculateRem(42.5)}
    `}

`;

export default StyledWrapper;
