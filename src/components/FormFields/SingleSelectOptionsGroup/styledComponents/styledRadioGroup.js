import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';
import { siteTheme } from '../../../../utils/variables';
import { calculateRem } from '../../../../utils/calculateRem';
import breakpoint from 'styled-components-breakpoint';


export const StyledRadioGroup = styled(RadioGroup)`
  flex-direction: row !important;
    > label {
      margin-left: 0;
      margin-bottom: ${calculateRem(15)};
      span:last-child {
        color: ${siteTheme.colors.cloudyBlue};
        font-size: ${calculateRem(14)};
        margin-left: ${calculateRem(12)};

          ${breakpoint('tabletPlus')`
            margin-left: 0;
          `}
      }
    }


`;

export default StyledRadioGroup;