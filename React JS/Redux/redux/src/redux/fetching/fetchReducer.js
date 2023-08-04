import { Fetch_Req,Fetch_Success,Fetch_Fail, Post_Req,Error_Req,Delete_Req} from "./fetchType";
export const initialState={
    loading:false,
    users:[],
    error:""
}

const reducer=(state=initialState,action)=>{
    switch(action?.type){
        case Fetch_Req:
            return{
              ...state,loading:true
            }
        case Fetch_Success:
            return{
                loading:false,
                users:action?.payload,
                error:""
            }    
        case Fetch_Fail:
            return{
                loading:false,
                users:[],
                error:action?.payload
            }    
            default:return state;
        case Post_Req:
            
        console.log("going to add",action.payload)
        return { ...state, users: state.users.concat(action.payload) };

         case Error_Req:
            return{
                loading:false,
                users:[],
                error:action?.payload,
            }
          case  Delete_Req:
            console.log("deleting index",action.payload)
            return{
               
                ...state, users:state.users.filter((item, Index) => Index !== action.payload)
            }

    }
}
export default reducer