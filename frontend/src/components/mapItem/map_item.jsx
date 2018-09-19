import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../config/keys.js';

export class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      showingInfoWindow: {},
      activeMarker: {},
      clicked: false,
      latLong: false,
      showPopup: false,
      locationName: "",
      locationCategory: ""
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.toggleClick = this.toggleClick.bind(this);
    this.closeLocationPopup = this.closeLocationPopup.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchLocations()
      .then(res => { 
        if(res.payload.data) this.setState({ locations: Object.values(res.payload.data)});
      });
  }

  toggleClick() {
    this.setState({ clicked: this.state.clicked ? false : true });
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
        activeMarker: null,
        showPopup: true,
      });
    }
    this.setState({ latLong: { lat: e.latLng.lat(), lng: e.latLng.lng() } })
  };

  onMarkerClick(){
    this.setState({ showingInfoWindow: true });
  }

  closeLocationPopup(e) {
    if (e.target.classList.contains("location-popup-background")) {
      this.setState({ showPopup: false, clicked: !this.state.clicked });
    }
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createLocation({
      name: this.state.locationName,
      latitude: this.state.latLong.lat,
      longitude: this.state.latLong.lng
    })
      .then(location => {
        //create category
      });
    this.setState({ showPopup: false, clicked: !this.state.clicked });
  }

  render() {
    if (this.state.locations.length === 0) return null;

    const popup = this.state.showPopup ? (
      <div className="location-popup-background"
        onClick={this.closeLocationPopup}>
        <form className="location-popup" onSubmit={this.handleSubmit}>
          <label>Location Name:
            <input
              type="text"
              value={this.state.locationName}
              onChange={this.handleInput("locationName")} />
          </label>
          <label>Category:
            <input
              type="text"
              value={this.state.locationCategory}
              onChange={this.handleInput("locationCategory")} />
          </label>
          <button type="submit">Add Location</button>
        </form>
      </div>
    ) : (null);

    return <div className="map-item">
        {popup}
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
