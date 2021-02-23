import React, { useEffect } from "react";
import "./style.scss";
import {
  actionGetGoods,
  actionActiveGoodsItem,
  actionSumError,
  actionSumValueError,
  actionSetMinSum,
} from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { getListGoods } from "../../api/goods";

const Goods = () => {
  const goods = useSelector((state) => state.goods);
  const moneyType = useSelector((state) => state.moneyType);
  const minSumValue = useSelector((state) => state.minSum);
  const sum = useSelector((state) => state.sum);
  const dispatch = useDispatch();

  useEffect(() => {
    getListGoods().then((goodsList) => {
      let minSum = 0;

      for (const item of goodsList) {
        if (minSum === 0 || item.price < minSum) {
          minSum = item.price;
        }
      }

      dispatch(actionSetMinSum(minSum));
      dispatch(actionGetGoods(goodsList));
    });
  }, []);

  return (
    <>
      <div className="goods">
        <div className="goods__header goods__list">
          <span className="goods__item goods__number">#</span>
          <div className="goods__item">Товар</div>
          <p className="goods__item goods__name">Название</p>
          <p className="goods__item goods__price">Цена</p>
          <p className="goods__item goods__amount">Количество</p>
        </div>
        {goods.length > 0 &&
          goods.map((item, i) => {
            const { img, name, price, amount, id } = item;
            return (
              <div
                className="goods__list"
                key={id}
                onClick={() => {
                  const sumValue = !!sum && (parseInt(sum.sumValue) || 0);
                  const preparedValue = sumValue * moneyType.factor;

                  if (!moneyType || !moneyType.name) {
                    dispatch(actionSumError());
                  } else if (
                    !sum.added ||
                    preparedValue <= 0 ||
                    preparedValue < minSumValue
                  ) {
                    dispatch(actionSumValueError());
                  } else {
                    dispatch(actionActiveGoodsItem(item));
                  }
                }}
              >
                <span className="goods__item goods__number">{i + 1}</span>
                <div className="goods__item">
                  <div className="goods__img-wrap">
                    <img src={img} alt="" className="goods__img" />
                  </div>
                </div>
                <p className="goods__item goods__name">{name}</p>
                <p className="goods__item goods__price">
                  {Math.round((price / moneyType.factor) * 100) / 100}
                </p>
                <p className="goods__item goods__amount">{amount}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Goods;
