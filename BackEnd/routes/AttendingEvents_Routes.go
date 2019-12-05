package route

import (
	controller "backend/controllers"
)

func InitAttendingEventRoutes() {
	//listing Events that a user will be attending
	Mux.HandleFunc("/attendingevents", controller.HandleGetAttendingEvent).Methods("GET")

	//Adds the selected event to attending list
	Mux.HandleFunc("/registertoevent", controller.HandleAttendEvent).Methods("POST")

	//deletes the event from the attending list
	Mux.HandleFunc("/deleteAttendingEvent", controller.HandleDeleteAttendingEvent).Methods("POST")
}
