import React from "react";
import { View, Image, Text } from "react-native";

//import stylesheet file
import { LatestEventStyle } from "./LargeEventCardStyle.js";

/**
 *
 *
 * @class LargeEventCardView
 * @extends {Component}
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
      EventTitle,
      EventHost
    } = LatestEventStyle;

    //static image
    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

    //receiving props from controller
    const { Title, Host } = this.props;
    return (
      <View style={CardContainer}>
        <View style={ImageContainer}>
          <Image source={Image_Http_URL} style={EventImage} />
        </View>
        <View style={EventInfo}>
          <View style={dateContainer}>
            <Text style={EventMonth}>Jan</Text>
            <Text style={EventDay}>5</Text>
          </View>
          <View style={detailsContainer}>
            <Text style={EventTitle}>{Title}</Text>
            <Text style={EventHost}>by {Host}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LargeEventCardView;
