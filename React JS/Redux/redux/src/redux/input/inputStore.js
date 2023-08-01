import { createStore } from "redux";
import rootReducer from "./inputReducer";
const store=createStore(rootReducer)
export default store