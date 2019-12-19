import React from "react";

//-------------IMPORTED COMPONENTS----------------------
import LargeCalendar from "../../Components/LargeCalendar/LargeCalendar.js";
import EventDetailsCard from "../../Components/EventDetailsCard/EventDetailsCard.js";
//-------------IMPORTED COMPONENTS----------------------

import "./LandingPage.scss";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: []
    };
  }

  /**
   *@function getEventData - gets a specific event data from calendar to LandingPage
   *@param {Array} EventData - data that will be provided by the Calendar
   * @memberof LandingPage
   */
  getEventData = EventData => {
    this.setState({ EventData });
  };

  render() {
    const { EventData } = this.state;
    return (
      <div className="LandingPage-container">
        {/* <div className="VideoIntro-Container">
            <video className='VideoIntro' autoPlay loop muted>
                <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4"/>
            </video>
        </div> */}

        <div className="EventContent-container">
          <div className="LargeCalender-section">
            <LargeCalendar
              //function to get the data from the calendar
              getEventData={this.getEventData}
            />
          </div>
          <div className="EventDetailsCard-section">
            <EventDetailsCard EventData={EventData} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
