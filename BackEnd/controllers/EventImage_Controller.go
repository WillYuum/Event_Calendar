package controller

import (
	models "backend/models"
	utils "backend/utils"
	"fmt"
	"encoding/json"
	"net/http"
	"io/ioutil"
	"log"
	"strconv"
)

func HandleGetImagesByEventId(w http.ResponseWriter, r *http.Request){
	utils.EnableCors(&w)

	id, _ := r.URL.Query()["EventId"]
	EventId, _ := strconv.Atoi(id[0])

	var eventImages models.EventImages
	eventImages = models.GetImagesByEventId(EventId)

	data, err := json.Marshal(eventImages.AllImages)
	if err != nil {
		log.Fatal(err)
	}
	
	fmt.Fprintf(w, "%s", data)
}


func HandleUploadImage(w http.ResponseWriter, r *http.Request){
	utils.EnableCors(&w)

	id, _ := r.URL.Query()["EventId"]
	EventId, _ := strconv.Atoi(id[0])

	//retrieving the image from the form
	file, _, err := r.FormFile("Image")
	if err != nil {
		log.Fatal(err)
	}
	
	fileBytes, err := ioutil.ReadAll(file)
    if err != nil {
        fmt.Println(err)
	}
	
	models.UploadImage(EventId, fileBytes)
}

func HandleDeleteImage(w http.ResponseWriter, r *http.Request){
	utils.EnableCors(&w)

	id, _ := r.URL.Query()["ImageId"]
	ImageId, _ := strconv.Atoi(id[0])

	models.DeleteImage(ImageId)

}