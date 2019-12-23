import { StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export const EventInfoScreenStyle = StyleSheet.create({
  EventInfoContainer: {
    width: width,
    height: height
  },
  ImageContainer: {
    width: "100%",
    height: "40%",
    resizeMode: "stretch"
  },
  InfoContainer: {
    paddingHorizontal: 20
  },
  EventTitle: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10
  },

  HostedByText: {
    fontSize: 15
  },
  HostName: {
    fontWeight: "bold",
    fontSize:17
  },
  EventDescription: {
    fontSize: 20,
    marginTop: 35
  }
});
