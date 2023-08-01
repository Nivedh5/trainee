import { Add_Ice,Ice_Cake} from "./caketype";
const initialState={
    numOfIce:20
}
const IceReducer=(state=initialState,action)=>{
    switch(action.type){
     case Ice_Cake:return{
        ...state,numOfIce:state.numOfIce-1
     }
     
     case Add_Ice:return{
        ...state,numOfIce:state.numOfIce+1
     }
     default:return state
    }

}
export default IceReducer