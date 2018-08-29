import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import MapItemContainer from '../mapItem/map_item_container';

class Map extends React.Component {
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
                <div className="map-button">
                    <Link className="Link" to="/location">
                        <Button variant="outlined" color="secondary" >
                            MAP
                        </Button>
                    </Link>
                </div>
                <div className="map-item">
                <MapItemContainer />
                </div>
            </div>
        );
    }
}

export default withRouter(Map);