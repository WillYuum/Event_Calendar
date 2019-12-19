import { StyleSheet } from "react-native";
import ImageResizeMode from "react-native/Libraries/Image/ImageResizeMode";

export const SmallEventCardStyle = StyleSheet.create({
  containerCard: {
    width: "100%",
    height: 125,
    flexDirection: "row",
    marginTop: 40
  },

  ImageContainer: {
    width: "40%",
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
    marginTop: 20,
    fontSize: 18,
    color: "gray"
  }
});
