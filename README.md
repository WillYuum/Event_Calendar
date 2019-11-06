# Event_Calendar
An Assessment that was assigned by Decentra Tech which include me building a event calender system

## __Tutorials that was used__
[Boiler Plate Backend Golang](https://ednsquare.com/story/golang-boilerplate-with-fully-managed-versions-to-kick-start-golang-development------M6fVBF)

[Creating CRUD with Traversy Media](https://www.youtube.com/watch?v=SonwZ6MF5BE)

[GitHub Repo for CRUD Golang](https://github.com/bradtraversy/go_restapi)

[Working with Couchdb (TRAVERSY MEDIA)](https://www.youtube.com/watch?v=R6LUMXrAoCE)

## Event Doc:
```JSON
        EventId int
        Eventname text
        HostName:{
            HostId int
            HostName text
            HostFamilyName text
            HostContactNumber int
        }
        Location text
        Schedule:{
            EventScheduleId int
            EventRosters: {
                EventRosterId int
                RosterTitle text
                RosterTime int
                Description int
            } 
        }
        EventDescription
        EventImages: {
            EventImagesId int
            Images:{
                ImageId int
                ImageSrc text
            }
        }
```

"Schedule": {
    "EventScheduleId": "a420283a4d66f43bba29159c0b0007eb",
    "EventRosters": [{
      "EventRosterId": "o18ig09vczg8rjq9r5",
      "RosterTitle": "Pizza",
      "RosterTime": "12",
      "Description": "The Wildest pizza you'll ever eat",
    },
    {
      "EventRosterId": "o18ig09vczg8rjq9r5",
      "RosterTitle": "Pizza",
      "RosterTime": "12",
      "Description": "The Wildest pizza you'll ever eat",
    }
  }],