import {inputValue,editValue,deleteValue} from "./inputType"

export const userInput = (input) => {
    return {
      type: inputValue,
      payload: input,
    };
  };
  
  export const editInput=(input)=>{
    return{
        type:editValue,
        payload:input
    }
  }
  export const deleteInput=(input)=>{
    return{
        type:deleteValue,
        payload:input
    }
  }