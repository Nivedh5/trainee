import { Fetch_Req,Fetch_Success,Fetch_Fail } from "./fetchType";
import axios from "axios"

export const FetchRequest=()=>{
    return{
        type:Fetch_Req
    }
}
export const FetchSuccess=(user)=>{
    return{
        type:Fetch_Success,
        payload:user
    }
}
export const FetchFail=(error)=>{
    return{
        type:Fetch_Fail,
        payload:error
    }
}
export const fetchUsers=()=>{
    return(dispatch)=>{
      dispatch(FetchRequest)
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>{
        const user=res.data;
        dispatch(FetchSuccess(user))
      })
      .catch(error=>{
        const errormsg=error.message
        dispatch(FetchFail(errormsg))
      })
    }
}