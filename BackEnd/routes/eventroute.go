package eventroute

import (
	controller "backend/controllers"

	"github.com/gorilla/mux"
)

var Mux = mux.NewRouter()

func InitEventRoute() {
	Mux.HandleFunc("/events", controller.GetEvent).Methods("GET")
}
