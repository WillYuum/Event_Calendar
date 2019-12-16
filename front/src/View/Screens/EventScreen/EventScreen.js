import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";

//-------------------IMPORTED COMPONENTS--------------------
import LatestEventCard from "../../Components/LargeEventCardView/LargeEventCardView.js";
import MapSmallCardEvent from "../../MapComponents/MapSmallCardEvents.js";

//-------------------IMPORTED COMPONENTS--------------------

//importing stylesheet file
import { EventScreenStyle } from "./EventScreenStyle.js";

/**
 *
 *
 * @class EventScreen
 * @extends {React.Component}
 */
class EventScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
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
    } = EventScreenStyle;

    //if not loading to return the Latest event component(LatestEventCard.js)
    // let latestEvent;
    // if (EventsData.length > 0) {
    //   latestEvent = <LatestEvent Title={"POPCORN"} />;
    // } else {
    //   latestEvent = <Text>Loading...</Text>;
    // }
    return (
      <ScrollView style={PageContainer}>
        <View style={BackgroundIntro}>
          <Text style={WelcomeText}>Welcome back,{"\n"} William</Text>
        </View>
        {/* <TouchableNativeFeedback style={latestEventPos}>
          {latestEvent}
        </TouchableNativeFeedback> */}

        {/* <MapSmallCardEvent EventsData={EventsData} /> */}
      </ScrollView>
    );
  }
}

export default EventScreen;
