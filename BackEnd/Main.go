package main

import (
	DB "backend/database"
	route "backend/routes"
	"log"
	"net/http"
)

func main() {
	DB.InitDB()
	route.InitEventRoute()
	route.InitSessionRoutes()
	route.InitAttendingEventRoutes()
	log.Fatal(http.ListenAndServe(":3000", route.Mux))
}
