package event

import (
	models "backend/models"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

//list all events in data base
func GetEvent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	//giving type to events var
	var events models.Events
	//adding the data fetched from database and added to events
	events = models.GetEvents()

	// changing the array of strings to json
	data, err := json.Marshal(events.AllEvents)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintf(w, "%s", data)
}

//List all Events that the user will attend
func GetAttendingEvent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	//requesting value from params of key 'id'
	id, ok := r.URL.Query()["id"]

	//checking if id exists
	if !ok || len(id[0]) < 1 {
		log.Println("Url Param 'key' is missing")
		return
	}

	// Query()["id"] will return an array of items,
	userID, _ := strconv.Atoi(id[0])
	var events models.AttendingEvents

	events = models.GetAttendingEvents(userID)

	data, err := json.Marshal(events.AttendingEvents)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintf(w, "%s", data)
}

type AttendEventInfo struct {
	UserId  int `json: "UserId"`
	EventId int `json: "EventId"`
}

func AttendEvent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Print("data", data)

	var attendEventInfo AttendEventInfo

	err = json.Unmarshal(data, &attendEventInfo)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print(attendEventInfo)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	(*w).Header().Set("Content-Type", "application/json; charset=UTF-8")
}
