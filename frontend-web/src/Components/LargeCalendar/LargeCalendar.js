import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

//--------FullCalendar css-----------
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
//--------FullCalendar css-----------
import "./LargeCalendar.scss";

class LargeCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: []
    };
  }

  async componentDidMount() {
    await this.getAllEvents();
  }

  // storing backend Url in readable variable
  Back_Url = process.env.REACT_APP_PORT;

  /**
   *@function getAllEvents - fetches all Events information for backend
   * @memberof LargeCalendar
   */
  getAllEvents = async () => {
    try {
      const req = await fetch(`${this.Back_Url}/events`);
      const res = await req.json();

      //create a new struct for object since calendar takes a different obbject struct
      for (let i = 0; i < res.length; i++) {
        const Event = {};
        Event.id = res[i].EventId;
        Event.title = res[i].EventName;
        Event.Description = res[i].EventDescription;
        Event.HostName = res[i].HostName;
        Event.start = res[i].EventStartDate;
        Event.end = res[i].EventEndDate;

        //adding the new struct to Events state
        const data = [...this.state.Events, Event];
        this.setState({ Events: data });
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  /**
   * @function handleEventClick - get data from event when you click on it
   * @param {Object} info - information received after clicking on event
   * @memberof LargeCalendar
   */
  handleEventClick = info => {
    //functions sent by LandingPage to save eventData in landingPage
    const { getEventData } = this.props;

    //returning the event data that has been clicked on in calendar
    const Event = this.state.Events.filter(event => {
      return event.id == info.event._def.publicId;
    });
    //saving the event data in state in LandingPage
    getEventData(Event);
  };

  //selecting the range of date for creating event
  handleSelectedDates = info => {
    alert("selected " + info.startStr + " to " + info.endStr);
  };

  render() {
    const { Events } = this.state;

    return (
      <div className="LargeCalendar-container">
        <FullCalendar
          defaultView="dayGridMonth"
          height={800}
          plugins={[dayGridPlugin, interactionPlugin]}
          header={{
            left: "prev,next today",
            center: "title",
            right: ""
          }}
          events={Events}
          eventClick={this.handleEventClick}
          selectable={false}
          select={this.handleSelectedDates}
          eventLimit={4}
        />
      </div>
    );
  }
}

export default LargeCalendar;
