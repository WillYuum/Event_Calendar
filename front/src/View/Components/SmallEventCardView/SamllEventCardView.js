import React from "react";
import { View, Text, Image } from "react-native";

import dateformat from "dateformat";

//importing stylesheet file
import { SmallEventCardStyle } from "./SmallEventCardStyle.js";

/**
 *
 *
 * @class SmallEventCardView
 * @extends {Component}
 */
class SmallEventCardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    //Styling varialbles
    const {
      containerCard,
      ImageContainer,
      EventImage,
      EventInfo,
      EventTitle,
      EventHost,
      EventDate
    } = SmallEventCardStyle;

    const { Title, Host, EventStartDate } = this.props;

    //static image
    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };
    return (
      <View style={containerCard}>
        <View style={ImageContainer}>
          <Image source={Image_Http_URL} style={EventImage} />
        </View>
        <View style={EventInfo}>
          <Text style={EventTitle}>{Title}</Text>
          <Text style={EventHost}>by {Host}</Text>
          <Text style={EventDate}>
            {dateformat(EventStartDate, "ddd, mmm dd - HH:MM TT")}
          </Text>
        </View>
      </View>
    );
  }
}

export default SmallEventCardView;
