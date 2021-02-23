import { ACTIVE_GOODS_ITEM, RESET_ACTIVE_GOODS_ITEM } from "../types";

export const activeGoodsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVE_GOODS_ITEM:
      return action.payload;
    case RESET_ACTIVE_GOODS_ITEM:
      return {};
    default:
      return state;
  }
};
