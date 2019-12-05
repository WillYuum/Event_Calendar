package model

import (
	"database/sql"
	"fmt"
	"log"
)

//Session Structure
type Session struct {
	EventId            int    `json: "EventId"`
	SessionId          int    `json: "SessionId"`
	SessionTitle       string `json: "SessionTitle"`
	SessionDescription string `json: "SessionDescription"`
	RepresentorName    string `json: "RepresentorName"`
	SessionStart       string `json: "SessionStart"`
	SessionEnd         string `json: "SessionEnd"`
}

//array to store Session data
type Sessions struct {
	AllSessions []Session
}

//retrieving session data depending on the event id
func GetSessions(EventId int) Sessions {
	sessions := Sessions{}

	//query all the rows from Sessions table
	sqlStmt := `SELECT "EventId", "SessionId", "SessionTitle", "SessionDescription", "RepresentorName", "SessionStart", "SessionEnd"
	FROM public."Session" WHERE "Session"."EventId" = $1`

	rows, err := db.Query(sqlStmt, EventId)
	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		session := Session{}
		err := rows.Scan(
			&session.EventId,
			&session.SessionId,
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

//creating a session depending on the Session struct
func CreateSession(session Session) {

	sqlStmt := `INSERT INTO public."Session"(
		"EventId", "SessionTitle", "SessionDescription", "RepresentorName", "SessionStart", "SessionEnd")
		VALUES ($1, $2, $3, $4, $5, $6);`

	_, err := db.Query(sqlStmt, session.EventId, session.SessionTitle, session.SessionDescription, session.RepresentorName, session.SessionStart, session.SessionEnd)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Created a session")
	}

}

//function that returns null if input is empty else returns the value
//This is used for coalesce while updating the data in session
func NewNullString(s string) sql.NullString {
	if len(s) == 0 {
		return sql.NullString{}
	}
	return sql.NullString{
		String: s,
		Valid:  true,
	}
}

//Update the session depending on the Session struct and the session id
func UpdateSession(session Session) {

	//query to update the session and check if there's null string
	sqlStmt := `UPDATE public."Session"
	SET "SessionTitle"=coalesce($2,"Session"."SessionTitle"),
	"SessionDescription"=coalesce($3,"Session"."SessionDescription"),
	"RepresentorName"=coalesce($4,"Session"."RepresentorName"),
	"SessionStart"=$5,
	"SessionEnd"=$6

	WHERE "SessionId"= $1`

	//executing the query and checking for null string using "NewNullString"
	_, err := db.Exec(sqlStmt, session.SessionId, NewNullString(session.SessionTitle), NewNullString(session.SessionDescription), NewNullString(session.RepresentorName), session.SessionStart, session.SessionEnd)

	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("session got updated")
	}
}

//delete session depending on session id
func DeleteSession(SessionId int) {
	sqlstmt := `DELETE FROM public."Session"
	WHERE "Session"."SessionId" = $1`

	_, err := db.Query(sqlstmt, SessionId)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Session got deleted")
	}

	//! check this with Mohamad for a specific way of deleting session
	// DELETE FROM public."Session"
	// 	WHERE "Session"."SessionId" = 6
	// 	AND "EventId" = 1
}
