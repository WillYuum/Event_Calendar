package controller

import (
	models "backend/models"
	utils "backend/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

//list all events in data base
func HandleGetEvent(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//giving type to events var
	var events models.Events
	//adding the data fetched from database and added to events
	events = models.GetEvents()

	// changing the array of strings to json
	data, err := json.Marshal(events.AllEvents)
	if err != nil {
		log.Fatal(err)
	}

	//sending the events data to the client side
	fmt.Fprintf(w, "%s", data)
}

func HandleGetEventById(w http.ResponseWriter, r *http.Request){
	utils.EnableCors(&w)


	var event models.Event

	 event = models.GetEventById(1)

	data, err := json.Marshal(event)
	if err != nil {
		log.Fatal(err)
	}

	// //sending the events data to the client side
	fmt.Fprintf(w, "%s", data)
}