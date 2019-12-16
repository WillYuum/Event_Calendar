import { StyleSheet } from "react-native";

export const EventScreenStyle = StyleSheet.create({
  PageContainer: {
    flex: 1,
    width: "100%",
    height: "100%"
  },

  BackgroundIntro: {
    backgroundColor: "purple",
    width: "100%",
    height: "40%"
  },

  WelcomeText: {
    fontSize: 40,
    color: "white",
    marginTop: 35,
    textAlign: "center"
  },

  latestEventPos: {
    position: "absolute",
    top: "15%",
    width: "95%",
    height: 275,
    alignSelf: "center"
  }
});
