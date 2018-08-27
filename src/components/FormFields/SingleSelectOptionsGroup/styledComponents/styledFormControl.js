import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../../../../utils/calculateRem';

export const StyledFormControl = styled(FormControl)`
  ${breakpoint('tabletPlus')`
      display: block !important;
      width: 100%;
      height: 53px;
      margin-bottom: ${calculateRem(21.9)};

          > label {
          float: left;
          margin-top: ${calculateRem(15)};
          margin-right: ${calculateRem(65)};
        }

        div {
          float: right;
          width: ${calculateRem(390.9)};
        }
  `}
`;

export default StyledFormControl;