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

	//retrieving the event id and changing it to integer
	param, _ := r.URL.Query()["eventid"]
	EventID, _ := strconv.Atoi(param[0])

	//creating a variable session with type struct of Session
	var sessions models.Sessions

	//getting sessions from database depending on event id
	sessions = models.GetSessions(EventID)

	//encodes the recieved data from database to json
	data, err := json.Marshal(sessions.AllSessions)
	if err != nil {
		log.Fatal(err)
	}
	//sending the session data to the client side
	fmt.Fprintf(w, "%s", data)
}

//Creates a session for a specefic event
func HandleCreateSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//creating a variable session with type struct of Session
	var session models.Session

	//retrieve eventid value and assigned to a var as int
	id, _ := r.URL.Query()["eventid"]
	session.EventId, _ = strconv.Atoi(id[0])

	//retreived all Form values needed for session from client side
	session.SessionTitle = r.FormValue("SessionTitle")
	session.SessionDescription = r.FormValue("SessionDescription")
	session.RepresentorName = r.FormValue("RepresentorName")
	session.SessionStart = r.FormValue("SessionStart")
	session.SessionEnd = r.FormValue("SessionEnd")

	//creating session depending on session data retrieved from client side
	models.CreateSession(session)

}

func HandleUpdateSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//creating a variable session with type struct of Session
	var session models.Session

	//retrieving the session id from client side and converting it integer
	id, _ := r.URL.Query()["sessionid"]
	session.SessionId, _ = strconv.Atoi(id[0])

	//retreived all Form values needed for session
	session.SessionTitle = r.FormValue("SessionTitle")
	session.RepresentorName = r.FormValue("RepresentorName")
	session.SessionDescription = r.FormValue("SessionDescription")
	session.SessionStart = r.FormValue("SessionStart")
	session.SessionEnd = r.FormValue("SessionEnd")

	//updating the session depending on session data retrieved from client side
	models.UpdateSession(session)

}

//delete a session by SessionId
func HandleDeleteSession(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//retrieve eventid value and assigned to a var as int
	id, _ := r.URL.Query()["sessionid"]
	sessionId, _ := strconv.Atoi(id[0])

	//deleting the session with specific id
	models.DeleteSession(sessionId)
}
