import api from "./axios-module";

export function getListGoods() {
  return api.get("/goods").then((res) => res.data);
}

export function putListGoods(data) {
  return api.put("/goodsUpdate", data).then((res) => res);
}
