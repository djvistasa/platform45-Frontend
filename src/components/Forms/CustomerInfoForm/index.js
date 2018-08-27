/**
 *
 * CustomerInfoForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '../../../components/Button';
import InputField from '../../../components/FormFields/InputField';
import DatePicker from '../../../components/FormFields/DatePicker';
import SingleSelectOptionsGroup from '../../../components/FormFields/SingleSelectOptionsGroup';
import MaleIcon from '../../../assets/icons/male.svg';
import MaleIconChecked from '../../../assets/icons/male-checked.svg';
import FemaleIcon from '../../../assets/icons/female.svg';
import FemaleIconChecked from '../../../assets/icons/female-checked.svg';
import CardIcon from '../../../assets/icons/card.svg';
import CardIconChecked from '../../../assets/icons/card-checked.svg';
import StyledCustomerInfoForm from './styledComponents/styledCustomerInfoForm';
import StyledButtonWrapper from './styledComponents/styledButtonWrapper';
import { emailValidation } from '../validation';


function CustomerInfoForm(props) {
  const { handleSubmit, submitting, invalid } = props;
  const genderOptions = [
    {
      id: 0,
      title: 'Male',
      icon: MaleIcon,
      checkedIcon: MaleIconChecked,
    },
    {
      id: 1,
      title: 'Female',
      icon: FemaleIcon,
      checkedIcon: FemaleIconChecked,
    },
  ];

  const membershipOptions = [
    {
      id: 0,
      title: 'Classic',
      icon: CardIcon,
      checkedIcon: CardIconChecked,
    },
    {
      id: 1,
      title: 'Silver',
      icon: CardIcon,
      checkedIcon: CardIconChecked,
    },
    {
      id: 2,
      title: 'Gold',
      icon: CardIcon,
      checkedIcon: CardIconChecked,
    },
  ];

  const clearForm = () => props.reset();

  return (
    <StyledCustomerInfoForm onSubmit={handleSubmit} >
      <Field
        name={'name'}
        component={InputField}
        placeholder={'Name'}
        label={'Name'}
        type={'text'}
      />
      <Field
        name={'gender'}
        component={SingleSelectOptionsGroup}
        options={genderOptions}
        label={'Gender'}
        type={'text'}
      />

      <Field
        name={'date'}
        component={DatePicker}
        placeholder={'01/02/1983'}
        label={'Date of birth'}
        type={'date'}
      />

      <Field
        name={'email'}
        component={InputField}
        placeholder={'Email'}
        label={'Email'}
        type={'text'}
        validate={[emailValidation]}
      />

      <Field
        name={'mobile'}
        component={InputField}
        placeholder={'Mobile'}
        label={'Mobile'}
        type={'text'}
      />

      <Field
        name={'customerId'}
        component={InputField}
        placeholder={'Customer ID'}
        label={'Customer ID'}
        type={'text'}
      />
      <Field
        name={'membership'}
        component={SingleSelectOptionsGroup}
        options={membershipOptions}
        label={'Membership'}
      />

      <StyledButtonWrapper>
        <Button title={'Cancel'} type={'button'} onClick={() => clearForm()}/>
        <Button title={'Save'} type={'submit'} primary disabled={submitting || invalid}/>
      </StyledButtonWrapper>

    </StyledCustomerInfoForm>
  );
}

CustomerInfoForm.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
};

export default reduxForm({
  form: 'customerInfoForm',
})(CustomerInfoForm);
