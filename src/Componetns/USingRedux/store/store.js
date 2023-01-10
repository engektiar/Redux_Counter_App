import { createStore } from "redux";
import { counterReduser } from "../reducers/counterReduser";

  const store =createStore(counterReduser)

  export default store;