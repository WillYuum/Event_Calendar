import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//---------------------IMPORTED COMPONENTS------------------
// import NavigatorBar from "./src/components/NavigatorBar.js";

import EventScreen from "./src/View/Screens/EventScreen/EventScreen.js";
//---------------------IMPORTED COMPONENTS------------------

const MainNavigator = createStackNavigator({
  Home: { screen: EventScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
