import { BACKEND_URL } from "react-native-dotenv";

/**
 *
 *
 * @class EventRecord - Event object structure
 */
class EventRecord {
  EventId = null;
  EventName = "";
  EventDescription = "";
  EventStartDate = null;
  EventEndDate = null;
}

/**
 * @exports Event
 * @class Event
 * @extends {EventRecord}
 */
export default class Event extends EventRecord {
  /**
   * @function getAllEvents - retrieves all events from database
   * @returns {array} - eventsInfo
   * @memberof Event
   */
  async getAllEvents() {
    const request = await fetch(`${BACKEND_URL}/api/latestevents`);
    const result = await request.json();
    return result;
  }

  async getEventImages(){
    
  }
}
