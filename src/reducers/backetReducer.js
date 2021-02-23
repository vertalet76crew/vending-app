import { ADD_GOOD, RESET } from "../types";

export const backetReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GOOD:
      return [...state, action.payload];
    case RESET:
      return [];
    default:
      return state;
  }
};
