import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../config/keys';

export class MapItemContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    selectedPlace: {},
    showingInfoWindow: {},
    activeMarker: {},
    clicked: false,
    };

    this.onMapClicked = this.onMapClicked.bind(this);
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
    return (
      <Map google={this.props.google} zoom={14}>

        {/* <Marker onClick={this.onMarkerClick}
          name={'Current location'} /> */}

        <Map onClick={this.onMapClicked} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: keys.googleAPI
})(MapItemContainer)