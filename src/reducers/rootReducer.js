import { combineReducers } from "redux";
import { moneyTypeReducer } from "./moneyTypeReducer";
import { sumReducer } from "./sumReducer";
import { backetReducer } from "./backetReducer";
import { goodsReducer } from "./goodsReducer";
import { activeGoodsReducer } from "./activeGoodsReducer";
import { errorReducer } from "./errorReducer";
import { minSumReducer } from "./minSumReducer";

export const rootReducer = combineReducers({
  moneyType: moneyTypeReducer,
  sum: sumReducer,
  backet: backetReducer,
  goods: goodsReducer,
  activeGoodsItem: activeGoodsReducer,
  errors: errorReducer,
  minSum: minSumReducer,
});
