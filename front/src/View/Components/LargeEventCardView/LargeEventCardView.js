import React from "react";
import { View, Image, Text } from "react-native";

import dateFormat from "dateformat";

//import stylesheet file
import { LatestEventStyle } from "./LargeEventCardStyle.js";

/**
 *
 * @class LargeEventCardView
 * @extends {Component}
 *
 * @prop {string} EventTitle - Title displayed for event
 * @prop {string} HostName - Name of the event host
 * @prop {Date} EventStartDate
 */
class LargeEventCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //importing style variables
    const {
      CardContainer,
      ImageContainer,
      EventImage,
      EventInfo,
      dateContainer,
      detailsContainer,
      EventMonth,
      EventDay,
      EventTitleStyle,
      EventHost
    } = LatestEventStyle;

    //static image
    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

    //receiving props from controller
    const { EventTitle, HostName, EventStartDate } = this.props;
    return (
      <View style={CardContainer}>
        <View style={ImageContainer}>
          <Image source={Image_Http_URL} style={EventImage} />
        </View>
        <View style={EventInfo}>
          <View style={dateContainer}>
            <Text style={EventMonth}>{dateFormat(EventStartDate, "mmm")}</Text>
            <Text style={EventDay}>{dateFormat(EventStartDate, "dd")}</Text>
          </View>
          <View style={detailsContainer}>
            <Text style={EventTitleStyle}>{EventTitle}</Text>
            <Text style={EventHost}>by {HostName}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LargeEventCardView;
