package controller

import (
	models "backend/models"
	utils "backend/utils"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
)

func HandleGetImagesByEventId(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//retrieving the event id from client side and converting it integer
	id, _ := r.URL.Query()["EventId"]
	EventId, _ := strconv.Atoi(id[0])

	//creating a variable eventImages with type struct of EventImages
	var eventImages models.EventImages
	eventImages = models.GetImagesByEventId(EventId)

	//encodes the recieved data from database to json
	data, err := json.Marshal(eventImages.AllImages)
	if err != nil {
		log.Fatal(err)
	}

	//sending the event image data to the client side
	fmt.Fprintf(w, "%s", data)
}

func HandleUploadImage(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//retrieve eventid value and assigned to a var as int
	id, _ := r.URL.Query()["EventId"]
	EventId, _ := strconv.Atoi(id[0])

	//retrieving the image from the form
	file, _, err := r.FormFile("Image")
	if err != nil {
		log.Fatal(err)
	}

	//outputing the file data to base64 data
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}

	//uploading function that uploads image using event id and the bytes for the image
	models.UploadImage(EventId, fileBytes)
}

func HandleDeleteImage(w http.ResponseWriter, r *http.Request) {
	utils.EnableCors(&w)

	//retrieve Image id value and assigned to a var as int
	id, _ := r.URL.Query()["ImageId"]
	ImageId, _ := strconv.Atoi(id[0])

	//deleting function that image depending on image id
	models.DeleteImage(ImageId)

}
