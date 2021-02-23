import { GET_GOODS, UPDATE_GOODS, ACTIVE_GOODS_ITEM } from "../types";

export const goodsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GOODS:
      return [...state, ...action.payload];
    case UPDATE_GOODS:
      return [...action.payload];
    default:
      return state;
  }
};
