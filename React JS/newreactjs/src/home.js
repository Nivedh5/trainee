import { styled } from "styled-components"

// import Link from "antd/es/typography/Link";
const Home1=()=>{
    const Div=styled.div`
    justify-content:center;
    display:flex;
    align-items:center;
    height:80vh;
    color:red;`
    return(
        <Div>
            <h1>Welcome</h1>
        </Div>
    )
}
export default Home1