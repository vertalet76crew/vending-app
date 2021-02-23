import MockAdapter from "axios-mock-adapter";
import { goods } from "../../goods";

const mock = new MockAdapter();

// Config delay
mock.delayResponse = 200;

mock.onGet("/goods").reply(200, goods);

mock.onPut("/goodsUpdate").reply((config) => {
  const data =
    typeof config.data === "string" ? JSON.parse(config.data) : config.data;

  //   goods.push(data);
  return [200, goods];
});

export default mock.adapter();
