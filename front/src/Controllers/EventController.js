import React from "react";
import { render } from "./Controller.js";
import TodoList from "../Models/Event.js";

/**
 *
 */
export const fetchLatestEvents = () => {
  const todoListController = new TodoList();
  return todoListController.getAllEvents();
};

// export const ShowEventScreen
