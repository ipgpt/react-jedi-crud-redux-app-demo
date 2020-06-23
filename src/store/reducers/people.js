import {
  SET_PEOPLE,
  DELETE_PERSON,
  ADD_PERSON,
  EDIT_PERSON,
  CHANGE_PERSON_BELOVED_STATUS,
} from "../actions/people";

const initialState = {
  allPeople: [],
};

function people(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, allPeople: action.people };
    case DELETE_PERSON:
      return {
        ...state,
        allPeople: state.allPeople.filter((person) => person.id !== action.id),
      };
    case ADD_PERSON:
      return { ...state, allPeople: [...state.allPeople, action.person] };
    case EDIT_PERSON:
      return {
        ...state,
        allPeople: state.allPeople.map((person) =>
          person.id === action.updatedPerson.id ? action.updatedPerson : person
        ),
      };
    case CHANGE_PERSON_BELOVED_STATUS:
      return {
        ...state,
        allPeople: state.allPeople.map((person) => {
          return person.id === action.id
            ? { ...person, beloved: !person.beloved }
            : person;
        }),
      };

    default:
      return state;
  }
}

export default people;
