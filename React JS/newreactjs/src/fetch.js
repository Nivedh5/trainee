import { useState,useEffect} from "react";
import Blogs from "./blogs";
import { styled } from "styled-components";
import axios from "axios";

const Home=()=>{
    const [data,setdata]=useState(null);
    const [pending,setpending]=useState(true)
    const Div=styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    `

    useEffect(()=>{
        setTimeout(() => {
     axios       
        .get("https://fakestoreapi.com/products")
        .then((data)=>{
            console.log("triggered")
            setpending(false)
            return(setdata(data.data))
        })
    }, 1000);
    },[])

    return(
        <div>
           {data &&<Blogs blogs={data}></Blogs>}
           <br/>
           <br/>
           {pending&& <Div>Loading....</Div>}
        </div>
    )
    
}
export default Home;
