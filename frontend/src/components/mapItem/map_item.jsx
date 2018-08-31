import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../config/keys';

export class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      showingInfoWindow: {},
      activeMarker: {},
      clicked: false,
    };

    this.onMapClicked = this.onMapClicked.bind(this);
    // this.createMarkers = this.createMarkers.bind(this);
  }

  componentDidMount(){
    this.props.fetchLocations()
      .then(res => { 
        if(res.payload.data) this.setState({ locations: Object.values(res.payload.data)});
      });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.locations.length === state.locations.length) {
      return state;
    }
    return {
      locations: props.locations,
      showingInfoWindow: {},
      activeMarker: {},
      clicked: false,
    };
  }

  onMapClicked = (props, map, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
    /*get latitude and longitude from clicked point on maps */
    this.setState({ clicked: { lat: e.latLng.lat(), lng: e.latLng.lng() } })
    this.setState({
      clickedMarker: <Marker onClick={this.onMarkerClick}
        name={'Clicked point'}
        position={{ lat: e.latLng.lat(), lng: e.latLng.lng() }}
        icon={{ path: this.props.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW, scale: 5 }} />
    });
    console.log(this.state.clicked);
    console.log(props);
    console.log(map);
  };

  render() {
    if (this.state.locations.length === 0) return null;

    return <div>
        <Map google={this.props.google} zoom={14} className="actual-map" id="map" onClick={this.onMapClicked}>

          {this.state.locations.map(location => {
            return <Marker name={location.name} position={{ lat: location.latitude, lng: location.longitude }} key={location._id} />;
          })}

        </Map>
      </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleAPI
})(MapItem)
