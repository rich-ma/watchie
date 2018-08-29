import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';

class History extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) { }

    componentDidMount() {

    }

    render() {
        return (
            <div className="map">
                <h1>This is the map</h1>
                <br />
                <div className="map-item">
                    <Link className="Link" to="/location">
                        <Button variant="outlined" color="secondary" >
                            MAP
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(History);