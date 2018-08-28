import React from "react";
import Button from '@material-ui/core/Button';

const splash = () => {
    return (
        <div className="splash">
            <img className="logo-img" src={'./images/clockpng.png'} />
            <h1>Watchie</h1>
            <Button variant="outlined" color="secondary" >
                Sign Up
            </Button>
            <Button variant="outlined" color="secondary" >
                Log In
            </Button>
        </div>
    );
};

export default splash;