import { useState } from "react";


function Run(){
    const[blogs,setblogs]=useState(null)

    return(
    <div>
       <h1 blogs={blogs}></h1>
    </div>
    )
}
export default Run;