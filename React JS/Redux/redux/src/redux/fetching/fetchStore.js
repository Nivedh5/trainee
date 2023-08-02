import {applyMiddleware} from "redux"
import reducer from "./fetchReducer"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import {logger} from "redux-logger"
import thunk from "redux-thunk"

const store=createStore(reducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store

