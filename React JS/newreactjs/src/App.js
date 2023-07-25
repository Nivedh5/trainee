import { Div } from "./divelement";
import { FaStar } from "react-icons/fa";
import { styled } from "styled-components";
import { useState } from "react";
import { Blogs } from "./blogsdiv";
import { Rate } from "antd";
import {Form} from "./dummt"
import "./App.css"
import Home from "./fetch"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home1 from "./home";
import About from "./about";
// function App() {

// const Star=styled(FaStar)`
// font-size:24px;
// cursor: pointer;
// `

//   const arr=[
//     {
//       id:1,
//       color:'#FF0000'
//     },
//     {
//       id:2,
//       color:'#FF0000'
//     },
//     {
//       id:3,
//       color:"#FFFF00"
//     },
//     {
//       id:4,
//       color:"#008000"
//     },
//     {
//       id:5,
//       color:"#000000"
//     }

//   ]
//   let yellow = '#ffc800';
//   const [bgColor, setBgColor] = useState(yellow);
//    const changeColor =()=>{
//       let purple = '#A020F0';
//       setBgColor(purple);
//     }

//  return(
//      <div>
//     <Div>
//       {[...Array(5)].map((value,index)=>{
//          const rating=index+1;
//          return(
//           <div>
//             <Star style={{color:bgColor}} Index={index}  onClick={changeColor=()=>{
//               changeColor(1)
//             }}></Star>

//           </div>
//          )
//       })

//       }
//     </Div>
//     </div>

//  )

//     }
// function App() {
//   let [name,setname]=useState("niv")
//   let onclick=(e)=>{
//     console.log(e.target)
//     setname("flanky")
//   }
//   return(
//   <div>
//     <h1>{name}</h1>
//     <button onClick={(e)=>onclick(e)}>click</button>
//   </div>
//     )

//   }
// function App(){
//   const [arr,setarr]=useState([{title:"none",id:1,body:"none"},{title:"eazy",id:2,body:"noneeee"},{title:"wone",id:3,body:"ez"}
// ])
// const click=(id)=>{
//   let newblogs=arr.filter(items => items.id !== id)
//   setarr(newblogs)
// }

//   return(
//    <div>
//     <Blogs arr={arr} click={click} />
//    </div>
//   )
// }
// function App() {
//   let [arr, setarr] = useState([
//     "helo",
//     "am good",
//     "hope you fine",
//     "how are you?",
//     "need Help?",
//     "please contact us",
//   ]);
//   const [output, setoutput] = useState(" ");
//   const [submit, setsubmit] = useState(" ");
//   const array = (data) => {
//     // console.log(data)
//     setoutput(output + data+" ");
//     // setsubmit(output)
//   };
//   const arr1 = () => {
//     setsubmit(output);
//   };
//   console.log(output);
//   const arr2 = () => {
//     setoutput(" ");
//     setsubmit(" ");
//   };
//   return (
//     <div>
//       {arr.map((value, index) => {
//         return (
//           <div>
//             <button onClick={() => array(value)}>{value}</button>
//           </div>
//         );
//       })}
//       {/* <input  type="text"/> */}
//       <textarea value={output} rows={10} cols={30} />
//       <Rate count={3} allowHalf/>
//       <button onClick={arr1}>Submit</button>
//       <h1>Output:{submit}</h1>
//       <button onClick={arr2}>clear</button>
//     </div>
//   );
// }

const Divmain=styled.div`
display:flex;
align-items: center;
justify-content: center;
width:100%;
margin-right: auto;
margin-left: auto;
background-color: DodgerBlue;
overflow: auto;

`
const Divform=styled.div`
width:900px;
display:flex;
align-items: center;
justify-content: center;
background-color: #c2e7ff;;
border: 2px solid black;
padding:16px;
overflow: scroll;
margin-top:200px

`
const Header=styled.header`
height:70px;
display:flex;
align-items: center;
justify-content: space-between;
padding:8px;
width:100%;
background-color:whitesmoke;
position:fixed;
`
const Span=styled.span`
padding:16px;`


function App(){
  // style={{height : dataArray.length > 1 ? 'auto' : '100vh'}}
  return(
    <div>
        <Router>
        <Header>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              </div>
              <span><b>MYNTRA</b></span>
              <div>
              <Span><b>Buy Now</b></Span>
              <Span><b>Contact us</b></Span>
            </div>
        </Header> 
            <Switch>
              <Route exact path="/">
                  <Home1 />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
            </Switch>
        </Router>

      
    </div>
  )
}
export default App;
