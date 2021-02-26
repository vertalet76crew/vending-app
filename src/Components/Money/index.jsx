import React, { useState, useCallback } from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { RUB, USD, EUR } from "../../types";
import { actionMoneyType, sumMoney } from "../../actions/actions";

const Money = () => {
  const sumValue = useSelector((state) => state.sum.sumValue);
  const name = useSelector((state) => state.moneyType.name);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [moneyList] = useState([RUB, USD, EUR]);

  const onChange = (value) => {
    if (+value > 0) {
      return sumMoney(+value);
    }
    return sumMoney("");
  };

  return (
    <div className={`money ${dropdownOpen ? "money_open" : ""}`}>
      <div className="money__current">
        <span
          className="money__selected"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {name}
        </span>
        <div className="money__dropdown ">
          {moneyList.map((el, i) => {
            return (
              <p
                className="money__item"
                key={i}
                onClick={() => {
                  dispatch(actionMoneyType(el));
                  setDropdownOpen(false);
                }}
              >
                {el}
              </p>
            );
          })}
        </div>
        <input
          placeholder="Сумма"
          type="number"
          className="money__input"
          value={sumValue}
          onChange={(e) => dispatch(onChange(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Money;
