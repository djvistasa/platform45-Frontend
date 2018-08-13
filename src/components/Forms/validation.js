export const required = (value) => (
  value || value === 0 ? null : 'This field is required'
);

export const passwordValidation = (value) => (
  value && value.length < 8 ? 'Must be 8 characters or more' : null
);

export const passwordConfirmation = (passwordFieldName) => (value, values) => (
  value !== values.get(passwordFieldName) ? 'Passwords don\'t match' : null
);

export const emailValidation = (value) => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email not valid' : null
);

export const maxValue = (max) => (value) => (
  (value || parseFloat(value) === 0) && value > max ? `Must be less than ${max + 1}` : null
);

export const minValue = (min) => (value) => (
  (value || parseFloat(value) === 0) && value < min ? `Must be at least ${min}` : null
);

export const maxLength = (max) => (value) => (
  value && value.length > max ? `Must be ${max} characters or less` : null
);

export const minLength = (min) => (value) => (
  value && value.length < min ? `Need ${min} characters or more` : null
);

export const maxSelections = (max) => (value) => (
  value && value.length > max ? `Must not exceed ${max} options` : null
);

export const minSelections = (min) => (value) => (
  value && value.length < min ? `Must select ${min} options or more` : null
);

export const number = (value) => (
  value && isNaN(Number(value)) ? 'Must be a number' : null // eslint-disable-line
);

export const isEmpty = (value) => value === undefined || value === null || value === '';


export const validSouthAfricanID = (value) => {
  const idError = 'The ID number you\'ve entered seems to be incorrect';
  if (!isEmpty(value)) {
    const id = value.replace(/[^\d]/g, '');
    if (id.length !== 13) {
      return idError;
    }
    const sixToTen = id.substr(6, 4);
    if (sixToTen === '0000') {
      return idError;
    }
    const zeroToSix = id.substr(0, 7);
    if (zeroToSix === '0000000' || zeroToSix === '6666666') {
      return idError;
    }
    const a = id.split('');
    let x = 0;
    let y = 0;
    let s = '';
    const control = a.pop();

    while (a.length > 0) {
      x += parseInt(a.shift(), 10);
      if (a.length > 0) s = s.concat(a.shift());
    }

    const aa = (String(parseInt(s, 10) << 1)).split(''); // eslint-disable-line

    while (aa.length > 0) y += parseInt(aa.pop(), 10);

    if ((String((10 - ((x + y) % 10)) % 10)) !== control) {
      return idError;
    }
  }
  return null;
};

export const phoneNumber = (value) => {
  if (!isEmpty(value)) {
    const phoneno = '^(([0-9](\\d{9})|\\+(\\d{11})))$';
    if (!(value.match(phoneno))) {
      return 'Invalid phone number';
    }
  }
  return null;
};

export const match = (field) => { // eslint-disable-line
  return (value, data) => {
    if (data) {
      if (value !== data.get(field)) {
        return `Does not match ${field} field`;
      }
    }
    return null;
  };
};

export const isPhoneOrEmail = (value) => {
  if (!isEmpty(value)) {
    if (!/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/.test(value)) {
      return 'invalid phone number or email entered';
    }
  }
  return null;
};
