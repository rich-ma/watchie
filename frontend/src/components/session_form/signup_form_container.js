import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../../util/session_api_util';
import SessionForm from './session_form';
import {
  fetchLocations
} from '../../actions/location_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: Object.values(errors.session),
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    fetchLocations: () => dispatch(fetchLocations()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);