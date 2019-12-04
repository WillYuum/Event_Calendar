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
          <div className="heading">
            <h2>Event Details</h2>
          </div>

          
          <div className="EventBriefInfo">
            <ul className="listOfBriefInfo">
              <li>
                EventName: <span>{EventData.title}</span>
              </li>
              <li>
                Date:{" "}
                <span>
                  {EventData.start
                    ? FixDateTimeFormat(EventData.start, "date")
                    : ""}
                </span>
              </li>
              <li>
                Time:{" "}
                <span>
                  {EventData.start
                    ? FixDateTimeFormat(EventData.start, "time")
                    : ""}
                </span>
              </li>
              <li>
                HostName: <span>{EventData.HostName}</span>
              </li>
              <li>
                Location: <span>{}</span>
              </li>
            </ul>

            <div>
              <h3>Description</h3>
              <p>{EventData.Description}</p>
            </div>
          </div>
        </div>

        <div className="button-container">
          <Link to={`/event/${EventData.id}`}>
            <button>More Info</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EventDetailsCard;
