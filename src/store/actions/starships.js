export const SET_STARSHIPS = 'SET_STARSHIPS'
export const DELETE_STARSHIP = 'DELETE_STARSHIP'
export const CHANGE_STARSHIP_BELOVED_STATUS = 'CHANGE_STARSHIP_BELOVED_STATUS'

export function setStarships(starships) {
  return { type: SET_STARSHIPS, starships };
}

export function deleteStarship(id) {
  return { type: DELETE_STARSHIP, id };
}

export function changeStarshipBelovedStatus(id) {
  return { type: CHANGE_STARSHIP_BELOVED_STATUS, id};
}
