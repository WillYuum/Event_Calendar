package route

import (
	controller "backend/controllers"
)

func InitEventRoute() {
	//Listing All events in db
	Mux.HandleFunc("/getevents", controller.HandleGetEvent).Methods("GET")
	//return all event after today's current date
	Mux.HandleFunc("/api/latestevents", controller.HandleGetLatestEvents).Methods("GET")
	//return a specific event by its id
	Mux.HandleFunc("/event", controller.HandleGetEventById).Methods("GET")
	//createEvent
	Mux.HandleFunc("/api/createevent", controller.HandleCreateEvent).Methods("POST")
}
