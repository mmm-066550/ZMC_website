"use client";

import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styles from "./.module.scss";

const mapStyles = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  width: "100%",
  height: "500px",
  zIndex: 2,
};

const GoogleMap = () => {
  return (
    <div className={styles.google__map__wrapper}>
      <Map
        containerStyle={containerStyle}
        google={window.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
          lat: 30.0872142,
          lng: 31.3668813,
        }}
      >
        <Marker
          position={{
            lat: 30.0872142,
            lng: 31.3668813,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDGv62aOnWBctq9DFAqfjWpXInnMAjnP6E",
})(GoogleMap);
