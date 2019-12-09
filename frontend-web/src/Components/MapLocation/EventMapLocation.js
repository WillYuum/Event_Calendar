import React from "react";

//--------------Leaflet Components------------------
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//--------------Leaflet Components------------------

import "./EventMapLocation.scss";

class EventMapLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 33.892314,
      lng: 35.504858,
      zoom: 13
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="EventMapLocation">
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2lsbHl1bXMiLCJhIjoiY2szeWFrYTBtMDNxMjNrbjh3cXR6NmViZyJ9.THjxOxZctWlNVPcyQ6Y7Gg"
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
