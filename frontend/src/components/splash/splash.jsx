import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const splash = () => {
    return (
        <div className="splash">
            <div className="splash-background">
            </div>
            {/* <img className="splash-background" src={'./images/personnature.jpg'} /> */}
            <br />
            <img className="logo-img" src={'./images/clockpng.png'} />
            <br />
            <h1>Watchie</h1>
            <br />
            <Link className="Link" to="/signup">
                <Button className="splash-button" variant="outlined"  >
                    Sign Up
              </Button>
            </Link>
            <br />
            <Link className="Link" to="/login">
                <Button className="splash-button" variant="outlined"  >
                    Log In
                </Button>
            </Link>
            <br />
            <Button className="splash-button" variant="outlined" >
                Demo User
            </Button>
        </div>
    );
};

export default splash;