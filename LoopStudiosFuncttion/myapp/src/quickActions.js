import { styled } from "styled-components"
import {ExclamationCircleOutlined,CaretRightOutlined} from '@ant-design/icons'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import About from "./About"
import { Progress } from 'antd';
import { useState } from "react";



const Div=styled.div`
height:70px;
display:flex;
width:650px;
justify-content:space-between;
padding:28px;
border:1px solid black;
background-color:whitesmoke;
&:hover{
    scale:1.03
}
`
const Wordings=styled.div`
display:flex;
flex-direction:column;
// height:70px;
justify-content:center;
`
const Icon=styled.div`
display:flex;
align-items:center;
margin-right:18px;
// height:70px;`
const WordingSpan=styled.span`
width:150px;`
const RightDiv=styled.div`
display:flex;
align-items:center;`
const LeftDiv=styled.div`
display:flex;`
const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
cursor:pointer`
const Btn=styled(CaretRightOutlined)`
cursor:pointer;`
const IconAdd=styled.span`
cursor:pointer;
height:25px;
width:20px;
&:hover{
background-color:grey;
}`
const Body=styled.div`
background-color:white;
padding:20px;
width:700px;
height:600px;

border: 2px solid rgba(228, 231, 234, 0.5); `
const MainBody=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
height:70px;
width:740px;
border: 2px solid rgba(228, 231, 234, 0.5);
margin:12px;`
const MenuSpan=styled.div`
// min-height: 42px;
position: relative;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: rgb(27, 99, 169);
padding: 10px 20px;
cursor: pointer;
background-color: rgb(250, 252, 253);
border: 1px solid rgb(27, 99, 169);
border-radius: 20px;
margin:10px;
`
const AboutSpan=styled.div`
// min-height: 42px;
position: relative;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: ${props=>(props.aboutColor?'rgb(27, 99, 169)':'white')};
padding: 10px 20px;
cursor: pointer;
background-color: ${props => (props.aboutColor ? 'rgb(250, 252, 253)' : 'rgb(27, 99, 169)')};
border: 1px solid rgb(27, 99, 169);
border-radius: 20px;
margin:10px;
`
const ActionSpan=styled.div`
// min-height: 42px;
position: relative;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: ${props=>(props.color?'rgb(27, 99, 169)':'white')};
padding: 10px 20px;
cursor: pointer;
background-color: ${props => (props.color ? 'rgb(250, 252, 253)' : 'rgb(27, 99, 169)')};
border: 1px solid rgb(27, 99, 169);
border-radius: 20px;
margin:10px;
`
function Action(props){
    const {Render,SetRender,auth,setAuth}=props;
    const [content,setContent]=useState(true)
    const[edit,setEdit]=useState(false)
    const[color,setColor]=useState(false)
    const[aboutColor,setAboutColor]=useState(true)

    const openAbout = ()=>{
        setContent(false)
        setEdit(false)
        setColor(true)
        setAboutColor(false)
    }
    const openActions=()=>{
        setColor(false)
        setAboutColor(true)
        setContent(true)
        
    }
   
    const handleRoute=()=>{
        setContent(false)
        setEdit(true)
        setAboutColor(false)
        setColor(true)

    }
    const handleLogout=()=>{
     setAuth(false)
    }
    return(
        <div>
       <MainBody>
            <Menu>
                    <ActionSpan color={color} onClick={openActions}>Quick Actions</ActionSpan>
                    <MenuSpan>Review</MenuSpan>
                    <MenuSpan>Rattings</MenuSpan>
                    <AboutSpan aboutColor={aboutColor} onClick={openAbout}>About</AboutSpan>
                    <MenuSpan>Contact</MenuSpan>
                    <MenuSpan id="logout" onClick={handleLogout}>Logout</MenuSpan>
            </Menu>
            {content? <Body>
            <h3>Complete Your Profile</h3>
            <h5>Improve Your Search Ranking and help your customers with a complete profile</h5>
            <span>    <Progress percent={50} showInfo={false} />
</span>
<h5>7 Steps to Imptove Your Profile</h5>
        <Container>
            <Div>
                <RightDiv>
                <Icon>
                    <span><ExclamationCircleOutlined /></span>
                </Icon>
                <Wordings>
               <WordingSpan>Update Products & Services offered</WordingSpan>
               <WordingSpan>Complete the action and get 5 points .</WordingSpan>
               </Wordings>
               </RightDiv>
             
            <RightDiv>
             <IconAdd><CaretRightOutlined id="Route" onClick={handleRoute}/></IconAdd>
            </RightDiv>
            </Div>
            
        </Container>
        <Container>
            <Div>
                <RightDiv>
                <Icon>
                    <span><ExclamationCircleOutlined /></span>
                </Icon>
                <Wordings>
               <WordingSpan>Update License</WordingSpan>
               <WordingSpan>Complete the action and get 5 points .</WordingSpan>
               </Wordings>
               </RightDiv>
             
            <RightDiv>
            <IconAdd><CaretRightOutlined /></IconAdd>
            </RightDiv>
            </Div>
            
        </Container>
        <Container>
            <Div>
                <RightDiv>
                <Icon>
                    <span><ExclamationCircleOutlined /></span>
                </Icon>
                <Wordings>
               <WordingSpan>Update Achievements</WordingSpan>
               <WordingSpan>Complete the action and get 5 points .</WordingSpan>
               </Wordings>
               </RightDiv>
             
            <RightDiv>
            <IconAdd><CaretRightOutlined  /></IconAdd>
            </RightDiv>
            </Div>
            
        </Container>
        </Body>:<About edit={edit}setEdit={setEdit}/>}
        </MainBody>
        </div>


    )
}
export default Action