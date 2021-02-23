import { SUM_ERROR, SUM_VALUE_ERROR, RESET_ERROR } from "../types";

export const errorReducer = (
  state = { sumError: false, sumValueError: false },
  action
) => {
  switch (action.type) {
    case SUM_ERROR:
      return { ...state, sumError: true };
    case SUM_VALUE_ERROR:
      return { ...state, sumValueError: true };
    case RESET_ERROR:
      return { sumError: false, sumValueError: false };
    default:
      return state;
  }
};
