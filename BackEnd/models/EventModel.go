package Models

import (
	"backend/database"
	"log"
)

type Event struct {
	EventID   int    `json:"EventId"`
	EventName string `json:"EventName"`
}
type Events struct {
	AllEvents []Event
}

func GetEvents() Events {
	// getting db functionalities
	var db = database.InitDB()

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
