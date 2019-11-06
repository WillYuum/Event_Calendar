import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class NavigatorBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={ToolBar.Container}>
        <Button
          style={ToolBar.ButtonContainer}
          onPress={() => navigate("Home", { name: "Willy" })}
        >
          <Text style={ToolBar.PerButton}>Home</Text>
        </Button>
        <Button
          style={ToolBar.ButtonContainer}
          onPress={() => navigate("HomeScreen", { name: "Willy" })}
        >
          <Text style={ToolBar.PerButton}>Calendar</Text>
        </Button>
        <Button
          style={ToolBar.ButtonContainer}
          onPress={() => navigate("SettingsScreen", { name: "Willy" })}
        >
          <Text style={ToolBar.PerButton}>Options</Text>
        </Button>
      </View>
    );
  }
}

const ToolBar = StyleSheet.create({
  Container: {
    width: "100%",
    height: "7%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    borderColor: "black",
    backgroundColor: "lightgray"
  },

  ButtonContainer: {
    width: "33.33333%",
    height: "100%"
  },

  PerButton: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",

    borderTopWidth: 1
  }
});

export default NavigatorBar;
