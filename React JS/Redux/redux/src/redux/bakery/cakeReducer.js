import { Buy_Cake ,add_Cake} from "./caketype";
const initialState={
    numOfCakes:10
}
const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
     case Buy_Cake:return{
        ...state,numOfCakes:state.numOfCakes-1
     }
     
     case add_Cake:return{
        ...state,numOfCakes:state.numOfCakes+1
     }
     default:return state
    }

}
export default cakeReducer