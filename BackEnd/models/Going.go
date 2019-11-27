package model

import (
	"backend/database"
	"fmt"
	"log"
	"time"
)

type AttendingEvent struct {
	GoingId          int       `json: "GoingId"`
	User_UserId      int       `json: "User_UserId"`
	EventID          int       `json:"EventId"`
	EventName        string    `json:"EventName"`
	EventDescription string    `json:"EventDescription"`
	HostName         string    `json:"HostName"`
	EventStartDate   time.Time `json:"EventStartDate"`
	EventEndDate     time.Time `json: "EventEndDate"`
}

// type AttendingEvent struct {
// 	EventID          int       `json:"EventId"`
// 	EventName        string    `json:"EventName"`
// 	EventDescription string    `json:"EventDescription"`
// 	HostName         string    `json:"HostName"`
// 	EventStartDate   time.Time `json:"EventStartDate"`
// 	EventEndDate     time.Time `json: "EventEndDate"`
// }

type AttendingEvents struct {
	AttendingEvents []AttendingEvent
}

var db = database.InitDB()

func GetAttendingEvents(id int) AttendingEvents {
	events := AttendingEvents{}

	//retrieving Events that the User will be attending
	sqlStmt := `Select "GoingId", "User_UserId", "EventId", "EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate" FROM public."Going" Join public."Event" On ("EventId" = "Event_EventId") WHERE "User_UserId" = $1`
	rows, err := db.Query(sqlStmt, id)
	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		event := AttendingEvent{}
		err := rows.Scan(
			&event.GoingId,
			&event.User_UserId,
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

func CreateAttendingEventsFile(UserId int, EventId int) {
	sqlStmt := `INSERT INTO public."Going"(
		"User_UserId", "Event_EventId")
		VALUES ( $1, $2);`

	result, err := db.Query(sqlStmt, UserId, EventId)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Saved Event to attending events")
	}

	fmt.Println("result", result)
}
