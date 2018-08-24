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
import SingleSelectOptionsGroup from '../../../components/FormFields/SingleSelectOptionsGroup';
import StyledCustomerInfoForm from './styledCustomerInfoForm'


function CustomerInfoForm(props) {
  const { handleSubmit, submitting } = props;
  const genderOptions = [
    {
      id: 0,
      title: 'Male',
    },
    {
      id: 1,
      title: 'Female',
    },
  ];

  const membershipOptions = [
    {
      id: 0,
      title: 'Classic',
    },
    {
      id: 1,
      title: 'Silver',
    },
    {
      id: 2,
      title: 'Gold',
    },
  ];
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
        component={InputField}
        placeholder={'Name'}
        label={'Date of birth'}
        type={'date'}
      />

      <Field
        name={'email'}
        component={InputField}
        placeholder={'Email'}
        label={'Email'}
        type={'email'}
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
      <Button title={'Cancel'} type={'button'} secondary disabled={submitting}/>
      <Button title={'Save'} type={'submit'} primary disabled={submitting}/>
    </StyledCustomerInfoForm>
  );
}

CustomerInfoForm.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'customerInfoForm',
})(CustomerInfoForm);
