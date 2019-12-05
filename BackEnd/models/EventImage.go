package model

import (
	// "database/sql"
	"fmt"
	"log"
)

type EventImage struct{
	EventId int `json:"EventId"`
	ImageId int `json:"ImageId"`
	Image []byte `json:"Image"`
}

type EventImages struct{
	AllImages []EventImage
}

func GetImagesByEventId(EventId int) EventImages{
	 eventImages := EventImages{}

	sqlStmt := `SELECT "EventId", "ImageId", "Image"
	FROM public."EventImage" WHERE "EventId" = $1;`

	rows, err := db.Query(sqlStmt, EventId)
	if err != nil {
		log.Fatal(err)
	}

	for rows.Next(){
		eventImage := EventImage{}
		err := rows.Scan(
			&eventImage.EventId,
			&eventImage.ImageId,
			&eventImage.Image,
		)
		if err != nil {
			log.Fatal(err)
		}
		eventImages.AllImages = append(eventImages.AllImages, eventImage)
	}

	return eventImages
}

func UploadImage(EventId int, ImageBytes []byte){
	
	sqlStmt := `INSERT INTO public."EventImage"(
		"EventId", "Image")
		VALUES ($1, $2);`

		_, err := db.Exec(sqlStmt, EventId, ImageBytes)
		if err != nil {
			log.Fatal(err)
		}else{
			log.Println("saved image in db")
		}
	
}


func DeleteImage(ImageId int){
	sqlStmt := `DELETE FROM public."EventImage"
	WHERE "ImageId" = $1;`

	_, err := db.Exec(sqlStmt, ImageId)
	if err != nil{
		log.Fatal(err)
	}else{
		fmt.Println("Image got deleted")
	}
} 