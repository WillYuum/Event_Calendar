import React from "react";
import { Link } from "react-router-dom";
import { FixDateTimeFormat } from "../../utils/FixTimeFormat.js";

//----------------------------IMPORTED COMPONENTS------------------------------
import EventMapLocation from "../EventMapLocation/EventMapLocation.js";
//----------------------------IMPORTED COMPONENTS------------------------------

//-------------Imported icons-------------------
// import locationIcon from "../../assets/LocationIcon.svg";
//-------------Imported icons-------------------

import "./EventDetailsCard.scss";

class EventDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EventData: "",
      EventImage: "",
      lat: 33.892314,
      lng: 35.504858,
      zoom: 13
    };
  }

  // storing backend Url in readable variable
  Back_UrlPort = process.env.REACT_APP_PORT;

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
      const req = await fetch(
        `${this.Back_UrlPort}/getimages?EventId=` + eventId
      );
      const result = await req.json();

      if (result) {
        this.setState({ EventImage: result[0].Image });
      } else {
        //return state empty if event doesn't have image
        this.setState({ EventImage: "" });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  render() {
    const { EventData } = this.state;
    return (
      <div className="EventDetailsCard-cotainer">
        {/* {-----------------------IMAGE SECTION---------------------} */}
        <div className="TopPart">
          <div
            className="EventImage"
            style={{
              backgroundImage:
                "url('data:image/png;base64," + this.state.EventImage + "')"
            }}
          ></div>
        </div>
        {/* {-----------------------IMAGE SECTION---------------------} */}

        <div className="bottomPart">
          <div className="EventBriefInfo">
            <ul className="listOfBriefInfo">
              {/* {-------------------Event Title section---------------} */}

              <h2 className="EventTitle">
                {EventData.title ? (
                  EventData.title
                ) : (
                  <small>Click on event to see title</small>
                )}
              </h2>
              {/* {-------------------Event Title section---------------} */}

              {/* {-------------------HostName & moreInfo button section---------------} */}
              <div className="hostName-infoBtn">
                <li>
                  Host's Name
                  <br />
                  <span>
                    {EventData.HostName ? (
                      EventData.HostName
                    ) : (
                      <small>Click on event to see title</small>
                    )}
                  </span>
                </li>
                <Link className="MoreInfoBtn" to={`/event/${EventData.id}`}>
                  <p className="btnText">More Info</p>
                </Link>
              </div>
              {/* {-------------------HostName & moreInfo button section---------------} */}

              {/* {-------------------Date and Time section---------------} */}
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
              {/* {-------------------Date and Time section---------------} */}

              {/* {----------------------MAP SECTION---------------------} */}
              <li>
                Where <br />
                <EventMapLocation />
              </li>
            </ul>
          </div>
          {/* {----------------------MAP SECTION---------------------} */}
        </div>
      </div>
    );
  }
}

export default EventDetailsCard;
