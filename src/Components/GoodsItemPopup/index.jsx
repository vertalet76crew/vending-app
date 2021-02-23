import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  actionAddGood,
  actionUpdateGoods,
  actionResetGoodsItem,
  sumMoney,
} from "../../actions/actions";
import { putListGoods } from "../../api/goods";

const GoodsItemPopup = () => {
  const dispatch = useDispatch();

  const goods = useSelector((state) => state.goods);
  const sumValue = useSelector((state) => (state.sum ? state.sum.sumValue : 0));
  const moneyType = useSelector((state) => state.moneyType);
  const activeGoodsItem = useSelector((state) => state.activeGoodsItem);
  const { id, img, name, price, amount } = activeGoodsItem;

  const isEmptyActiveGoodsItem = () => {
    return !!Object.keys(activeGoodsItem).length;
  };
  // фильтрация массива вместо goods.filter что бы сохранить порядок отображения
  const newgoods = (payload) => {
    return goods.map((elem) => {
      return elem.id === id ? payload : elem;
    });
  };

  return isEmptyActiveGoodsItem() ? (
    <div className="goods-item">
      <div className="goods-item__popup">
        <div className="goods-item__container">
          <img src={img} alt="" />
          <p className="goods-item__text">Выбрать данный товар</p>
          <p className="goods-item__text">{name}</p>
          <p className="goods-item__text">
            {Math.round((price / moneyType.factor) * 100) / 100}
          </p>
          <button
            className="button button_reset goods-item__button"
            onClick={() => {
              dispatch(actionResetGoodsItem());
            }}
          >
            Отмена
          </button>
          <button
            className="button button_primary goods-item__button"
            onClick={() => {
              putListGoods().then(() => {
                dispatch(
                  actionUpdateGoods(
                    newgoods({
                      id,
                      img,
                      name,
                      price,
                      amount: amount - 1,
                    })
                  )
                );
                dispatch(actionAddGood(activeGoodsItem));
                dispatch(
                  sumMoney(
                    sumValue -
                      Math.round(
                        (activeGoodsItem.price / moneyType.factor) * 100
                      ) /
                        100
                  )
                );
              });

              dispatch(actionResetGoodsItem());
            }}
          >
            Да
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default GoodsItemPopup;
