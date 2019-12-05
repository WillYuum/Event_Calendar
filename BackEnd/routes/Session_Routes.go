package route

import (
	controller "backend/controllers"

	"github.com/gorilla/mux"
)

//Mux helps in handling controller functions + adding the request methods
var Mux = mux.NewRouter()

func InitSessionRoutes() {
	//List all sessions for a specific event
	Mux.HandleFunc("/sessions", controller.HandleGetSessions).Methods("Get")
	//add session to specific event
	Mux.HandleFunc("/addsession", controller.HandleCreateSession).Methods("Post")
	//update specific session
	Mux.HandleFunc("/updatesession", controller.HandleUpdateSession).Methods("Patch")
	//delete specific event
	Mux.HandleFunc("/deletesession", controller.HandleDeleteSession).Methods("Delete")

}
