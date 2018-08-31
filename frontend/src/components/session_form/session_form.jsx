import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
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

    let fname, password2;

    if (formType === 'signup') {
      fname = errors.join("").includes("First name") ? (
        <TextField
          error
          label="First Name"
          value={this.state.fname}
          onChange={this.handleInput('fname')}
          margin="normal"
          className={this.props.classes.input}
        />
      ) : (
        <TextField
          required
          label="First Name"
          value={this.state.fname}
          onChange={this.handleInput('fname')}
          margin="normal"
          className={this.props.classes.input}
        />
      );
      password2 = errors.join("").includes("Confirm Password") ? (
        <TextField
          error
          label="Confirm Password"
          type="password"
          onChange={this.handleInput('password2')}
          margin="normal"
          className={this.props.classes.input}
        />
      ) : (
        <TextField
          required
          label="Confirm Password"
          type="password"
          onChange={this.handleInput('password2')}
          margin="normal"
          className={this.props.classes.input}
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
        className={this.props.classes.input}
      />
    ) : (
      <TextField
        required
        label="Email"
        value={this.state.email}
        onChange={this.handleInput('email')}
        margin="normal"
        className={this.props.classes.input}
      />
    );

    const password = errors.join("").includes("Password") ? (
      <TextField
        error
        label="Password"
        type="password"
        onChange={this.handleInput('password')}
        margin="normal"
        className={this.props.classes.input}
      />
    ) : (
      <TextField
        required
        label="Password"
        type="password"
        onChange={this.handleInput('password')}
        margin="normal"
        className={this.props.classes.input}
      />
    );

    const button = (
      <Button
        variant="outlined"
        type="submit"
        onClick={this.handleSubmit}
        className={this.props.classes.button}
        >
        {formType}
      </Button>
    );

    return (
      <div className="session-form-container">
        <form className="session-form">
          <div>
            {fname}
            {email}
          </div>
          <div>
            {password}
            {password2}
          </div>
          {button}
        </form>
        {navLink}
      </div>
    );
  }
}

const styles = {
  input: {
    "margin": "20px 10px"
  },
  button: {
    "margin": "20px 0 30px 0"
  }
}

export default withStyles(styles)(SessionForm);