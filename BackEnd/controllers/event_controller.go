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
func GetEvent(w http.ResponseWriter, r *http.Request) {
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

	fmt.Fprintf(w, "%s", data)
}