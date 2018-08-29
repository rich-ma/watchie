import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../config/keys';

export class MapItemContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    selectedPlace: {},
    };
  }




  render() {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

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