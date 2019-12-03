import React from "react";

import { Route, withRouter, Switch } from "react-router-dom";

//-------------IMPORTED COMPONENTS----------------------
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import EventInfoPage from "./Pages/EventInfoPage/EventInfoPage.js";
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
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => {
              return <LandingPage />;
            }}
          />

          <Route
            path="EventInfoPage"
            render={() => {
              return <EventInfoPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
