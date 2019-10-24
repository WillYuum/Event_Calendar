package Models

type Event struct {
	Id        int16
	EventName string `json:"EventName"`
	HostName  string `json:"HostName"`
}
