export const SET_PEOPLE = 'SET_PEOPLE'
export const DELETE_PERSON = 'DELETE_PERSON'
export const ADD_PERSON = 'ADD_PERSON'
export const EDIT_PERSON = 'EDIT_PERSON'
export const CHANGE_PERSON_BELOVED_STATUS = 'CHANGE_PERSON_BELOVED_STATUS'

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function deletePerson(id) {
  return { type: DELETE_PERSON, id };
}

export function addPerson(person) {
  return { type: ADD_PERSON, person };
}

export function editPerson(updatedPerson) {
  return { type: EDIT_PERSON, updatedPerson };
}

export function changePersonBelovedStatus(id) {
  return { type: CHANGE_PERSON_BELOVED_STATUS, id};
}
