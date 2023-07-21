import { Styled, styled } from "styled-components"
import { useState } from "react"
import Rating from "./star"
export const Form=()=>{
    const Div=styled.div`
    display: flex;
    width: 550px;
    justify-content: space-between;
    border: 1px solid black;
    box-shadow:1px 1px 1px 1px;
    padding: 16px;
    overflow: scroll;
    border-collapse: collapse;
    margin-bottom:30px;
    &:hover{
        transform: scale(1.04);
    }
    `
    
    const Img=styled.img`
    height:200px;
    width:200px;`

    let arr=["select location","chennai","bangalore","mumbai"]
    let arr1=["select rattings",1,1.5,2,2.5,3,3.5,4,4.5,5]
    let optionItems = arr.map((item,index) =>
     <option key={index}>{item}</option>)
     let optionItems1=arr1.map((item,index)=>
     <option key={index}>{item}</option>
     )
        const [formData, setFormData] = useState({
            img:'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
            username: '',
            location: '',
            rating:'',
            review:'',
        })
        const [dataArray, setDataArray] = useState([]);
       
        const handleinput = (event) => {
         const { name,value } = event.target;
        setFormData({ ...formData, [name]: value });
        }
          
       
        const handleSubmit = (event) => {
            event.preventDefault();
            setDataArray([...dataArray, formData]);
            console.log(dataArray)
            setFormData({
              img:'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg',
              username: '',
              location: '',
              rating:'',
              review:''
            })
        }
       
        const click= (index)=>{
            const updatedArray = dataArray.filter((_,i) =>i!== index);
             setDataArray(updatedArray);
        }
        
        let mydata=dataArray.map((item,index)=>
        <Div key={index}> 
           <div> <Img src={item.img}/></div> <div>   <h3>username: {item.username}</h3> <h3>location: {item.location}</h3><h3>rating:{item.rating}<h3><Rating props={item.rating}/></h3></h3><h3>review:{item.review}</h3> 
            <button type="submit"  onClick={() =>click(index)}>Delete</button>
           
           </div>
           
           
           
        </Div>
        
             
        )
        
        
        
        
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="text" name="username"  value={formData.username} onChange={handleinput} placeholder="Username" style={{height:"25px"}} />
            <p>Location</p>
            <select name="location" value={formData.location} onChange={handleinput}style={{height:"30px"}} >
                {
                    optionItems
                }
                
            </select>
            <p>rating</p>
            <select name="rating" value={formData.rating} onChange={handleinput} style={{height:"30px"}}>
                {
                optionItems1
                }
            </select>
            <p>review</p>
            <textarea name="review" value={formData.review} onChange={handleinput}style={{height:"50px"}} />
             <br/>
            {formData.username&&<button style={{height:"30px"}} type="submit">Submit</button>}
            </form>
            <br/>
            <div>
               {mydata}
            </div>
            
        </div>

         
        
    )
}