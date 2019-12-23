import React from "react";
import { render } from "./Controller.js";
import TodoList from "../Models/Event.js";

const todoListController = new TodoList();

/**
 * @function fetchLatestEvents - fetches the all upcoming events
 * @returns {Array} array of evnets info
 */
export const fetchLatestEvents = () => {
  return todoListController.getAllEvents();
};

/**
 * @function getEventById - fetches an event depending on the id
 * @param {EventId} EventId
 * @returns {Object} - Event Information
 */
export const getEventById = EventId => {
  return todoListController.getEventById(EventId);
};
