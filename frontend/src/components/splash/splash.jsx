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
            <h1>Watchie</h1>
            <br />
            <Link className="Link" to="/signup">
                <Button variant="outlined" color="secondary" >
                    Sign Up
              </Button>
            </Link>
            <br />
            <Link className="Link" to="/login">
                <Button variant="outlined" color="secondary" >
                    Log In
                </Button>
            </Link>
            <br />
            <Button variant="outlined" color="secondary" >
                Demo User
            </Button>
        </div>
    );
};

export default splash;