import React from "react";
import { fetchLatestEvents } from "./src/Controllers/EventController.js";

//-----------------REACT NAVIGATION COMPONENTS----------------
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
//-----------------REACT NAVIGATION COMPONENTS----------------

//---------------------IMPORTED COMPONENTS------------------
import EventScreen from "./src/View/Screens/EventScreen/EventScreen.js";
import SettingScreen from "./src/View/Screens/SettingsScreen/SettingScreen.js";
import EventInfoScreen from "./src/View/Screens/EventInfoScreen/EventInfoScreen.js"
//---------------------IMPORTED COMPONENTS------------------

//Icons styles/designs
import Icon from "react-native-vector-icons/Ionicons";



//creating navigation
const MainTabs =
  createMaterialBottomTabNavigator(
    {
      //All navigable screens
      Home: {
        screen: (props) => {
          return <EventScreen fetchLatestEvents={fetchLatestEvents} {...props} />;
        }
      },
      Settings: {
        screen: () => { return <SettingScreen /> }
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

const App = createStackNavigator({
  App: {
    screen: (props) => <EventScreen fetchLatestEvents={fetchLatestEvents} {...props} />
  },
  Event: {
    screen: () => <EventInfoScreen />
  }
},
  {
    initialRouteName: "App",
  })

export default createAppContainer(App)


