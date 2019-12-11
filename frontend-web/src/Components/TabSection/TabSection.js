import React from "react";

//----------------------------IMPORTED COMPONENTS------------------------------
import SessionCard from "../SessionCard/SessionCard.js";
//----------------------------IMPORTED COMPONENTS------------------------------

import "./TabSection.scss";

class TabSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SessionsData: []
    };
  }

  // storing backend Url in readable variable
  Back_UrlPort = process.env.REACT_APP_PORT;

  async componentWillReceiveProps() {
    const { EventData } = this.props;
    const EventId = this.props.EventData.EventId;
    if (EventId) {
      await this.fetchEventSessions(EventId);
    } else {
      return;
    }
  }

  /**
   * @function fetchEventSessions - fetch all the sessions from specific event
   * @param {int} EventId
   *
   * @memberof TabSection
   */
  fetchEventSessions = async EventId => {
    try {
      //fetching the request
      const req = await fetch(
        `${this.Back_UrlPort}/sessions?eventid=` + EventId
      );

      //getting the sessions
      const result = await req.json();
      //saving the sessions to SessionsData state
      this.setState({ SessionsData: result });
      console.log(this.state.SessionsData);
    } catch (err) {
      throw new Error(`fetching sessions failed with ${err}`);
    }
  };

  render() {
    const { SessionsData } = this.state;

    //receiving EventData props from EventInfoPage Component
    const { EventData } = this.props;
    return (
      <section class="tabs">
        <ul class="tabs" role="tablist">
          <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label
              for="tab1"
              role="tab"
              aria-selected="true"
              aria-controls="panel1"
              tabindex="0"
            >
              Description
            </label>
            <div
              id="tab-content1"
              class="tab-content"
              role="tabpanel"
              aria-labelledby="description"
              aria-hidden="false"
            >
              <p>{EventData.EventDescription}</p>
            </div>
          </li>

          <li>
            <input type="radio" name="tabs" id="tab2" />
            <label
              for="tab2"
              role="tab"
              aria-selected="false"
              aria-controls="panel2"
              tabindex="0"
            >
              Sessions
            </label>
            <div
              id="tab-content2"
              class="tab-content"
              role="tabpanel"
              aria-labelledby="specification"
              aria-hidden="true"
            >
              {SessionsData.map((session, i) => {
                return (
                  <SessionCard key={i} SessionTitle={session.SessionTitle} />
                );
              })}
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default TabSection;
