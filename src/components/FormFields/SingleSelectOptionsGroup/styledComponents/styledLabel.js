import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';
import { siteTheme } from '../../../../utils/variables';
import { calculateRem } from '../../../../utils/calculateRem';

export const StyledFormLabel = styled(FormLabel)`
  color: ${siteTheme.colors.charcoalGrey} !important;
  margin-bottom: ${calculateRem(10.3)};

    &:focused {
      color: ${siteTheme.colors.charcoalGrey} !important;
    }
`;

export default StyledFormLabel;