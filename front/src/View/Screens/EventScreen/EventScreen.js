import React from "react";

//-------------------IMPORTED COMPONENTS--------------------
import LatestEventCard from "../../Components/LargeEventCardView/LargeEventCardView.js";
import MapSmallCardEvent from "../../MapComponents/MapSmallCardEvents.js";
//-------------------IMPORTED COMPONENTS--------------------


//-------------------IMPORTED REACT NATIVE COMPONENTS---------------
import { Text, View, ScrollView, Button } from "react-native";
import { TouchableNativeFeedback, TouchableHighlight } from "react-native"
//-------------------IMPORTED REACT NATIVE COMPONENTS---------------


//importing stylesheet file
import { EventScreenStyle } from "./EventScreenStyle.js";
import { LatestEventStyle } from "../../Components/LargeEventCardView/LargeEventCardStyle.js";

/**
 * @prop {array} EventData - array that will contain all the information in the events
 *
 * @class EventScreen
 * @extends {React.Component}
 */
class EventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventsData: []
    };
  }

  async componentDidMount() {
    //using the fetch controller
    const { fetchLatestEvents } = this.props;

    //fetching latest events
    const EventsData = await fetchLatestEvents();
    this.setState({ EventsData });
  }

  render() {
    const { EventsData } = this.state;

    //Styling variables
    const {
      ScreenContainer,
      ScrollViewStyle,
      BackgroundIntro,
      WelcomeText,
      latestEventPos
    } = EventScreenStyle;

    // if not loading to return the Latest event component(LatestEventCard.js)
    let latestEvent;
    if (EventsData.length != 0) {
      latestEvent = (
        <LatestEventCard
          EventTitle={EventsData[0].EventName}
          HostName={EventsData[0].HostName}
          EventStartDate={EventsData[0].EventStartDate}
          ImageSrc={EventsData[0].EventMainImage}
        />
      );
    } else {
      latestEvent = <Text>Loading...</Text>;
    }

    const { ...props } = this.props
    console.log(props)
    return (
      <View style={ScreenContainer}>
        <View>
          <ScrollView style={ScrollViewStyle}>
            {/*------------------INTRO SECTION-----------------------*/}
            <View style={BackgroundIntro}>
              <Text style={WelcomeText}>Welcome back,{"\n"} William</Text>
            </View>
            {/*------------------INTRO SECTION-----------------------*/}

            {/*---------------LATEST EVENT CARD-----------------------*/}
            <TouchableNativeFeedback  onPress={() =>this.props.navigation.push("Event")} underlayColor='#f1c40f'  >
              <View  style={latestEventPos}>{latestEvent}</View>
            </TouchableNativeFeedback>
            {/*---------------LATEST EVENT CARD-----------------------*/}

            {/*-------------------Display all upcoming events--------------------*/}
            <MapSmallCardEvent EventsData={EventsData} />
            {/*-------------------Display all upcoming events--------------------*/}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default EventScreen;
