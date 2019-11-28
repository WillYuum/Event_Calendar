package event

import (
	models "backend/models"
	utils "backend/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)


//List all Events that the user will attend
func GetAttendingEvent(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

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
	utils.EnableCors(&w)

	UserId := r.FormValue("UserId")
	EventId := r.FormValue("EventId")

	fmt.Println(UserId)
	fmt.Println(EventId)

	models.AddEventToAttendList(UserId, EventId)

}


func DeleteEventFromAttendingList(w http.ResponseWriter, r *http.Request){
	utils.EnableCors(&w)
	
	GoingID := r.FormValue("id")

	models.DeleteEventFromAttendList(GoingID)

}