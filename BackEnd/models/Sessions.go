package model

import (
	"log"
	"fmt"
)

type Session struct{
	EventId int `json: "EventId"`
	SessionId     int `json: "SessionId"`
	SessionTitle     string `json: "SessionTitle"`
	SessionDescription     string  `json: "SessionDescription"`
	RepresentorName     string  `json: "RepresentorName"`
	SessionStart     string `json: "SessionStart"`
	SessionEnd     string `json: "SessionEnd"`
}

type Sessions struct {
	AllSessions []Session
}


func GetSessions(EventId int) Sessions{ 
	sessions := Sessions{}

	//query all the rows from Sessions table
	sqlStmt := `SELECT "EventId", "SessionId", "SessionTitle", "SessionDescription", "RepresentorName", "SessionStart", "SessionEnd"
	FROM public."Session" WHERE "Session"."EventId" = $1`

	rows, err := db.Query(sqlStmt, EventId)
	if err != nil{
		log.Fatal(err)
	}

	for rows.Next(){
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

func CreateSession(session Session){

	sqlStmt := `INSERT INTO public."Session"(
		"EventId", "SessionTitle", "SessionDescription", "RepresentorName", "SessionStart", "SessionEnd")
		VALUES ($1, $2, $3, $4, $5, $6);`


	_, err := db.Query(sqlStmt, session.EventId, session.SessionTitle, session.SessionDescription, session.RepresentorName, session.SessionStart, session.SessionEnd)
	if err != nil {
		log.Fatal(err)
	}else{
		fmt.Println("Created a session")
	}
	
}

func UpdateSession(session Session){
	sqlStmt := `UPDATE public."Session"
	SET "SessionTitle"=coalesce($2,"Session"."SessionTitle"),
	"SessionDescription"=coalesce($3,"Session"."SessionDescription"),
	"RepresentorName"=coalesce($4,"Session"."RepresentorName"),
	"SessionStart"=$5,
	"SessionEnd"=$6

	WHERE "SessionId"= $1`
	fmt.Println(session)
	 _,err := db.Exec(sqlStmt, session.SessionId, session.SessionTitle, session.SessionDescription, session.RepresentorName, session.SessionStart, session.SessionEnd)
	
	 if err != nil {
		log.Fatal(err)
	}else{
		fmt.Println("session got updated")
	}
}

func DeleteSession(SessionId int){
	sqlstmt := `DELETE FROM public."Session"
	WHERE "Session"."SessionId" = $1`
	
	_, err := db.Query(sqlstmt, SessionId)
	if err != nil {
		log.Fatal(err)
		}else{
			fmt.Println("Session got deleted")
		}

	//! check this with Mohamad for a specific way of deleting session
	// DELETE FROM public."Session"
	// 	WHERE "Session"."SessionId" = 6
	// 	AND "EventId" = 1
}

