import axios from "axios";
import { useEffect } from "react";
function Postmethod(){
    const data={
        title:"dress",
        price:399,
        image:"https://cdn.shopify.com/s/files/1/0981/8178/files/back-to-black-outfit-black-utility-shirt.jpg?13215484419949015679"
    }
    const click=(data)=>{
     axios.post("https://fakestoreapi.com/products",data)
     .then(res=>console.log(res.status))
    }

}