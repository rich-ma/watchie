import React from "react";
import Button from '@material-ui/core/Button';

const splash = () => {
    return (
        <div className="splash">
            <img className="logo-img" src={'./images/clockpng.png'} />
            <br/>
            <h1>Watchie</h1>
            <br/>
            <Button variant="outlined" color="secondary" >
                Sign Up
            </Button>
            <br/>
            <Button variant="outlined" color="secondary" >
                Log In
            </Button>
            <br/>
            <Button variant="outlined" color="secondary" >
                Demo User
            </Button>
        </div>
    );
};

export default splash;