import {
Header,
ProfileContainer,
Span,
MenuItem,
Li,
Ul,
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


function MainProfile(){
    const [btnClick,setClick]=useState(false)
    
    const DisplayList =()=>{
        setClick(!btnClick)
        
    }
    
    return(
<ProfileContainer>
        <Header>
            <leftDiv>
            <TitleSpan>loopstudios</TitleSpan>
            </leftDiv>
            <rightDiv>
       <Span><Link to="/About">About</Link></Span>
       <Span>Home</Span>
            <Span>Careers</Span>
            <Span>Events</Span>
          <Span><Link to="/Action">Products</Link></Span>
            <Span>Support</Span>
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