import { StyleSheet } from "react-native";

export const SmallEventCardStyle = StyleSheet.create({
  containerCard: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    marginTop: 30
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
