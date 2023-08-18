import { styled } from "styled-components"
import {ExclamationCircleOutlined,CaretRightOutlined} from '@ant-design/icons'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import About from "./About"
import { Progress } from 'antd';



const Div=styled.div`
height:70px;
display:flex;
width:650px;
justify-content:space-between;
padding:28px;
border:1px solid black;
background-color:whitesmoke;
&:hover{
    scale:1.05
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
justify-content:center;
align-items:center;`

function Action(props){
    const {Render,SetRender}=props;
    const handleChange=()=>{
      SetRender(true)
      {
      <Router>
      <Routes>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
       }
    }
    return(
        <MainBody>
        <Body>
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
             <IconAdd><Link to="/About"><CaretRightOutlined onClick={handleChange} /></Link></IconAdd>
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
            <IconAdd><CaretRightOutlined onClick={handleChange}/></IconAdd>
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
            <IconAdd><CaretRightOutlined onClick={handleChange} /></IconAdd>
            </RightDiv>
            </Div>
            
        </Container>
        </Body>
        </MainBody>
    )
}
export default Action