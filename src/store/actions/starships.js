export const SET_STARSHIPS = "SET_STARSHIPS";
export const DELETE_STARSHIP = "DELETE_STARSHIP";
export const ADD_STARSHIP = "ADD_STARSHIP";
export const EDIT_STARSHIP = "EDIT_STARSHIP";
export const CHANGE_STARSHIP_BELOVED_STATUS = "CHANGE_STARSHIP_BELOVED_STATUS";

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(id) {
  return { type: DELETE_STARSHIP, id };
}

export function addStarship(starship) {
  return { type: ADD_STARSHIP, starship };
}

export function editStarship(updatedStarship) {
  return { type: EDIT_STARSHIP, updatedStarship };
}

export function changeStarshipBelovedStatus(id) {
  return { type: CHANGE_STARSHIP_BELOVED_STATUS, id };
}
