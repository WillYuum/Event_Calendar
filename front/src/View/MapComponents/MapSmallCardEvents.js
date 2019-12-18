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
    const { container } = SmallEventCard;
    return (
      <View style={container}>
        {EventsData.slice(1).map((event, index) => {
          return (
            <SmallEventCard
              key={index}
              Title={event.EventName}
              Host={event.HostName}
              EventStartDate={event.EventStartDate}
            />
          );
        })}
      </View>
    );
  }
}

export default MapEvents;
