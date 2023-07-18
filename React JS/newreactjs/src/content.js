// import Header from "./header"
import {Btn} from "./react-pratice"

function Content(){
    return(
    <div id='content'>
        <div id="img-div">
          <img class="image" src="https://previews.123rf.com/images/captainvector/captainvector1601/captainvector160115316/52153012-dragon-head.jpg" alt="image"/>
        </div>
        <div id="form">
            <p>Mail ID</p>
           <input class="inp" id="id" placeholder='Id'/>
           <br/>
           <p>Password</p>
           <input class="inp" id="pass" placeholder='Password'/>
           <br/>
           <br/>
           <Btn>Submit</Btn>
        </div>
        <div>
          <img class="image" src='https://previews.123rf.com/images/captainvector/captainvector1601/captainvector160115316/52153012-dragon-head.jpg' alt="image"/>
        </div>

      </div>
    );
    }
    export default Content;
// let arr=[{
//     id:"niv",
//     password:"niv"
// },
// {
//     id:"hari",
//     pass:"hari"
// },
// {
//     id:"vishal",
//     pass:"vishal"
// }]
// let btn=document.getElementById("submit")

// btn.addEventListener('click',function(){


// let id=document.getElementById("id")
// let pass=document.getElementById("pass")
// let div=document.getElementById("content")

// if(id==arr[0].id && pass==arr[0].pass){
//     div.style.backgroundImage="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
// }
// else{
//     div.style.backgroundImage="none"
// }
// })





