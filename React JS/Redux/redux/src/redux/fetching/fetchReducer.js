import { Fetch_Req,Fetch_Success,Fetch_Fail } from "./fetchType";
export const initialState={
    loading:false,
    users:[],
    error:""
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Fetch_Req:
            return{
              ...state,loading:true
            }
        case Fetch_Success:
            return{
                loading:false,
                users:action.payload,
                error:""
            }    
        case Fetch_Fail:
            return{
                loading:false,
                users:[],
                error:action.payload
            }    
            default:return state;
    }
}
export default reducer