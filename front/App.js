import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";

//---------------------IMPORTED COMPONENTS------------------
import EventsPage from "./src/pages/EventsPage.js";
import BottomToolBar from "./src/components/BottomToolBar.js";
//---------------------IMPORTED COMPONENTS------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventsData: []
    };
  }
  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    try {
      const req = await fetch("http://192.168.1.106:3000/events", {
        method: "GET"
      });
      const res = await req.json();
      this.setState({ EventsData: res.rows });
    } catch (err) {
      throw new Error(`failed fetching events with = ${err}`);
    }
  };

  render() {
    //Styling variables
    const { background, content } = AppStyle;

    //State data
    const { EventsData } = this.state;
    return (
      <View style={background}>
        <View style={content}>
            <EventsPage EventsData={EventsData} />
        </View>
        <BottomToolBar />
      </View>
    );
  }
}

const AppStyle = StyleSheet.create({
  background: {
    flex: 1
  },
  content: {
    width: "100%",
    height: "100%",
  }
});

export default App;
