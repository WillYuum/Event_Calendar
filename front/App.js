import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }
});

const text = StyleSheet.create({
  txt: {
    color: "#fff"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: [],
      fakeData: [
        { Name: "WIlly", FamilyName: "Abou" },
        { Name: "DADDY", FamilyName: "faller" },
        { Name: "cheese", FamilyName: "mac" }
      ]
    };
  }
  componentDidMount() {
    this.getEvents();
  }

  getEvents = async () => {
    try {
      const req = await fetch("http://192.168.49.113:3000/events", {
        method: "GET"
      });
      const res = await req.json();
      console.log(res);
      this.setState({ Events: res.rows });
    } catch (err) {
      throw new Error(`failed fetching events with = ${err}`);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.Events.map((event, index) => {
          return (
            <Text key={index} style={text.txt}>
              {event.doc.Eventname}
            </Text>
          );
        })}
      </View>
    );
  }
}

export default App;
