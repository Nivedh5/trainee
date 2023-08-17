import { styled } from "styled-components"
import { useState } from "react"
import { Button,Input,} from 'antd';
import{EditOutlined,DeleteOutlined} from'@ant-design/icons'
import { DownloadOutlined } from '@ant-design/icons';

// import 'antd/dist/antd.css'; 
const Span=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:15px;
font-weight:300;
cursor:pointer;
@media (max-width:400px){
display:none;
}
`
const Body=styled.div`
margin-left:400px;
margin-top:200px;`
// const Save=styled.span`
// padding:8px;`
const Main=styled.div`
display:flex;
justify-content:space-between;
width:500px;
`
const EditMain=styled.div`
display:flex;
justify-content:space-between;
width:500px;`

const InputDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:500px;`
const AddDiv=styled.div`
display:flex;
justify-content:center;
width:500px;`
const Field=styled.div`
display:flex;
align-Items:center;
margin:20px;`
const Products=styled.span`
margin-left:20px;
margin-top:6px;`

function About(){
    // const[inputStore,setInputStore]=useState([{value:''}])
    const [inputFields, setInputFields] = useState([{ id:0, value: '' }]);
    const [Render,SetRender]=useState(true)
    const addInputField = () => {
        setInputFields([...inputFields, { id:inputFields.length, value: '' }]); 
    }
    const handleInputChange = (id, event) => {
        const newInputFields = inputFields.map(object => {
          if (object.id === id) {
            return { ...object, value: event.target.value };
          }
          return object;
        });
        setInputFields(newInputFields);
    }
      const handleClick=(event)=>{
        event.preventDefault()
        SetRender(false)
      }
      const handleEdit=()=>{
        SetRender(true)
      }
      const handleDelete=(id)=>{
        const newData = inputFields.filter((Field)=>Field.id!==id);
        setInputFields(newData)

       
      }
    return(
        <Body>
          {Render?<div>
            <form onSubmit={handleClick}>
           <Main>
            <div>
            <span>Products & Service offered</span>
            </div>
            <div>
            <span>Cancel</span>
            <Button type="primary" htmlType="submit" >Save</Button>
            </div>
           </Main>
           <InputDiv>
           {inputFields.map((inputValue, index) => (
            <Field>
         <span><Input
          key={index}
          type="text"
          value={inputValue.value}
          onChange={(event) => handleInputChange(index, event)
        }
          placeholder="Enter Products and Services"
        /> </span> 
        <DeleteOutlined onClick={()=>handleDelete(inputValue.id)}  />
        </Field>
        ))}
        
           </InputDiv>
           </form>
           <AddDiv>

      {/* <Button type="primary" shape="circle" icon="plus"  /> */}
      <Button type="primary" shape="circle" icon={<DownloadOutlined onClick={addInputField} />}  />

            <Products>Add Products</Products>
           </AddDiv>
           </div>
           :
           <div>
            <div>
          <EditMain>
             <div>
            <span>Products & Service offered</span>
            </div>
            <div>
            <span><EditOutlined onClick={handleEdit}/></span>
            </div>
         </EditMain>
                {inputFields.map((obj)=>(
                   <h3>{obj.value}</h3>
                ))}
            </div>
            </div>}
         </Body>
    )
}
export default About