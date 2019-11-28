package controller

import(
	models "backend/models"
	utils "backend/utils"
	"fmt"
	"log"
	"encoding/json"
	"net/http"
	"strconv"
)

func GetSessions(w http.ResponseWriter, r *http.Request){
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