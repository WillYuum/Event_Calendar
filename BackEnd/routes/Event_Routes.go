package route

import (
	controller "backend/controllers"
)

func InitEventRoute() {
	//Listing All events in db
	Mux.HandleFunc("/getevents", controller.HandleGetEvent).Methods("GET")

	Mux.HandleFunc("/event", controller.HandleGetEventById).Methods("GET")
}
