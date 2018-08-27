const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.lname = !isEmpty(data.lname) ? data.lname : '';
  data.fname = !isEmpty(data.fname) ? data.fname : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (!Validator.isLength(data.fname, {
      min: 2,
      max: 30
    })) {
    errors.fname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.fname)) {
    errors.fname = 'First name is required';
  }

  if (!Validator.isLength(data.lname, {
      min: 2,
      max: 30
    })) {
    errors.lname = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.lname)) {
    errors.lname = 'Last name is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, {
      min: 6,
      max: 30
    })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};