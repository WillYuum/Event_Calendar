import React from "react";
import { View } from "react-native";

//importing stylesheet file
import SmallEventCard from "../Components/SmallEventCardView/SamllEventCardView.js";

/**
 *
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
    return (
      <View style={container}>
        {EventsData.map((event, index) => {
          return (
            <SmallEventCard
              key={index}
              Title={event.EventName}
              Host={event.HostName}
            />
          );
        })}
      </View>
    );
  }
}

export default MapEvents;
