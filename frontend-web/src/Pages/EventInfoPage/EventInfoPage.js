import React from "react";

import { FixDateTimeFormat } from "../../utils/FixTimeFormat.js";

//----------------------------IMPORTED COMPONENTS------------------------------
import EventMapLocation from "../../Components/EventMapLocation/EventMapLocation.js";
import TabSection from "../../Components/TabSection/TabSection.js";
//----------------------------IMPORTED COMPONENTS------------------------------

import "./EventInfoPage.scss";

//EventInfoPage will display detailed information about a specific event
class EventInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: "",
      EventImage: "" //store image in state as base64
    };
  }

  // storing backend Url in readable variable
  Back_UrlPort = process.env.REACT_APP_PORT;

  async componentDidMount() {
    //getting the event id from react router url
    const EventId = this.props.match.params.id;
    this.fetchEventData(EventId);
  }

  /**
   *@function fetchEventData - fetch a specific event with event id
   *@param {int} EventId
   * @memberof EventInfoPage
   */
  fetchEventData = async Eventid => {
    try {
      const req = await fetch(`${this.Back_UrlPort}/event?eventid=` + Eventid);
      const result = await req.json();

      this.setState({ EventData: result });
      //fetching image using same event id
      this.fetchEventImage(Eventid);
    } catch (err) {
      throw new Error(
        `fetching event data with id = ${Eventid} failed with ${err}`
      );
    }
  };

  /**
   *@function fetchEventImage - fetch the base64 image from api
   *@param {int} EventId
   * @memberof EventInfoPage
   */
  fetchEventImage = async EventId => {
    try {
      const req = await fetch(
        `${this.Back_UrlPort}/getimages?EventId=` + EventId
      );
      const result = await req.json();

      this.setState({ EventImage: result[0].Image });
    } catch (err) {
      throw new Error(`fetch event image failed with ${err}`);
    }
  };

  render() {
    const { EventData, EventImage } = this.state;
    console.log(EventData);
    return (
      <div className="EventInfoPage-container">
        <div className="EventInfoPage-header">
          <div
            className="EventImage-container"
            style={{
              backgroundImage: "url('data:image/png;base64," + EventImage + "')"
            }}
          ></div>
          <div className="rightInfo">
            <div className="rightInfo-block">
              <div className="EventTitle-block">
                <h1>{EventData.EventName}</h1>
                <p>Hosted by {EventData.HostName}</p>
              </div>
              <button className="AttendButton">Attend</button>
            </div>
          </div>
        </div>

        <div className="EventInfoPage-body">
          <div className="Eventinfo-left">
            <div className="description">
              <TabSection EventData={EventData} />
            </div>
          </div>

          <div className="Eventinfo-right">
            <div className="datetime-section">
              <h3>Date & Time</h3>
              <p>{FixDateTimeFormat(EventData.EventStartDate, "date")}</p>
              <time>{FixDateTimeFormat(EventData.EventStartDate, "time")}</time>
            </div>
            <div className="eventlocation-info">
              <h3>Location</h3>
              <p>
                Nihil aperiam voluptatum ullam, assumenda soluta aut ad,
                suscipit vel{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="EventInfoPage-footer">
          <EventMapLocation />
        </div>
      </div>
    );
  }
}

export default EventInfoPage;
