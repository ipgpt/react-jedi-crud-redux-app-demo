export const SET_PLANETS = 'SET_PLANETS'
export const DELETE_PLANET = 'DELETE_PLANET'
export const ADD_PLANET = 'ADD_PLANET'
export const EDIT_PLANET = 'EDIT_PLANET'
export const CHANGE_PLANET_BELOVED_STATUS = 'CHANGE_PLANET_BELOVED_STATUS'

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function addPlanet(planet) {
  return { type: ADD_PLANET, planet };
}

export function editPlanet(updatedPlanet) {
  return { type: EDIT_PLANET, updatedPlanet };
}

export function changePlanetBelovedStatus(id) {
  return { type: CHANGE_PLANET_BELOVED_STATUS, id};
}
