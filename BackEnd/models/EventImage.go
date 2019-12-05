package model

import (
	// "database/sql"
	"fmt"
	"log"
)

// EventImage structure
type EventImage struct {
	EventId int    `json:"EventId"`
	ImageId int    `json:"ImageId"`
	Image   []byte `json:"Image"`
}

//array to store EventImage data
type EventImages struct {
	AllImages []EventImage
}

//retrieving images by image id from database
func GetImagesByEventId(EventId int) EventImages {
	eventImages := EventImages{}

	sqlStmt := `SELECT "EventId", "ImageId", "Image"
	FROM public."EventImage" WHERE "EventId" = $1;`

	rows, err := db.Query(sqlStmt, EventId)
	if err != nil {
		log.Fatal(err)
	}

	//assigning the image's data to a specific key
	for rows.Next() {
		//creating an instance  of type EventImage
		eventImage := EventImage{}
		err := rows.Scan(
			&eventImage.EventId,
			&eventImage.ImageId,
			&eventImage.Image,
		)
		if err != nil {
			log.Fatal(err)
		}
		//adding all images data to array
		eventImages.AllImages = append(eventImages.AllImages, eventImage)
	}
	//returning the array of images data
	return eventImages
}

//upload image to event depending on Event id
func UploadImage(EventId int, ImageBytes []byte) {
	//query to insert data to EventImage table
	sqlStmt := `INSERT INTO public."EventImage"(
		"EventId", "Image")
		VALUES ($1, $2);`

	//execution of query with EventId and bytes of the image
	_, err := db.Exec(sqlStmt, EventId, ImageBytes)
	if err != nil {
		log.Fatal(err)
	} else {
		log.Println("saved image in db")
	}

}

//deleting image from specific event
func DeleteImage(ImageId int) {
	//query to delete image
	sqlStmt := `DELETE FROM public."EventImage"
	WHERE "ImageId" = $1;`

	//execution of query with ImageId
	_, err := db.Exec(sqlStmt, ImageId)
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Image got deleted")
	}
}
