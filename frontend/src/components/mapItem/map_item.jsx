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
      latLong: false,
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchLocations()
      .then(res => { 
        if(res.payload.data) this.setState({ locations: Object.values(res.payload.data)});
      });
  }

  toggleClick() {
    this.setState({ clicked: this.state.clicked ? false : true });
    console.log(this.state.clicked);
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
      latLong: false
    };
  }

  onMapClicked = (props, map, e) => {
    if (this.state.clicked) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
    this.setState({ latLong: { lat: e.latLng.lat(), lng: e.latLng.lng() } })
  };

  onMarkerClick(){
    this.setState({ showingInfoWindow: true });
  }

  render() {
    if (this.state.locations.length === 0) return null;

    return <div className="map-item">
        <Map google={this.props.google} zoom={14} className="actual-map" id="map" onClick={this.onMapClicked}>
          {this.state.locations.map(location => {
            return <Marker name={location.name} position={{ lat: location.latitude, lng: location.longitude }} key={location._id} />;
          })}
        </Map>
        <i onClick={this.toggleClick} className={`fas fa-map-marker-alt ${this.state.clicked ? "clicked" : "unclicked"}`} />
      </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleAPI
})(MapItem)
