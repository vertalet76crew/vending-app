import React from "react";

import "./App.scss";
import Controls from "./Components/Controls";
import Goods from "./Components/Goods";
import GoodsItemPopup from "./Components/GoodsItemPopup";
import ErrorPopup from "./Components/ErrorPopup";

function App() {
  return (
    <div className="App">
      <Controls />
      <Goods />
      <GoodsItemPopup />
      <ErrorPopup />
    </div>
  );
}

export default App;
