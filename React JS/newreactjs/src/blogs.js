import Styled, { styled }  from "styled-components";
import axios from "axios";

function Blogs(data){
    const Div=Styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    flex-wrap:wrap;
    grid-gap:10px;
    width:100%;
    background-color: lightgrey;
    
    `
    const Div1=styled.div`
    height:400px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    text-align:center;
    background:white;
    overflow:auto;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin:50px;
    border-radius:2px;
    &:hover{
        box-shadow: 5px 10px 20px #454545 inset;
    }
    `
    const Btn=styled.button`
    border:none;
    height:30px;
    width:100px;
    background:  #8CFFDB;
    cursor:pointer;

    `
    let pend=false
        const data2={
            title:"dress",
            price:399,
            image:"https://cdn.shopify.com/s/files/1/0981/8178/files/back-to-black-outfit-black-utility-shirt.jpg?13215484419949015679"
        };
        const handle=()=>{
         axios.post("https://fakestoreapi.com/product",data2)
         .then(res=>{console.log(res.status)
            pend=true
         if(res.status ===200){
            console.log(res)
           alert("sucess")
           console.log("sucess")
         }
        })
        .catch((error)=>{
            alert("error in request")
            console.log("error",error)
        })
         
        }

    
    
   const data1= data.blogs

    return(
        
        <Div>
            
            {
               data1.map((data)=>
               
                <Div1>
               <img src={data.image} style={{height:"120px",width:"120px"}}/>
               <br/>
               <p>{data.title}</p>
               <p><b>{data.price} $</b></p>
               <br/>
               <Btn onClick={()=>handle()}>Add to cart</Btn>
               </Div1>
              

               )
               
               
            }
            {pend && <div>
            <img src={data2.image} style={{height:"120px",width:"120px"}}/>
               <br/>
               <p>{data2.title}</p>
               <p><b>{data2.price} $</b></p>
               <br/>
               <Btn onClick={()=>handle()}>Add to cart</Btn>
            </div>}
           

        </Div>
        
    )

}
export default Blogs;