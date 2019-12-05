package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "develwer"
	dbname   = "Events_DB"
)

func InitDB() *sql.DB {

	// added configuration to db connection
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	//connnecting to db
	MainDb, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}
	// defer MainDb.Close()

	err = MainDb.Ping()
	if err != nil {
		panic(err)
		log.Fatal(err)
	}

	fmt.Println("Connected to database")
	return MainDb
}
