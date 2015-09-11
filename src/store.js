import { createStore } from "redux";
import reducer from "./reducer";

export default (data = {count: 0}) => {
  return createStore(reducer, data);
};
