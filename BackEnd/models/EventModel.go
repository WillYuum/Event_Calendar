package model

import (
	"fmt"
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


func CreateEvent(EventName string, EventDescription string, HostName string, EventStartDate time.Time, EventEndDate time.Time) {

	sqlStmt := `INSERT INTO public."Event"(
		"EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate")
		VALUES ($1, $2, $3, $4, $5);`
	
	_, err := db.Query(sqlStmt, EventName, EventDescription, HostName, EventStartDate, EventEndDate )
	if err != nil{
		log.Fatal(err)
	}else{
		fmt.Println("Event got created")
	}

}
