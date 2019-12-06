package model

import (
	"fmt"
	"log"
	"time"
)

//Event Structure
type Event struct {
	EventID          int       `json:"EventId"`
	EventName        string    `json:"EventName"`
	EventDescription string    `json:"EventDescription"`
	HostName         string    `json:"HostName"`
	EventStartDate   time.Time `json:"EventStartDate"`
	EventEndDate     time.Time `json: "EventEndDate"`
}


//array to store Event data
type Events struct {
	AllEvents []Event
}

//retrieve all events from database
func GetEvents() Events {
	//initialized var with array empty array of type Events
	events := Events{}

	//query all the rows from Event table
	sqlStmt := `SELECT "Event"."EventId", "EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate"
	FROM public."Event"`
	rows, err := db.Query(sqlStmt)
	if err != nil {
		log.Fatal(err)
	}

	//looping through the event data
	for rows.Next() {
		event := Event{}
		err := rows.Scan(
			&event.EventID,
			&event.EventName,
			&event.EventDescription,
			&event.HostName,
			&event.EventStartDate,
			&event.EventEndDate,
		)
		if err != nil {
			log.Fatal(err)
		}

		//adding the row to the  allEvent array
		events.AllEvents = append(events.AllEvents, event)
	}
	//returning the array with all rows
	return events
}

func GetEventById(EventId int)Event{
	//query to get event depending on  event id
	sqlStmt := `SELECT "EventId", "EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate"
	FROM public."Event" WHERE "EventId" = $1`

	//retrieving data from database
	row := db.QueryRow(sqlStmt, EventId)

	//creating structure for variable and adding the row value to it
	event := Event{}
	row.Scan(
		&event.EventID,
			&event.EventName,
			&event.EventDescription,
			&event.HostName,
			&event.EventStartDate,
			&event.EventEndDate,
	)

	return event
}

func CreateEvent(EventName string, EventDescription string, HostName string, EventStartDate time.Time, EventEndDate time.Time) {

	sqlStmt := `INSERT INTO public."Event"(
		"EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate")
		VALUES ($1, $2, $3, $4, $5);`

	_, err := db.Query(sqlStmt, EventName, EventDescription, HostName, EventStartDate, EventEndDate)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Event got created")
	}

}
