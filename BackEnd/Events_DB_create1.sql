-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-11-26 13:54:28.544

-- tables
-- Table: Admin
CREATE TABLE Admin (
    AdminId int  NOT NULL,
    Email int  NOT NULL,
    Password int  NOT NULL,
    CONSTRAINT Admin_pk PRIMARY KEY (AdminId)
);

-- Table: CreatedEvents
CREATE TABLE CreatedEvents (
    Id int  NOT NULL,
    AdminId int  NOT NULL,
    EventId int  NOT NULL,
    CONSTRAINT CreatedEvents_pk PRIMARY KEY (Id)
);

-- Table: Event
CREATE TABLE Event (
    EventId int  NOT NULL,
    EventName Text  NOT NULL,
    EventDescription int  NOT NULL,
    HostName Text  NOT NULL,
    EventLocation text  NOT NULL,
    EventStart Date  NOT NULL,
    EventEnd Date  NOT NULL,
    CONSTRAINT Event_pk PRIMARY KEY (EventId)
);

-- Table: EventImage
CREATE TABLE EventImage (
    EventId int  NOT NULL,
    ImageId int  NOT NULL,
    Image bytea  NOT NULL,
    CONSTRAINT EventImage_pk PRIMARY KEY (ImageId)
);

-- Table: Going
CREATE TABLE Going (
    GoingId int  NOT NULL,
    UserId int  NOT NULL,
    EventId int  NOT NULL,
    CONSTRAINT Going_pk PRIMARY KEY (GoingId)
);

-- Table: Session
CREATE TABLE Session (
    EventId int  NOT NULL,
    SessionId int  NOT NULL,
    SessionTitle Text  NOT NULL,
    SessionDescription Text  NULL,
    RepresentorName text  NULL,
    SessionStart time  NOT NULL,
    SessionEnd time  NOT NULL,
    SessionImage bytea  NOT NULL,
    CONSTRAINT Session_pk PRIMARY KEY (SessionId)
);

-- Table: User
CREATE TABLE "User" (
    UserId int  NOT NULL,
    Email Text  NOT NULL,
    Password Text  NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (UserId)
);

-- foreign keys
-- Reference: AttendingEvents_Event (table: Going)
ALTER TABLE Going ADD CONSTRAINT AttendingEvents_Event
    FOREIGN KEY (EventId)
    REFERENCES Event (EventId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CreatedEvents_Admin (table: CreatedEvents)
ALTER TABLE CreatedEvents ADD CONSTRAINT CreatedEvents_Admin
    FOREIGN KEY (AdminId)
    REFERENCES Admin (AdminId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: CreatedEvents_Event (table: CreatedEvents)
ALTER TABLE CreatedEvents ADD CONSTRAINT CreatedEvents_Event
    FOREIGN KEY (EventId)
    REFERENCES Event (EventId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: EventImages_Events (table: EventImage)
ALTER TABLE EventImage ADD CONSTRAINT EventImages_Events
    FOREIGN KEY (EventId)
    REFERENCES Event (EventId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Session_Events (table: Session)
ALTER TABLE Session ADD CONSTRAINT Session_Events
    FOREIGN KEY (EventId)
    REFERENCES Event (EventId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Table_13_User (table: Going)
ALTER TABLE Going ADD CONSTRAINT Table_13_User
    FOREIGN KEY (UserId)
    REFERENCES "User" (UserId)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

