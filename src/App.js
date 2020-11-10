import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const CALPOLYLATLNG = {lat: 37, lng: -115.65};
const ZOOM = 14;

/*const mapStyles = {
  center: CALPOLYLATLNG,
  zoom: ZOOM,
  mapTypeControl: false
};
*/
const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={CALPOLYLATLNG}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1fm5j1RQqJkszE5Z0KSyACHdX8vsC-mo'
})(MapContainer);

