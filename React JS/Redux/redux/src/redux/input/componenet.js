
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
`;
const Div=styled.div`
border:1px solid black;
margin: 20px;
padding: 20px;
background-color:grey;
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

  }
  const handleEditButton=(index)=>{
  

  }
  
  return (
    
     <div>
      <FormStyle onSubmit={handleClick}> 
     
      <p>Username</p>
      <input placeholder='enter name' value={inputValue?.name} name='name' onChange={handleEditChange}/>
      <p>Email</p>
      <input placeholder='Email' value={inputValue?.email} name='email' onChange={handleEditChange}/>
      <br/>
      <br/>
      <input type='submit'/>
      <br/>
      <br/>
     
  
      </FormStyle>

      <div>
        {currentState?.map((item,index)=><Div>
        <h3>{item?.name}</h3><h3>{item?.email}</h3>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <input placeholder='edit username' name="editName" value={inputValue?.name} onChange={handleEdit}/>
        <input placeholder='edit email' name="editemail" value={inputValue?.email} onChange={handleEdit}/>
        <button onClick={()=>handleEditButton(index)}>Edit</button>
        </Div>
          )
         }
       
      </div>
    </div>
    
    
  );
};



export default (YourComponent);
