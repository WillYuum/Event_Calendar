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

      if (result) {
        this.setState({ SessionsData: result });
      } else {
        return;
      }
    } catch (err) {
      throw new Error(`fetching sessions failed with ${err}`);
    }
  };

  render() {
    const { SessionsData } = this.state;

    //receiving EventData props from EventInfoPage Component
    const { EventData } = this.props;
    return (
      <div className="TabSection">
        <ul className="tabs" role="tablist">
          <li>
            <input type="radio" name="tabs" id="tab1" defaultChecked />
            <label
              htmlFor="tab1"
              role="tab"
              aria-selected="true"
              aria-controls="panel1"
              tabIndex="0"
            >
              Description
            </label>
            <div
              id="tab-content1"
              className="tab-content"
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
              htmlFor="tab2"
              role="tab"
              aria-selected="false"
              aria-controls="panel2"
              tabIndex="0"
            >
              Sessions
            </label>
            <div
              id="tab-content2"
              className="tab-content"
              role="tabpanel"
              aria-labelledby="specification"
              aria-hidden="true"
            >
              {SessionsData.map((session, i) => {
                return (
                  <SessionCard
                    key={i}
                    SessionTitle={session.SessionTitle}
                    SessionDescription={session.SessionDescription}
                    SessionStart={session.SessionStart}
                    SessionEnd={session.SessionEnd}
                  />
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TabSection;
