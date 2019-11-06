import React from "react";
import { StyleSheet, Text, View } from "react-native";

class BottomToolBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={ToolBar.Container}>
        <View style={ToolBar.ButtonContainer}>
          <Text style={ToolBar.PerButton}>Home</Text>
        </View>
        <View style={ToolBar.ButtonContainer}>
          <Text style={ToolBar.PerButton}>Calendar</Text>
        </View>
        <View style={ToolBar.ButtonContainer}>
          <Text style={ToolBar.PerButton}>Options</Text>
        </View>
      </View>
    );
  }
}

const ToolBar = StyleSheet.create({
  Container: {
    width: "100%",
    height: "10%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    borderColor: "black",
    backgroundColor: "lightgray"
  },

  ButtonContainer: {
    width: "33.33333%",
    height: "100%",
  },

  PerButton: {
    width: "100%",
    height:"100%",
    textAlign:"center",
    textAlignVertical: "center",

    borderTopWidth: 1
  }
});

export default BottomToolBar;
