import { useEffect, useState } from "react";
import { fetchUsers, postUser } from "../redux/fetching/fetchAction";
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

    const[inputValue,setInputValue]=useState({})
    const users=useSelector(state=>state.users)
    const loading=useSelector(state=>state.loading)
    const error=useSelector(state=>state.error)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setInputValue({...inputValue,[name]:value})
    }

    const handleSubmit=(e)=>{
       
        dispatch(postUser(inputValue))
        // setPending(pending+1)
       
    }
 
    console.log(users)
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
                            
                            <h3>{item?.name}</h3>
                            <h3>{item?.email}</h3>
                            </Div>
                        )
                    })
                }
            </Div1>

            <div>
                <input placeholder="enter name" name="name"  onChange={handleChange}/>
                <input placeholder="enter email" name="email" onChange={handleChange}/>
                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
     )
     
}

export default (Container);