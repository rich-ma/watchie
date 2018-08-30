import React from 'react';

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
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const { errors, formType, navLink } = this.props;

    let fname, lname, password2;

    if (formType === 'signup') {
      fname = (
        <TextField
          required
          label="First Name"
          value={this.state.fname}
          onChange={this.handleInput('fname')}
          margin="normal"
        />
      );
      lname = (
        <TextField
          required
          label="Last Name"
          value={this.state.lname}
          onChange={this.handleInput('lname')}
          margin="normal"
        />
      );
      password2 = errors.join("").includes("Confirm Password") ? (
        <TextField
          error
          label="Confirm Password"
          type="password"
          onChange={this.handleInput('password2')}
          margin="normal"
        />
      ) : (
        <TextField
          required
          label="Confirm Password"
          type="password"
          onChange={this.handleInput('password2')}
          margin="normal"
        />
      );
    }

    const email = errors.join("").includes("Email") ? (
      <TextField
        error
        label="Email"
        value={this.state.email}
        onChange={this.handleInput('email')}
        margin="normal"
      />
    ) : (
      <TextField
        required
        label="Email"
        value={this.state.email}
        onChange={this.handleInput('email')}
        margin="normal"
      />
    );

    const password = errors.join("").includes("Password") ? (
      <TextField
        error
        label="Password"
        type="password"
        onChange={this.handleInput('password')}
        margin="normal"
      />
    ) : (
      <TextField
        required
        label="Password"
        type="password"
        onChange={this.handleInput('password')}
        margin="normal"
      />
    );

    const button = (
      <Button
        variant="outlined"
        type="submit"
        onClick={this.handleSubmit}>
        {formType}
      </Button>
    );

    return (
      <div>
        <form>
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