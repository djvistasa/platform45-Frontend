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
  z-index:2;

    ${breakpoint('tabletPlus')`
      width: ${calculateRem(392)};
    `}

`;

export default StyledWrapper;
