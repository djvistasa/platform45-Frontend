import styled from 'styled-components';
import { calculateRem } from '../../../../utils/calculateRem';
import CalenderIcon from '../../../../assets/icons/dob.svg';
import breakpoint from 'styled-components-breakpoint';
export const StyledPickerWrapper = styled.div`
  margin-bottom: ${calculateRem(19)};
  margin-top: ${calculateRem(21.6)};
    label {
      margin-bottom: ${calculateRem(9)};
      display: inline-block;
    }

    > div > div:first-child  {
      width: 100%;
      div {
        width: 100%;
        position:relative;
        height: ${calculateRem(53)};
          :after {
            content: '';
            background: url(${CalenderIcon}) no-repeat center;
            position:absolute;
            width:50px;
            height: 50px;
            top: 0;
            right: 0
            bottom: 0;
            margin: auto;
          }
      }

      ${breakpoint('tabletPlus')`
        width: ${calculateRem(380.9)}
      `}
    }

    ${breakpoint('tabletPlus')`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
`;

export default StyledPickerWrapper;