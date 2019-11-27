package model

import (
	"backend/database"
	"log"
	"time"
)

type Going struct {
	GoingId       int `json: "GoingId"`
	User_UserId   int `json: "User_UserId"`
	Event_EventId int `json: "Event_EventId"`
}

type AttendingEvent struct {
	EventID          int       `json:"EventId"`
	EventName        string    `json:"EventName"`
	EventDescription string    `json:"EventDescription"`
	HostName         string    `json:"HostName"`
	EventStartDate   time.Time `json:"EventStartDate"`
	EventEndDate     time.Time `json: "EventEndDate"`
}

type AttendingEvents struct {
	AttendingEvents []AttendingEvent
}

var db = database.InitDB()

func GetAttendingEvents(id int) AttendingEvents {
	events := AttendingEvents{}

	sqlStmt := `Select "EventId", "EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate" FROM public."Going" Join public."Event" On ("EventId" = "Event_EventId") WHERE "User_UserId" = $1`
	rows, err := db.Query(sqlStmt, id)
	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		event := AttendingEvent{}
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

		events.AttendingEvents = append(events.AttendingEvents, event)
	}

	return events
}
