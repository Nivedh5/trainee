import { applyMiddleware, createStore } from "redux";
import userInputReducer from "./inputReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {logger} from "redux-logger"
const store=createStore(userInputReducer,composeWithDevTools(applyMiddleware(logger)))
export default store