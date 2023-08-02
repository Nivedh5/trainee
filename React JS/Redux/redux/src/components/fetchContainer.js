import { useEffect } from "react";
import { fetchUsers } from "../redux/fetching/fetchAction";
import{ useDispatch, useSelector}from "react-redux"
import { styled } from "styled-components";
function Container() {

    const Div=styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    border:1px solid black;
    `
    const Div1=styled.div`
    border:1px solid black;`
   const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(fetchUsers())
    },[])
    
    const users=useSelector(state=>state?.users)
    const loading=useSelector(state=>state?.loading)
    const error=useSelector(state=>state?.error)
    return loading?(<h1>loading...</h1>):error?(<h1>{error}</h1>):(
        <div>
            <h3>UserDetails</h3>
            <Div1>
                <Div>
            <h3>Name:</h3>
            <h3>Email:</h3>
            </Div>
                {
                    users && users.map((item)=>{
                        return(
                            
                            <Div>
                            
                            <h3>{item.name}</h3>
                           
                            <h3>{item.email}</h3>
                            </Div>
                        )
                    })
                }
            </Div1>
        </div>
     )
     
}

export default (Container);