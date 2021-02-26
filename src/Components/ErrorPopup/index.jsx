import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionResetError } from "../../actions/actions";

import "./style.scss";
const ErrorPopup = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const getText = () => {
    if (!!errors.sumError) {
      return "Выберите валюту";
    } else if (!!errors.sumValueError) {
      return "Пополните баланс";
    }
    return false;
  };

  return (
    <div className="error">
      {!!getText() && (
        <div className="error__popup">
          <div className="error__container">
            <div className="error__logo"></div>
            <p className="error__text">{getText()}</p>

            <button
              className="error__button button button_primary"
              onClick={() => dispatch(actionResetError())}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPopup;
