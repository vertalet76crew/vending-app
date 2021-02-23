import { SUM, ADD_SUM, RESET } from "../types";

export const sumReducer = (state = { sumValue: "", added: false }, action) => {
  switch (action.type) {
    case SUM:
      return { ...state, sumValue: action.payload };
    case ADD_SUM:
      return { ...state, added: true };
    case RESET:
      return { ...state, added: false, sumValue: "" };
    default:
      return state;
  }
};
