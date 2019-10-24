package eventroute

import (
	controller "backend/controllers"
	"net/http"
)

func InitEventeRoute() {
	http.HandleFunc("/events", controller.GetEvent)
}
