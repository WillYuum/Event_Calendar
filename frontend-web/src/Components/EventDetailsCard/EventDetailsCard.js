import React from "react";
import { Link } from "react-router-dom";
import { FixDateTimeFormat } from "../../utils/FixTimeFormat.js";

import "./EventDetailsCard.scss";

class EventDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: "",
      EventImage: ""
    };
  }

  // storing backend Url in readable variable
  Back_Url = process.env.REACT_APP_PORT;

  async componentWillReceiveProps(prevProps) {
    if (prevProps) {
      await this.setState({ EventData: prevProps.EventData[0] });
      await console.log(this.state.EventData.id);
      await this.getEventImageById(this.state.EventData.id);
    } else {
      return;
    }
  }

  /**
   * @function getEventImage - getting image from specific event to display it to it to the user
   *
   * @memberof EventDetailsCard
   */
  getEventImageById = async eventId => {
    try {
      const req = await fetch(`${this.Back_Url}/getimages?EventId=` + eventId);
      const result = await req.json();

      if (result) {
        this.setState({ EventImage: result[0].Image });
      } else {
        this.setState({ EventImage: "" });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  render() {
    const { EventData } = this.state;
    console.log(this.state.EventImage);
    return (
      <div className="EventDetailsCard-cotainer">
        <div className="TopPart">
          <div
            className="EventImage"
            style={{
              backgroundImage:
                "url('data:image/png;base64," + this.state.EventImage + "')"
            }}
          ></div>
        </div>

        <div className="bottomPart">
          <div className="EventBriefInfo">
            <ul className="listOfBriefInfo">
              <li className="EventTitle">
                {EventData.title ? (
                  EventData.title
                ) : (
                  <small>Click on event to see title</small>
                )}
              </li>
              <li>
                Where <br />
                <span>Beirut</span>
              </li>
              <li>
                When <br />
                <span>
                  {EventData.start ? (
                    FixDateTimeFormat(EventData.start, "date")
                  ) : (
                    <small>Click on event to see date</small>
                  )}
                  <br />
                  {EventData.start
                    ? FixDateTimeFormat(EventData.start, "time")
                    : ""}
                </span>
              </li>
              <li>
                HostName
                <br />
                <span>{EventData.HostName}</span>
              </li>
            </ul>
          </div>
          <Link className="MoreInfoBtn" to={`/event/${EventData.id}`}>
            <p className="btnText">More Info</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default EventDetailsCard;
