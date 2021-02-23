import { SET_MIN_SUM, RESET_MIN_SUM } from "../types";

export const minSumReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_MIN_SUM:
      return action.payload;
    case RESET_MIN_SUM:
      return 0;
    default:
      return state;
  }
};
