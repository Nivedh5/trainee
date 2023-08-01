import { combineReducers } from "redux";
import IceReducer from "./rootReducer";
import cakeReducer from "./cakeReducer";
const rootReducer=combineReducers({
    cake:cakeReducer,
    ice:IceReducer
})
export default rootReducer