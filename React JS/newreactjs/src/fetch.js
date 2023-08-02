import { useState, useEffect } from "react";
import Blogs from "./blogs";
import { styled } from "styled-components";
import axios from "axios";

const Home = ({setdata1,setLen,value2}) => {
  const [data, setdata] = useState(null);
  let [start, setstart] = useState(0);
  const [pending, setpending] = useState(true);
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/products").then((data) => {
        console.log("triggered");
        setpending(false);
        return setdata(data?.data);
      });
    }, 1000);
  }, [start]);

  return (
    <div>
      {data && <Blogs blogs={data} blogs1={setstart} blogs2={start} setdata1={setdata1} setLen={setLen} value2={value2}  ></Blogs>}
      <br />
      <br />
      {pending && <Div>Loading....</Div>}
    </div>
  );
};
export default Home;
