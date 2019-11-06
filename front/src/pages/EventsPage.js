import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from "react-native";

//-------------------IMPORTED COMPONENTS--------------------
import LatestEvent from "../components/EventCard.js";
import MapEvents from "../mapComponents/MapEvents.js";
//-------------------IMPORTED COMPONENTS--------------------

class EventsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //Styling variables
    const {
      BackgroundIntro,
      WelcomeText,
      PageContainer,
      latestEventPos,
      MapEventContainer
    } = EventPageStyle;

    //State Data from App.js
    const { EventsData } = this.props;
    return (
      <ScrollView style={PageContainer}>
        <View style={BackgroundIntro}>
          <Text style={WelcomeText}>Welcome back,{"\n"} William</Text>
        </View>
        <TouchableHighlight style={latestEventPos}>
          <LatestEvent />
        </TouchableHighlight>

        <MapEvents EventsData={EventsData} />
      </ScrollView>
    );
  }
}

const EventPageStyle = StyleSheet.create({
  PageContainer: {
    flex: 1,
    backgroundColor: "purple"
  },

  BackgroundIntro: {
    backgroundColor: "orange",
    width: "100%",
    height: "50%"
  },

  WelcomeText: {
    fontSize: 40,
    color: "white",
    marginTop: 75,
    textAlign: "center"
  },

  latestEventPos: {
    position: "absolute",
    top: "30%",
    width: "90%",
    height: 275,
    alignSelf: "center"
  },

  MapEventContainer: {
    height: "100%",
    backgroundColor: "red"
  }
});

export default EventsPage;
