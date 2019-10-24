package main

import (
	route "backend/routes"
	"log"
	"net/http"
)

func main() {
	route.InitEventeRoute()
	log.Fatal(http.ListenAndServe(":3000", nil))
}
