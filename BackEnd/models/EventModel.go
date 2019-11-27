package model

import (
	"log"
	"time"
)

type Event struct {
	EventID          int       `json:"EventId"`
	EventName        string    `json:"EventName"`
	EventDescription string    `json:"EventDescription"`
	HostName         string    `json:"HostName"`
	EventStartDate   time.Time `json:"EventStartDate"`
	EventEndDate     time.Time `json: "EventEndDate"`
}
type Events struct {
	AllEvents []Event
}

// initiating + getting db functionalities
// var db = database.InitDB()

func GetEvents() Events {

	events := Events{}

	//query all the rows from Event table
	sqlStmt := `SELECT * FROM public."Event"`
	rows, err := db.Query(sqlStmt)
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	//looping through the rows in the Events
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

func CreateEvent() {

}
