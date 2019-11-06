import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

/**
 * @prop {string} Title
 * @prop {string} Host
 */
class SmallEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let EventImageSrc = {
      uri:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
    };

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

    //props recieved from MapEvents.js
    const { Title, Host } = this.props;
    return (
      <View style={containerCard}>
        <View style={ImageContainer}>
          <Image source={EventImageSrc} style={EventImage} />
        </View>
        <View style={EventInfo}>
          <Text style={EventTitle}>{Title}</Text>
          <Text style={EventHost}>by {Host}</Text>
          <Text style={EventDate}>Thursday 12, 8, 2019</Text>
        </View>
      </View>
    );
  }
}

const SmallEventCardStyle = StyleSheet.create({
  containerCard: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },

  ImageContainer: {
    width: "30%",
    height: "100%"
  },

  EventImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch"
  },

  EventInfo: {
    backgroundColor: "white",
    width: "70%",
    height: "100%",
    padding: 10
  },

  EventTitle: {
    fontSize: 20
  },

  EventHost: {
    fontSize: 18,
    color: "gray"
  },

  EventDate: {
    fontSize: 18,
    color: "gray"
  }
});

export default SmallEventCard;
