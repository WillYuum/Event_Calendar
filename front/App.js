import React from "react";
import { fetchLatestEvents } from "./src/Controllers/EventController.js";

//-----------------REACT NAVIGATION COMPONENTS----------------
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator, createAppContainer } from "react-navigation";
//-----------------REACT NAVIGATION COMPONENTS----------------

//---------------------IMPORTED COMPONENTS------------------
import EventScreen from "./src/View/Screens/EventScreen/EventScreen.js";
import SettingScreen from "./src/View/Screens/SettingsScreen/SettingScreen.js";
//---------------------IMPORTED COMPONENTS------------------

//Icons styles/designs
import Icon from "react-native-vector-icons/Ionicons";

//creating navigation
export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      //All navigable screens
      Home: {
        screen: () => {
          return <EventScreen fetchLatestEvents={fetchLatestEvents} />;
        }
      },
      Settings: {
        screen: SettingScreen
      }
    },
    //Navigation config/design
    {
      initialRouteName: "Home",
      headerMode: "none",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
      barStyle: { backgroundColor: "#694fad" }
    }
  )
);
