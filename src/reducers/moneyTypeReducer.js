import { RUB, USD, EUR } from "../types";

export const moneyTypeReducer = (state = { name: "", factor: 1 }, action) => {
  switch (action.type) {
    case RUB:
      return { name: RUB, factor: 1 };
    case USD:
      return { name: USD, factor: 74 };
    case EUR:
      return { name: EUR, factor: 90 };
    default:
      return state;
  }
};
