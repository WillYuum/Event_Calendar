package event

import (
	model "backend/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

func GetEvent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	//giving type to events var
	var events model.Events
	//adding the data fetched from database and added to events
	events = model.GetEvents()

	// changing the array of strings to json
	data, err := json.Marshal(events.AllEvents)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Fprintf(w, "%s", data)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	(*w).Header().Set("Content-Type", "application/json; charset=UTF-8")
}
