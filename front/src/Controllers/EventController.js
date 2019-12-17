import React from "react";
import { render } from "./Controller.js";
import TodoList from "../Models/Event.js";

/**
 *
 */
export const fetchAllEvents = () => {
  const todoListController = new TodoList();
  return todoListController.getAllEvents();
};

// export const ShowEventScreen
