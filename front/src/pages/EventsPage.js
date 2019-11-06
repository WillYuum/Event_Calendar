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
      latestEventPos
    } = EventPageStyle;

    //State Data from App.js
    const { EventsData } = this.props;
    
    let latestEvent;
    if(EventsData.length > 0){
      latestEvent =  <LatestEvent Title={"POPCORN"}  />
    }else{
      latestEvent = <Text>Loading...</Text>
    }
    return (
      <ScrollView style={PageContainer}>
        <View style={BackgroundIntro}>
          <Text style={WelcomeText}>Welcome back,{"\n"} William</Text>
        </View>
        <TouchableHighlight style={latestEventPos}>
          {latestEvent}
        </TouchableHighlight>

        <MapEvents EventsData={EventsData} />
      </ScrollView>
    );
  }
}

const EventPageStyle = StyleSheet.create({
  PageContainer: {
    flex: 1,
  },

  BackgroundIntro: {
    backgroundColor: "orange",
    width: "100%",
    height: "30%"
  },

  WelcomeText: {
    fontSize: 40,
    color: "white",
    marginTop: 35,
    textAlign: "center"
  },

  latestEventPos: {
    position: "absolute",
    top: "15%",
    width: "95%",
    height: 275,
    alignSelf: "center"
  }
});

export default EventsPage;
