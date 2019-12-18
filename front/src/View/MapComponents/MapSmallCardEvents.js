import React from "react";
import { View } from "react-native";

import SmallEventCard from "../Components/SmallEventCardView/SamllEventCardView.js";

//importing stylesheet file
import { MapEventsStyle } from "./MapSmallCardEventsStyle.js";

/**
 *
 * @prop {String} Title - event title
 * @prop {String} Host - Host's name 
 * @prop {Date} EventStartDate - Date/Time of the beginning of the event
 * @prop {Base64} ImageSrc - the base 64 that will be added to source image
 *
 * @class MapEvents
 * @extends {React.Component}
 */
class MapEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { EventsData } = this.props;
    const { container } = MapEventsStyle;
    return (
      <View style={container}>
        {EventsData.slice(1).map((event, index) => {
          return (
            <SmallEventCard
              key={index}
              Title={event.EventName}
              Host={event.HostName}
              EventStartDate={event.EventStartDate}
              ImageSrc={event.EventMainImage}
            />
          );
        })}
      </View>
    );
  }
}

export default MapEvents;
