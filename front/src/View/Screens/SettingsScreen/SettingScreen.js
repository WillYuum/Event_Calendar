import React from "react";
import { View, Text } from "react-native";

//importing stylesheet file
import { SettingsScreenStyle } from "./SettingsScreenStyle.js";

/**
 *
 *
 * @class SettingsScreen
 * @extends {React.Component}
 */
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View>
          <Text>Hello</Text>
          <Text>World</Text>
          <Text>Pizza</Text>
          <Text>Cool</Text>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
