import axiosMockAdapter from "./mock/adapter";
import axios from "axios";

const config = {
  baseURL: "/api",
  headers: {
    Accept: "application/json",
  },
};

if (process.env.NODE_ENV === "development") {
  config.adapter = axiosMockAdapter;
}

export default axios.create(config);
