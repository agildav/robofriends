import robots from "./robots";
import { CHANGE_SEARCH_FIELD } from "./constants.js";

const initialState = {
  robots,
  searchfield: ""
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
};
