import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
    >
      <Marker
        position={{ lat: 40.7128, lng: -74.0060 }}
      />
    </GoogleMap>
  );
});

export default function Map() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapComponent
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}
