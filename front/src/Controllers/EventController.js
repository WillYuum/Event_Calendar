import React from "react";
import {render} from "./Controller.js"
import TodoList from "../Models/Event.js";


const fetchAllEvents = () =>{
    return () =>{
        return TodoList.getAllEvents
    }
}


export const ShowEventScree