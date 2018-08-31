import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) { }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="dashboard">
                <h1>This is the dashboard</h1>
                <br />
                <div className="dashboard-fromto">
                    <Button variant="outlined" color="primary" >
                        From
                    </Button>
                    <Link className="Link" to="/map">
                        <Button variant="outlined" color="secondary" >
                            MAP
                        </Button>
                    </Link>
                    <Button variant="outlined" color="primary" >
                        To
                     </Button>
                </div>
                <div className="dashboard-date">
                    <Button variant="outlined" color="primary" >
                        Day
                    </Button>
                    <Button variant="outlined" color="primary" >
                        Month
                    </Button>
                    <Button variant="outlined" color="primary" >
                        Year
                    </Button>
                </div>
                <img src="https://images-cdn.9gag.com/photo/1122177_700b.jpg" alt="" />
            </div>
        );
    }
}

export default withRouter(Dashboard);