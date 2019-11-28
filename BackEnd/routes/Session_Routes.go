package route

import (
	controller "backend/controllers"

	"github.com/gorilla/mux"
)

var Mux = mux.NewRouter()

func InitSessionRoutes(){
	//List all sessions for a specific event
	//api params: "EventId"
	Mux.HandleFunc("/sessions", controller.GetSessions).Methods("Get")
}
