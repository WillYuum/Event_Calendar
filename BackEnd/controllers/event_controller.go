package event

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	(*w).Header().Set("Content-Type", "application/json; charset=UTF-8")
}

func GetEvent(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	data, err := http.Get("http://127.0.0.1:5984/events_calendar/_all_docs?include_docs=true")
	if err != nil {
		log.Fatal(err)
	}
	res, err := ioutil.ReadAll(data.Body)
	data.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(data)
	fmt.Fprintf(w, "%s", res)
}

func CreateEvent(w http.ResponseWriter, r *http.Request) {

}
