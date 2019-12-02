package controller

import (
	models "backend/models"
	utils "backend/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

func HandleGetSessions(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	param, _ := r.URL.Query()["eventid"]
	EventID, _ := strconv.Atoi(param[0])

	var sessions models.Sessions
	sessions = models.GetSessions(EventID)

	data, err := json.Marshal(sessions.AllSessions)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Fprintf(w, "%s", data)
}

//Creates a session for a specefic event
func HandleCreateSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)
	var session models.Session

	//retrieve eventid value and assigned to a var as int
	id, _ := r.URL.Query()["eventid"]
	session.EventId, _ = strconv.Atoi(id[0])

	//retreived all Form values needed for session
	session.SessionTitle = r.FormValue("SessionTitle")
	session.SessionDescription = r.FormValue("SessionDescription")
	session.RepresentorName = r.FormValue("RepresentorName")
	session.SessionStart = r.FormValue("SessionStart")
	session.SessionEnd = r.FormValue("SessionEnd")
	fmt.Println(session)
	models.CreateSession(session)

}

func HandleUpdateSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	var session models.Session

	id, _ := r.URL.Query()["sessionid"]
	session.SessionId, _ = strconv.Atoi(id[0])

	//retreived all Form values needed for session
	session.SessionTitle = r.FormValue("SessionTitle")
	session.RepresentorName = r.FormValue("RepresentorName")
	session.SessionDescription = r.FormValue("SessionDescription")
	session.SessionStart = r.FormValue("SessionStart")
	session.SessionEnd = r.FormValue("SessionEnd")

	// fmt.Println(session)
	models.UpdateSession(session)

}

//delete a session by SessionId
func HandleDeleteSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//retrieve eventid value and assigned to a var as int
	id, _ := r.URL.Query()["sessionid"]
	sessionId, _ := strconv.Atoi(id[0])

	models.DeleteSession(sessionId)
}
