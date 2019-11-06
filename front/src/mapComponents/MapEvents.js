import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import SmallEventCard from "../components/SmallEventCard.js";

class MapEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { container } = MapEventsStyle;
    const { EventsData } = this.props;
    return (
      <View style={container}>
        {EventsData.map((event, index) => {
          return (
            <SmallEventCard
              key={index}
              Title={event.doc.Eventname}
              Host={event.doc.HostName.HostName}
            />
          );
        })}
      </View>
    );
  }
}

const MapEventsStyle = StyleSheet.create({
  container: {
    marginTop: 130,
    marginBottom: 130,
    width: "95%",
    height: "100%",
    alignSelf: "center"
  }
});

export default MapEvents;
