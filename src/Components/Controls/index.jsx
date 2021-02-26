import React from "react";
import Money from "../Money";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { actionAdd, actionReset } from "../../actions/actions";

const Controls = () => {
  const selector = useSelector((state) => state.backet);
  const dispatch = useDispatch();
  return (
    <div className="controls">
      <span className="controls__title">Вендинговый автомат</span>
      <div className="controls__wrap">
        <div className="controls__backet">{selector.length}</div>
        <Money />
        <button
          className="button button_success"
          onClick={() => dispatch(actionAdd)}
        >
          Добавить
        </button>
        <button
          className="button button_reset"
          onClick={() => dispatch(actionReset)}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
};

export default Controls;
