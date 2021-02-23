import {
  SUM,
  ADD_SUM,
  RESET,
  ADD_GOOD,
  GET_GOODS,
  UPDATE_GOODS,
  ACTIVE_GOODS_ITEM,
  RESET_ACTIVE_GOODS_ITEM,
  SUM_ERROR,
  SUM_VALUE_ERROR,
  RESET_ERROR,
  SET_MIN_SUM,
} from "../types";

export const actionMoneyType = (money) => ({
  type: money,
});

export const sumMoney = (sum) => ({
  type: SUM,
  payload: sum,
});

export const actionAdd = {
  type: ADD_SUM,
};

export const actionReset = {
  type: RESET,
};

export const actionAddGood = (good) => {
  return {
    type: ADD_GOOD,
    payload: good,
  };
};

export const actionGetGoods = (data) => {
  return {
    type: GET_GOODS,
    payload: data,
  };
};

export const actionUpdateGoods = (data) => {
  return {
    type: UPDATE_GOODS,
    payload: data,
  };
};

export const actionActiveGoodsItem = (data) => {
  return {
    type: ACTIVE_GOODS_ITEM,
    payload: data,
  };
};

export const actionResetGoodsItem = () => {
  return {
    type: RESET_ACTIVE_GOODS_ITEM,
    payload: {},
  };
};

export const actionSumError = () => {
  return {
    type: SUM_ERROR,
    payload: null,
  };
};

export const actionSumValueError = () => {
  return {
    type: SUM_VALUE_ERROR,
    payload: null,
  };
};

export const actionResetError = () => {
  return {
    type: RESET_ERROR,
    payload: null,
  };
};

export const actionSetMinSum = (value) => {
  return {
    type: SET_MIN_SUM,
    payload: value,
  };
};

export const actionResetMinSum = () => {
  return {
    type: SET_MIN_SUM,
    payload: null,
  };
};
