import React from "react";
import { Link } from "react-router-dom";
import { FixDateTimeFormat } from "../../utils/FixTimeFormat.js";

import "./EventDetailsCard.scss";

class EventDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: ""
    };
  }

  async componentWillReceiveProps(prevProps) {
    if (prevProps) {
      await this.setState({ EventData: prevProps.EventData[0] });
    } else {
      return;
    }
  }

  render() {
    const { EventData } = this.state;
    return (
      <div className="EventDetailsCard-cotainer">
        <div className="TopPart">
          <div
            className="EventImage"
            style={{
              backgroundImage: `url("https://images-lebtivity-com.s3.amazonaws.com/content/versions/93540/1280-720-0-0/bibe_2019_beirut_international_beer_event.jpeg")`
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