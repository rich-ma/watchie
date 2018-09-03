import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import MapItemContainer from '../mapItem/map_item_container';

class Map extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(nextProps){

   }

  componentDidMount(){
  }



  render() {
    return (
    <div className="map">
        <MapItemContainer />
    </div>
    )
  }
}

export default withRouter(Map);