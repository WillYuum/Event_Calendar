/**
 *
 *
 * @class EventRecord
 */
class EventRecord {
  EventId = null;
  EventName = "";
  EventDescription = "";
  EventStartDate = null;
  EventEndDate = null;
}

/**
 *
 *
 * @export
 * @class Event
 * @extends {EventRecord}
 */
export default class Event extends EventRecord {
  async getAllEvents() {
    const request = await fetch("http://192.168.0.155:3001/getevents");
    const result = await request.json();
    console.log(result);
    return result;
  }
}
