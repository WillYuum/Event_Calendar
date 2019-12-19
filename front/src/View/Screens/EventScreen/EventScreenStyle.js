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
    backgroundColor: "purple",
    width: "100%",
    height: 350
  },

  WelcomeText: {
    fontSize: 40,
    color: "white",
    marginTop: 65,
    textAlign: "center"
  },

  latestEventPos: {
    // marginTop: -15,
    width: "95%",
    height: 275,
    alignSelf: "center"
  }
});
