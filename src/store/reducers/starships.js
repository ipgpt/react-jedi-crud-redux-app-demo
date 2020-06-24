import {
  SET_STARSHIPS,
  DELETE_STARSHIP,
  ADD_STARSHIP,
  EDIT_STARSHIP,
  CHANGE_STARSHIP_BELOVED_STATUS,
} from "../actions/starships";

const initialState = {
  allStarships: [],
};

function starships(state = initialState, action) {
  switch (action.type) {
    case SET_STARSHIPS:
      return { ...state, allStarships: action.starships };
    case DELETE_STARSHIP:
      return {
        ...state,
        allStarships: state.allStarships.filter(
          (starship) => starship.id !== action.id
        ),
      };
    case ADD_STARSHIP:
      return {
        ...state,
        allStarships: [...state.allStarships, action.starship],
      };
    case EDIT_STARSHIP:
      return {
        ...state,
        allStarships: state.allStarships.map((starship) =>
          starship.id === action.updatedStarship.id
            ? action.updatedStarship
            : starship
        ),
      };
    case CHANGE_STARSHIP_BELOVED_STATUS:
      return {
        ...state,
        allStarships: state.allStarships.map((starship) => {
          return starship.id === action.id
            ? { ...starship, beloved: !starship.beloved }
            : starship;
        }),
      };

    default:
      return state;
  }
}

export default starships;
