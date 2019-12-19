import { StyleSheet } from "react-native";

export const EventScreenStyle = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    flexDirection: "column",
    position: "relative"
  },

  ScrollViewStyle: {
    flexDirection: "column",
    height: "100%"
  },

  BackgroundIntro: {
    backgroundColor: "#4D648D",
    width: "100%",
    height: 350
  },

  WelcomeText: {
    fontSize: 40,
    color: "white",
    marginTop: 90,
    textAlign: "center"
  },

  latestEventPos: {
    marginTop: -75,
    width: "95%",
    height: 275,
    alignSelf: "center"
  }
});
