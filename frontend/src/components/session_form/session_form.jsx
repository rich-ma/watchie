import React from 'react';
import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      password2: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/dashboard'));
  }

  render() {
    const { errors, formType, navLink } = this.props;

    let fname, lname, password2;

    if (formType === 'signup') {
      fname = (
        <TextField
          label="First Name"
          value={this.state.fname}
          onChange={this.handleInput('fname')}
          margin="normal"
        />
      );
      lname = (
        <TextField
          label="Last Name"
          value={this.state.lname}
          onChange={this.handleInput('lname')}
          margin="normal"
        />
      );
      password2 = (
        <TextField
          label="Confirm Password"
          type="password"
          onChange={this.handleInput('password2')}
          margin="normal"
        />
      );
    }

    const email = (
      <TextField
          label="Email"
          value={this.state.email}
          onChange={this.handleInput('email')}
          margin="normal"
        />
    );

    const password = (
      <TextField
        label="Password"
        type="password"
        onChange={this.handleInput('password')}
        margin="normal"
      />
    );

    const button = (
      <Button
        variant="outlined"
        onClick={this.handleSubmit}>
        {formType}
      </Button>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {fname}
          {lname}
          {email}
          {password}
          {password2}
          {button}
        </form>
        {navLink}
      </div>
    );
  }
}

export default SessionForm;