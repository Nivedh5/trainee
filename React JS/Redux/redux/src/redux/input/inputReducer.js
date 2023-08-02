import {inputValue,editValue,deleteValue} from "./inputType"
const initialState = {
    userInputArray: [],
  };
  
  const userInputReducer = (state = initialState, action) => {
    switch (action.type) {
      case inputValue:
        return {
          ...state,
          userInputArray: [...state?.userInputArray,action.payload]
        };
        case editValue:
            return{
                ...state,
             userInputArray:action.payload,
            }
        case deleteValue:
            return{
                ...state,
                userInputArray:action.payload
            }    
      default:
        return state;
    }
  };
  
  export default userInputReducer;
  