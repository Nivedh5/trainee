
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect, useSelector,useDispatch } from 'react-redux';
import { userInput,editInput,deleteInput } from './inputAction';


const FormStyle = styled.form`
  color: blue;
  margin: 20px;
  padding: 20px;
  border:2px solid black;
  background-color:whitesmoke;
  width:40%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
const Div=styled.div`
border:1px solid black;
margin: 20px;
padding: 20px;
background-color:grey;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`
const Div1=styled.div`
display:flex;
align-items:center;
width:100%;
height:90vh;
justify-content:center;
`

const YourComponent = () => {
  const currentState=useSelector(state=>state?.userInputArray)

  const dispatch=useDispatch()
  const [inputValue, setInputValue] = useState({name:"",email:""});
  const [editData,setData]=useState({name:"",email:""})

  // const [form,setform]=useState([])
  
  
  const handleChange=(e)=>{
    const {name,value}= e.target;
    console.log(name,value)
    setInputValue({...inputValue,[name]:value})
    // setform(inputValue);
  }

  const handleClick=(e)=>{
    e.preventDefault()
    // console.log(form)
  dispatch(userInput(inputValue))
  console.log(currentState)
  
  }
  const handleDelete=(e)=>{
  //  currentState.filter((data,index)=>index!==e)
  const newData=currentState.filter((data,index)=>index!==e)
  console.log(newData)
   dispatch(deleteInput(newData))
  }
  const handleEditChange=(e)=>{
    const {name,value}=e.target;
    setData({...editData,[name]:value})

  }
  const handleEditButton=(index)=>{
    console.log(currentState[index])
    const newData = [...currentState]
    newData[index]=editData
    dispatch(editInput(newData))
    let clearData={name:" ",email:" "}
    setData(clearData)
  }
  console.log("")
  
  return (
    
     <div>
      <Div1>
      <FormStyle onSubmit={handleClick}> 
     
      <p>Username</p>
      <input placeholder='enter name' value={inputValue?.name} name='name' onChange={handleChange}/>
      <p>Email</p>
      <input placeholder='Email' value={inputValue?.email} name='email' onChange={handleChange}/>
      <br/>
      <br/>
      <input type='submit'/>
      </FormStyle>
      </Div1>
      <div>
        {currentState?.map((item,index)=><Div>
        <h3>{item?.name}</h3><h3>{item?.email}</h3>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <input placeholder='edit username' name="name" onChange={handleEditChange}/>
        <input placeholder='edit email' name="email"  onChange={handleEditChange}/>
        <button onClick={()=>handleEditButton(index)}>Edit</button>
        </Div>
          )
         }
       
      </div>
    </div>
    
    
  );
};



export default (YourComponent);
