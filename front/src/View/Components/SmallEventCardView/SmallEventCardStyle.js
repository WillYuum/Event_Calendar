import { StyleSheet } from "react-native";

export const SmallEventCardStyle = StyleSheet.create({
  containerCard: {
    width: "100%",
    height: 125,
    flexDirection: "row",
    marginTop: 40,
    alignSelf: "center"
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
    width: "60%",
    height: "100%",
    padding: 10
  },

  EventTitle: {
    fontSize: 20,
    color: "#4D648D"
  },

  EventHost: {
    fontSize: 17,
    color: "gray"
  },

  EventDate: {
    marginTop: 20,
    fontSize: 18,
    color: "gray",
    color: "#4D648D"

  },

  HostNameText: {
    color: "#4D648D"
  }
});
