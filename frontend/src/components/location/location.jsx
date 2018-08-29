import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) { }

    componentDidMount() {

    }

    render() {
        return (
            <div className="location">
                <h1>This is the location page</h1>
                
            </div>
        );
    }
}

export default withRouter(Location);