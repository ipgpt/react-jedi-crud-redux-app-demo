export const SET_PLANETS = 'SET_PLANETS'
export const DELETE_PLANET = 'DELETE_PLANET'
export const CHANGE_PLANET_BELOVED_STATUS = 'CHANGE_PLANET_BELOVED_STATUS'

export function setPlanet(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function changePlanetBelovedStatus(id) {
  return { type: CHANGE_PLANET_BELOVED_STATUS, id};
}
