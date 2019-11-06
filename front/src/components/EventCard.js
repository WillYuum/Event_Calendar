import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

/**
 * @prop {string} Title
 * @prop {string} Host
 */
class LatestEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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

    let Image_Http_URL = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };
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

const LatestEventStyle = StyleSheet.create({
  CardContainer: {
    backgroundColor: "#0000",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    elevation: 1
  },

  ImageContainer: {
    width: "100%",
    height: "60%",
  },

  EventImage: {
    width: "100%",
    height: "100%",
  },

  EventInfo: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    backgroundColor: "white"
  },

  dateContainer: {
    width: "25%",
    height: "100%"
  },

  detailsContainer: {
    width: "75%",
    height: "100%",
    padding: 20
  },

  EventMonth: {
    width: "100%",
    color: "red",
    fontSize: 25,
    textAlign: "center",
    marginTop: "25%"
  },

  EventDay: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  EventTitle: {
    fontSize: 25
  },

  EventHost: {
    color: "gray",
    fontSize: 20
  }
});

export default LatestEvent;
