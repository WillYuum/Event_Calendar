package route

import (
	controller "backend/controllers"

)



func InitEventRoute() {
	//Listing All events in db
	Mux.HandleFunc("/events", controller.GetEvent).Methods("GET")
	
}
