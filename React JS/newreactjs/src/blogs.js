import Styled, { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
import { upload } from "@testing-library/user-event/dist/upload";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./cart"

function Blogs(blogs) {
  const Div = Styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    flex-wrap:wrap;
    grid-gap:10px;
    width:100%;
    background-color: lightgrey;
    
    `;
  const Div1 = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    overflow: auto;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin: 50px;
    border-radius: 2px;
    &:hover {
      box-shadow: 5px 10px 20px #454545 inset;
    }
  `;
  const Btn1 = styled.button`
    height: 25px;
    width: 70px;
    background: #8cffdb;
    border: none;
    cursor: pointer;
  `;
  const Div2 = styled.div`
    // height:400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: white;
    box-shadow: 10px 10px 5px #aaaaaa;
    margin: 50px;
  `;
  const Btn = styled.button`
    border: none;
    height: 30px;
    width: 100px;
    background: #8cffdb;
    cursor: pointer;
  `;
  const data = blogs.blogs;
  console.log(blogs);
  let [pend, setpend] = useState(false);
  const [formdata, setformdata] = useState({
    title: "",
    price: "",
    images: " ",
  });
  let [value1, setvalue1] = useState("");
  const addclick = () => {
    axios
      .post("http://localhost:8000/products", value1)
      .then((res) => {
        console.log(res.status);
        setpend(true);
        if (res.status === 201) {
          blogs.blogs1(blogs.blogs2 + 1);
          console.log(res);

          alert("sucess");
          console.log("sucess");
        }
      })
      .catch((error) => {
        alert("error in request");
        console.log("error", error);
      });
  };

  const deleteclick = (e) => {
    let delete1 = data[e].id;
    console.log(delete1);
    axios
      .delete("http://localhost:8000/products/" + delete1)
      .then((res) => {
        if (res.status === 200) {
          alert("deleted sucess");
          blogs.blogs1(blogs.blogs2 + 1);
        }
      })
      .catch((res) => {
        alert("wrong req");
      });
  };
  const updateclick = (e) => {
    let title = data[e].title;
    let update1 = data[e].id;
    let image = data[e].images;
    console.log(update1);
    const value = prompt("enter the price to be updated");
    const obj = {
      id: update1,
      title: title,
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: value,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: image,
    };
    axios
      .put("http://localhost:8000/products/" + update1, obj)
      .then((res) => {
        if (res.status === 200) {
          blogs.blogs1(blogs.blogs2 + 1);
          alert("sucess");
        }
      })
      .catch((res) => {
        alert("bad request");
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setvalue1({
      ...value1,
      [name]: value,
    });
  };
  // const addToCart=(e)=>{
  //  let title= data[e].title
  //  let price=data[e].price
  //   setvalue2({
  //     ...value2
  //   })
  // }
  // const addToCart=()=>{
  //   axios
  //     .post("http://localhost:8005/cart", value1)
  //     .then((res) => {
  //       console.log(res.status);
  //       setpend(true);
  //       if (res.status === 201) {
  //         blogs.blogs1(blogs.blogs2 + 1);
  //         console.log(res);

  //         alert("sucess");
  //         console.log("sucess");
  //       }
  //     })
  //     .catch((error) => {
  //       alert("error in request");
  //       console.log("error", error);
  //     });
  // }
  const addToCart=(data,id)=>{
  console.log(data)
  console.log(blogs.value2)
  alert("cart Added")
  blogs.value2.map((item,i)=>{
   console.log(item)
   
  })
  blogs?.setdata1((cart)=>[...cart,data])
  blogs?.setLen(blogs?.value2?.length+1)
  }
  

  return (
    <div>
      <Div>
        {data.map((data, index) => (
          <Div1>
            <img
              src={data.images}
              style={{ height: "170px", width: "190px" }}
            alt="img"/>
            <br />
            <p>{data.title}</p>
            <p>
              <b>{data.price} $</b>
            </p>
            <br />
           <Btn onClick={()=>addToCart(data,data?.id)} >Add to cart</Btn>
            <br />
            <Btn onClick={() => deleteclick(index)}>Delete</Btn>
            <br />
            <Btn onClick={() => updateclick(index)}>Update</Btn>
            
          </Div1>
        ))}
        
      </Div>
      <p>Compose</p>
      <form onSubmit={addclick}>
      <input
        name="price"
        type="number"
        max={100000}
        required
        value={value1.price}
        onChange={handleInputChange}
        placeholder="enter price"
        />
       
      <br />
      <br />
      <input
        name="title"
        value={value1.title}
        required
        onChange={handleInputChange}
        placeholder="enter title"
      maxLength={10} pattern="[A-za-z]+" type="text"/>
      <br />
      <br />
      <input
        name="images"
        value={value1.images}
        required
        onChange={handleInputChange}
        placeholder="enter  the  image "
       />
      <br />
      <br />
      <Btn1>ADD</Btn1>
      </form>
    </div>
    
  );
}
export default Blogs;
