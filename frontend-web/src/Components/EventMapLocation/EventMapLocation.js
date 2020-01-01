import React from "react";
import LCG from "leaflet-control-geocoder";
//--------------Leaflet Components------------------
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
//--------------Leaflet Components------------------

import "./EventMapLocation.scss";

class EventMapLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 33.892314,
      lng: 35.504858,
      zoom: 15
    };
  }

  //Adding the MapBox token to a variable from .env
  MapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="EventMapLocation">
        <Map
          center={position}
          zoom={this.state.zoom}
          scrollWheelZoom={false}
          ref={m => {
            console.log(m)
          }}
        >
          >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=${this.MapBoxToken}`}
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default EventMapLocation;
