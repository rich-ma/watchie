import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const splash = () => {
    return (
        <div className="splash">
            <br />
            <img className="logo-img" src={'./images/clockpng.png'} />
            <h1>Watchie</h1>
            <br />
            <Button variant="outlined" color="secondary" >
                Sign Up
            </Button>
            <br />
            <Link className="Link" to="/dashboard">
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