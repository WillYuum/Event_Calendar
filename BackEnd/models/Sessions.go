package model

import (
	"time"
	"log"
	// "database/sql"
)

type Session struct{
	SessionID     int `json: "SessionID"`
	SessionTitle     string `json: "SessionTitle"`
	SessionDescription     string  `json: "SessionDescription"`
	RepresentorName     string  `json: "RepresentorName"`
	SessionStart     time.Time `json: "SessionStart"`
	SessionEnd     time.Time `json: "SessionEnd"`
}

type Sessions struct {
	AllSessions []Session
}


func GetSessions(EventId int) Sessions{ 
	sessions := Sessions{}

	//query all the rows from Sessions table
	sqlStmt := `SELECT "SessionId", "SessionTitle", "SessionDescription", "RepresentorName", "SessionStart", "SessionEnd"
	FROM public."Session" WHERE "EventId" = $1`

	rows, err := db.Query(sqlStmt, EventId)
	if err != nil{
		log.Fatal(err)
	}

	for rows.Next(){
		session := Session{}
		err := rows.Scan(
			&session.SessionID,
			&session.SessionTitle,
			&session.SessionDescription,
			&session.RepresentorName,
			&session.SessionStart,
			&session.SessionEnd,
		)
		if err != nil {
			log.Fatal(err)
		}

		sessions.AllSessions = append(sessions.AllSessions, session)
	}

	return sessions
}