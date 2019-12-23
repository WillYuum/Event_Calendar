import React from "react";
import dateFormat from "dateformat";

//------------------IMPORTED REACT NATIVE COMPONENT------------------
import { View, Image, Text, ScrollView } from "react-native";
//------------------IMPORTED REACT NATIVE COMPONENT------------------

//importing stylesheet
import { EventInfoScreenStyle } from "./EventInfoScreenStyle.js";

/**
 * @prop {function} getEventById - this function will fetch the event data to display it to the user]
 *
 * @class EventInfoScreen
 * @extends {React.Component}
 */
class EventInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: []
    };
  }
  async componentDidMount() {
    await this.handleGettingEventById();
  }

  /**
   * @function HandleGettingEventById - handling getting the event data and saving it to the state
   *
   * @memberof EventInfoScreen
   */
  handleGettingEventById = async () => {
    //recieving props from App.js
    const { getEventById } = this.props;
    const EventId = this.props.navigation.state.params.EventId;
    //recieving the eventData
    const EventData = await getEventById(EventId);
    this.setState({ EventData });
  };

  render() {
    const { EventData } = this.state;

    //import style variables from EventInfoScreenStyle.js
    const {
      EventInfoContainer,
      ImageContainer,
      InfoContainer,
      EventTitle,
      HostName,
      EventDescription,
      HostedByText
    } = EventInfoScreenStyle;

    const defaultImage = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

    let ImageUrl = "data:image/png;base64," + EventData.EventMainImage + ";";
    return (
      <View>
        <View style={EventInfoContainer}>
          <ScrollView
            contentContainerStyle={{ flexDirection: "column", height: "100%" }}
          >
            <Image
              style={ImageContainer}
              source={ImageUrl ? { uri: ImageUrl } : defaultImage}
            />
            <View style={InfoContainer}>
              <Text style={EventTitle}>{EventData.EventName}</Text>

              <Text style={HostedByText}>
                <Text>hosted by</Text>{" "}
                <Text style={HostName}>{EventData.HostName}</Text>
              </Text>
              <Text>
                Start:{" "}
                {dateFormat(EventData.EventStartDate, "ddd, mmm dd - HH:MM TT")}
              </Text>
              <Text>
                End:{" "}
                {dateFormat(EventData.EventEndDate, "ddd, mmm dd - HH:MM TT")}
              </Text>
              <Text style={EventDescription}>{EventData.EventDescription}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default EventInfoScreen;
