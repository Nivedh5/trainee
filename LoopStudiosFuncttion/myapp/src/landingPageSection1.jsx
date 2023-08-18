import {
Header,
ProfileContainer,
Span,
MenuItem,
Li,
Ul,LinkTag,
Menu,
Menus,
BurgerSvg,
TitleSpan,
Letter,
SubDiv,
WordSpan} from "./ landingPageStyles";
import About from "./About";
import burgerSvg from "./Svgs/icon-hamburger.svg";
import Close from "./Svgs/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";


function MainProfile(props){
    const [btnClick,setClick]=useState(false)
    const {Render,SetRender,auth,setAuth}=props
    
    const DisplayList =()=>{
        setClick(!btnClick)
        
    }
    const handleRender=()=>{
        SetRender(false)
    }

   

    const Logout = ()=>{
        setAuth(false)
    }

    const Login = ()=>{
        setAuth(true)
    }
    
    return(
<ProfileContainer>
        <Header>
            <leftDiv>
            <TitleSpan>loopstudios</TitleSpan>
            </leftDiv>
            <rightDiv>
       <Span onClick={handleRender}><LinkTag to="/About">About</LinkTag></Span>
       <Span>Home</Span>
            <Span>Careers</Span>
            <Span>Events</Span>
          <Span><LinkTag to="/Action">Products</LinkTag></Span>
            <Span>Support</Span>
            {auth?<Span><button onClick={Logout}>log out</button></Span>:<Span><button onClick={Login}>log in</button></Span>}
            <BurgerSvg onClick={DisplayList} ><img src={burgerSvg} alt="burger"/></BurgerSvg>
            </rightDiv>
        </Header>
        <Ul isDisplay={btnClick}>
                <MenuItem >
                <Menus>
                    <Menu>Loopstudios</Menu>
                    <span><img src={Close}alt="close"/></span>
                </Menus>
                <br/>
                <br/>
                <Li>About</Li>
                <Li>Careers</Li>
                <Li>Events</Li>
                <Li>Products</Li>
                <Li>Support</Li>
                </MenuItem>
            </Ul> 
        <Letter>
        <SubDiv>
        <WordSpan>IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</WordSpan>
        </SubDiv>
        
        </Letter>
 </ProfileContainer>
    )
}
export default MainProfile