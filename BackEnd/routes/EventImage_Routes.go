package route


import (
	controller "backend/controllers"
)


func InitEventImageRoutes(){
	//gets images from specific event by id route
	Mux.HandleFunc("/getimages", controller.HandleGetImagesByEventId).Methods("GET")
	//upload image route
	Mux.HandleFunc("/uploadimage", controller.HandleUploadImage).Methods("POST")
	//delete image route
	Mux.HandleFunc("/deleteimage", controller.HandleDeleteImage).Methods("DELETE")

}