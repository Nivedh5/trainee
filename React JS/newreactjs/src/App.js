
import {Div} from "./divelement"
import {FaStar} from "react-icons/fa";
import {styled} from "styled-components"
import { useState } from "react";

function App() {
  
const Star=styled(FaStar)`
font-size:24px;
cursor: pointer;
`

  const arr=[
    {
      id:1,
      color:'#FF0000'
    },
    {
      id:2,
      color:'#FF0000'
    },
    {
      id:3,
      color:"#FFFF00"
    },
    {
      id:4,
      color:"#008000"
    },
    {
      id:5,
      color:"#000000"
    }

  ]
  let yellow = '#ffc800';
  const [bgColor, setBgColor] = useState(yellow);
   const changeColor =()=>{
      let purple = '#A020F0';
      setBgColor(purple);
    }

 return( 
     <div>
    <Div>
      {[...Array(5)].map((value,index)=>{
         const rating=index+1;
         return(
          <div>
            <Star style={{color:bgColor}} onClick={changeColor=()=>{
              changeColor(1)
            }}></Star>
            
          </div>
         )
      })

      }
    </Div>
    </div>

 )

    }
export default App; 
