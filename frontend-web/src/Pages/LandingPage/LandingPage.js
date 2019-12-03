import React from "react";

//-------------IMPORTED COMPONENTS----------------------
import LargeCalendar from "../../Components/LargeCalendar/LargeCalendar.js";
import EventDetailsCard from "../../Components/EventDetailsCard/EventDetailsCard.js";
//-------------IMPORTED COMPONENTS----------------------

import "./LandingPage.scss";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="LandingPage-container">
        <div className="VideoIntro-Container">
            <video className='VideoIntro' autoPlay loop muted>
                <source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" type="video/mp4"/>
            </video>
        </div>

        <div className="EventContent-container">
          {/* <LargeCalendar />
          <EventDetailsCard /> */}
        </div>


      </div>
    );
  }
}

export default LandingPage;
