import { Fetch_Req,Fetch_Success,Fetch_Fail, Post_Req,Error_Req } from "./fetchType";
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
export const FetchAdd=(value)=>{
    return{
        type:Post_Req,
         payload:value
    }
}
export const FetchError=(error)=>{
    return{
        type:Error_Req,
        payload:error
    }
}


export const fetchUsers=()=>{
    return(dispatch)=>{
      dispatch(FetchRequest)
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>{
        const user=res?.data;
        dispatch(FetchSuccess(user))
      })
      .catch(error=>{
        const errormsg=error?.message
        dispatch(FetchFail(errormsg))
      })
    }
}
export const postUser=(users)=>{
    console.log('data--123',users)
return(dispatch)=>{
    axios.post("https://jsonplaceholder.typicode.com/users",users)
    .then(res=>{
        console.log(res)
       dispatch(FetchAdd(res.data))
    })
    .catch(error=>{
        const errormsg=error?.message
        dispatch(Error_Req(errormsg))
    })
}
}
