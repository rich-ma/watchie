import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(demoUser)
      .then(() => this.props.fetchLocations())
      .then(() => this.props.fetchCategories())
      .then(() => this.props.fetchTimes());
  }

  render() {
    return (
      <div className="splash">
        <div className="splash-background" />
        {/* <img className="splash-background" src={'./images/personnature.jpg'} /> */}
        <br />
        <img className="logo-img" src={"./images/clockpng.png"} />
        <br />
        <h1>Watchie</h1>
        <br />
        <Link className="Link" to="/signup">
          <Button className="splash-button" variant="outlined">
            Sign Up
          </Button>
        </Link>
        <br />
        <Link className="Link" to="/login">
          <Button className="splash-button" variant="outlined">
            Log In
          </Button>
        </Link>
        <br />
        <Button
          className="splash-button"
          variant="outlined"
          onClick={this.handleSubmit}
        >
          Demo User
        </Button>
      </div>
    );
  }
}

const demoUser = {
  email: "demo@watchie.com",
  password: "insecurepassword"
};

export default splash;
