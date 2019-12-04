import React from "react";

import { Route, withRouter, Switch } from "react-router-dom";

//-------------IMPORTED COMPONENTS----------------------
import NavBar from "./Components/NavBar/NavBar.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage.js";
import Footer from "./Components/Footer/Footer.js";
//-------------IMPORTED COMPONENTS----------------------

import "./App.scss";

class App extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    events: []
  };

  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => {
              return <LandingPage />;
            }}
          />

          <Route
            path="event/:id"
            render={props => {
              return <EventInfoPage {...props} />;
            }}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
