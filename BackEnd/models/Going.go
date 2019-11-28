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

type AttendingEvents struct {
	AttendingEvents []AttendingEvent
}

var db = database.InitDB()

func GetAttendingEvents(UserId int) AttendingEvents {
	events := AttendingEvents{}
	//retrieving Events that the User will be attending
	sqlStmt := `Select "GoingId", "User_UserId", "EventId", "EventName", "EventDescription", "HostName", "EventStartDate", "EventEndDate" FROM public."Going" Join public."Event" On ("EventId" = "Event_EventId") WHERE "User_UserId" = $1`
	rows, err := db.Query(sqlStmt, UserId)
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

//This will Add The Event to the attending list for the user
func AddEventToAttendList(UserId string, EventId string) {

	//Adds Event that the user will be attending
	sqlStmt := `INSERT INTO public."Going"(
		"User_UserId", "Event_EventId")
		VALUES ( $1, $2);`

	//running the query
	 _, err := db.Query(sqlStmt, UserId, EventId)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Saved Event to attending events")
	}
}


func DeleteEventFromAttendList(GoingId string){

	sqlStmt := `DELETE FROM public."Going"
	WHERE "GoingId" = ($1);`

	_, err := db.Query(sqlStmt, GoingId)
	if err != nil {
		log.Fatal(err)
	}else{
		fmt.Println("Event got deleted")
	}
}