package eventroute

import (
	controller "backend/controllers"

	"github.com/gorilla/mux"
)

var Mux = mux.NewRouter()

func InitEventRoute() {
	//Listing All events in db
	Mux.HandleFunc("/events", controller.GetEvent).Methods("GET")
	//listing Events that a user will be attending
	Mux.HandleFunc("/attendingevents/", controller.GetAttendingEvent).Methods("GET")

	Mux.HandleFunc("/registertoevent", controller.AttendEvent).Methods("POST")
}
