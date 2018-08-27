import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import datePickerStyles from './datePickerStyles';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledDatePicker = styled(DatePicker)`
  ${ datePickerStyles };
`;

export default StyledDatePicker;