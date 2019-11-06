import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

class SmallEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let EventImageSrc = { uri: "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png" };

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
    const {Title} = this.props
    return (
      <View style={containerCard}>
        <View style={ImageContainer}>
          <Image source={EventImageSrc} style={EventImage} />
        </View>
        <View style={EventInfo}>
          <Text style={EventTitle}>{Title}</Text>
          <Text style={EventHost}>by Willy the Chilly</Text>
          <Text style={EventDate}>Thursday 12, 8, 2019</Text>
        </View>
      </View>
    );
  }
}

const SmallEventCardStyle = StyleSheet.create({
  containerCard: {
    width: "100%",
    height: 137.5,
    flexDirection: "row",
    marginTop: 50
  },

  ImageContainer: {
    width: "35%",
    height: "100%"
  },

  EventImage: {
    width: "100%",
    height: "100%"
  },

  EventInfo: {
    width: "65%",
    height: "100%",
    backgroundColor: "white"
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
