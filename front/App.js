import React from "react";
import {
  fetchLatestEvents,
  getEventById
} from "./src/Controllers/EventController.js";

//-----------------REACT NAVIGATION COMPONENTS----------------
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
//-----------------REACT NAVIGATION COMPONENTS----------------

//---------------------IMPORTED COMPONENTS------------------
import EventScreen from "./src/View/Screens/EventScreen/EventScreen.js";
import SettingScreen from "./src/View/Screens/SettingsScreen/SettingScreen.js";
import EventInfoScreen from "./src/View/Screens/EventInfoScreen/EventInfoScreen.js";
//---------------------IMPORTED COMPONENTS------------------

//Icons styles/designs
import { Ionicons } from '@expo/vector-icons/';

//creating navigation
const MainTabs = createMaterialBottomTabNavigator(
  {
    //All navigable screens
    Home: {
      screen: props => {
        return <EventScreen fetchLatestEvents={fetchLatestEvents} {...props} />;
      },
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Ionicons name="home-outline" size={32} color="black" />
        )
      }
    },
    Settings: {
      screen: () => {
        return <SettingScreen />;
      }
    }
  },
  //Navigation config/design
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "white" }
  }
);

const App = createStackNavigator(
  {
    App: {
      screen: MainTabs,
      navigationOptions: {
        header: null
      }
    },
    Event: {
      screen: props => (
        <EventInfoScreen getEventById={getEventById} {...props} />
      ),
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#4D648D"
        }
      }
    }
  },
  {
    initialRouteName: "App",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

export default createAppContainer(App);
