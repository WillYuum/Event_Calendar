import React from "react";
import shuffle from "shuffle-array";

//---------------FullCalendar modules----------------
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
//---------------FullCalendar modules----------------

//---------------IMPORTED COMPONENT----------------
import ChainedCreateModal from "../../Components/ChainedCreateModal/ChainedCreateModal.js";
//---------------IMPORTED COMPONENT----------------

//--------------------IMPORTING CREATE EVENT MODALS--------------------
import EventMainInfo from "../CreateEventModals/EventMainInfo/EventMainInfo.js";
import CreateSessionModal from "../CreateEventModals/CreateSessionModel/CreateSessionModel.js"
//--------------------IMPORTING CREATE EVENT MODALS---------------------

//--------FullCalendar css-----------
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
//--------FullCalendar css-----------
import "./LargeCalendar.scss";

/**
 *
 *
 * @class LargeCalendar
 * @extends {React.Component}
 */
class LargeCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Events: [],
      isCreatingEvent: false,
      SelectedDate: "",
      latestevents: []
    };

    //referencing child component ChainedCreate Model to this component
    this.ChainedModalElement = React.createRef();
  }

  async componentDidMount() {
    await this.getLatestEvents();
    await this.getAllEvents();
  }

  // storing backend Url in readable variable
  Back_Url = process.env.REACT_APP_PORT;

  /**
   * @function getLatestEvents - Show one of the latest events on the EventDetailsCard on first enter
   *
   * @memberof LargeCalendar
   */
  getLatestEvents = async () => {
    //recieving props from LandingPageComponent
    const { getEventData } = this.props;

    try {
      //fetching latest events
      const request = await fetch(`${this.Back_Url}/api/latestevents`);
      const response = await request.json();

      //picking first 4 and randomizing them
      const ClosestEvents = await response.slice(0, 2);
      const shuffledEvents = shuffle(ClosestEvents);

      //selecting on of the 4 randomized events
      const SelectedEvent =
        shuffledEvents[Math.floor(Math.random() * shuffledEvents.length)];
      console.log(ClosestEvents);
      //creating an instance of event object
      const Event = {};

      //adding event info to Event object
      Event.id = SelectedEvent.EventId;
      Event.title = SelectedEvent.EventName;
      Event.Description = SelectedEvent.EventDescription;
      Event.HostName = SelectedEvent.HostName;
      Event.start = SelectedEvent.EventStartDate;
      Event.end = SelectedEvent.EventEndDate;

      //sending the event data to LandingPage->EventCardDetails component
      getEventData(Event);
    } catch (err) {
      throw new Error(`fetching latest events failed with ${err}`);
    }
  };

  /**
   * @function getAllEvents - fetches all Events information for backend
   * @memberof LargeCalendar
   */
  getAllEvents = async () => {
    try {
      const req = await fetch(`${this.Back_Url}/getevents`);
      const res = await req.json();

      //create a new struct for object since calendar takes a different obbject struct
      for (let i = 0; i < res.length; i++) {
        //creating an instance of event object
        const Event = {};

        //adding event info to Event object
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
      // eslint-disable-next-line eqeqeq
      return event.id == info.event._def.publicId;
    });
    //saving the event data in state in LandingPage component
    getEventData(Event[0]);
  };

  //selecting the range of date for creating event
  handleSelectedDates = info => {
    //pop up the modal
    this.setState({ ToggleShowModal: true });

    //saving the select dates data in state to send it to the model
    this.setState({ SelectedDate: info });
    this.ChainedModalElement.current.ToggleModel();
  };

  ToggleCreateMode = () => {
    const CreateMode = !this.state.isCreatingEvent;
    this.setState({ isCreatingEvent: CreateMode });
  };
  
  render() {
    const { Events, isCreatingEvent, SelectedDate } = this.state;
    console.log("focus here", SelectedDate);

    let ArrayOfCreateModals = [EventMainInfo, CreateSessionModal];
    return (
      <div id="largeCalendar" className="LargeCalendar-container">
        <FullCalendar
          defaultView="dayGridMonth"
          height={800}
          plugins={[dayGridPlugin, interactionPlugin]}
          //Custom Button for creating event
          customButtons={{
            NewEvent: {
              text: "New Event",
              click: this.ToggleCreateMode
            },
            Cancel: {
              text: "Cancel",
              click: this.ToggleCreateMode
            }
          }}
          //buttons that are displayed on header of calendar
          header={{
            left: "prev,next today",
            center: (() => {
              return isCreatingEvent ? "Add event date" : "title";
            })(),
            right: (() => {
              return isCreatingEvent ? "CreateEvent Cancel" : "NewEvent";
            })()
          }}
          //giving the calendar the event data
          events={Events}
          //when user clicks on event this function runs
          eventClick={this.handleEventClick}
          selectable={isCreatingEvent ? true : false}
          select={this.handleSelectedDates}
          eventLimit={3}
        />

        <ChainedCreateModal
          ref={this.ChainedModalElement}
          modalList={ArrayOfCreateModals}
          SelectedDate={SelectedDate}
        />
      </div>
    );
  }
}

export default LargeCalendar;
