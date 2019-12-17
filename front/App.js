//-----------------REACT NAVIGATION COMPONENTS----------------
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//-----------------REACT NAVIGATION COMPONENTS----------------

//---------------------IMPORTED COMPONENTS------------------
// import NavigatorBar from "./src/components/NavigatorBar.js";
import EventScreen from "./src/View/Screens/EventScreen/EventScreen.js";
//---------------------IMPORTED COMPONENTS------------------

//creating navigation
const App = createStackNavigator(
  {
    //All navigable screens
    EventScreen
  },
  //Navigation config
  {
    headerMode: "none"
  }
);

export default createAppContainer(App);
