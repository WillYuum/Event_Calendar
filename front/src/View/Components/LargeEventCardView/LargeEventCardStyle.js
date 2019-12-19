import { StyleSheet } from "react-native";

export const LatestEventStyle = StyleSheet.create({
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
    resizeMode: "stretch"
  },

  EventImage: {
    width: "100%",
    height: "100%"
  },

  EventInfo: {
    width: "100%",
    height: "45%",
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

  EventTitleStyle: {
    fontSize: 25,
    color: "#4D648D"
  },

  EventHost: {
    color: "gray",
    fontSize: 20
  },

  HostNameText: {
    color: "#4D648D"
  }
});
