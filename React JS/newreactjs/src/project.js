import { styled } from "styled-components"
import './project.css'
import img from'./image-interactive.jpg'
import img1 from "./image-deep-earth.jpg"
import img2 from "./image-night-arcade.jpg"
import img3 from "./image-soccer-team.jpg"
import img4 from "./image-grid.jpg"
import img5 from "./image-from-above.jpg"
import img6 from "./image-pocket-borealis.jpg"
import img7 from "./image-curiosity.jpg"
import img8 from "./image-fisheye.jpg"


const Body=styled.div`
width:100%;
height:100vh;`
const Header=styled.header`
height:26%;
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:auto;
margin-right:auto;`

const ProfileContainer=styled.div`
width:100%;
height:80vh;
display:flex;
// justify-content:center;
flex-direction:column;
`
const Span=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:15px;
font-weight:300;
cursor:pointer;
`
const TitleSpan=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:40px;
font-weight:400;
cursor:pointer;
`
const LetterDiv=styled.div`
width:78%;
height:50%;
display:flex;
align-items:center;
margin-right:auto;
margin-left:auto;
padding:16px;
`
const SubDiv=styled.div`
width:530px;
height:170px;
padding:30px;
border:2px solid white;
// text-align: center;

`

const WordSpan=styled.span`
font-size:58px;
font-family: 'Josefin Sans', sans-serif;
color:hsl(0, 0%, 100%);`

const MiddleContainer=styled.div`
display:flex;
height:105vh;
width:100%;
background-color:hsl(0, 0%, 100%);
justify-content:center;
align-items:center;
`
const ImageDiv=styled.div`
width:40%;
justify-content:center;
align-items:center;`
const Wordings=styled.div`
width:35%;
height:320px;
padding:24px;
background-color:white;
display:flex;
flex-direction:column;
align-item:center;
margin-top:325px;

`
const WordingsSpan=styled.span`
font-size:42px;
margin:32px 32px 0px 32px;
font-family: 'Josefin Sans', sans-serif;
color:black;
padding:24px 24px 0px 24px;
`
const Paragraph=styled.p`
font-family: 'Alata', sans-serif;
margin:24px 24px 24px 56px;
font-size:14px;
color:grey;`
const ThirdContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
`
const Head=styled.header`
width:87%;
height:150px;
display:flex;
// margin:24px;
justify-content:space-between;
`
const CreationSpan=styled.div`
font-size:16px;
font-family: 'Josefin Sans', sans-serif;
font-weight:600;
margin-right:10px
`
const CreationDiv=styled.div`
border:2px solid black;
display:flex;
width:120px;
height:35px;
justify-content:center;
align-items:center;
margin-right:9%;`
const EmptyDiv=styled.div`
width:100px;`

const FourthDiv=styled.div`
width:100%;
display:flex;

justify-content:center;
`
const FourthSubDiv=styled.div`
width:79%;
margin-right:3%;
display:grid;
grid-template-columns: auto auto auto auto;
row-gap:30px;`

const ImageDiv1=styled.div`
background-image: url(${img1});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv2=styled.div`
background-image: url(${img2});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv3=styled.div`
background-image: url(${img3});
width:256px;
height:450px;
display:flex;
align-items:end;


`
const ImageDiv4=styled.div`
background-image: url(${img4});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv5=styled.div`
background-image: url(${img5});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv6=styled.div`
background-image: url(${img6});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv7=styled.div`
background-image: url(${img7});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const ImageDiv8=styled.div`
background-image: url(${img8});
width:256px;
height:450px;
display:flex;
align-items:end;
`
const GridName=styled.span`
color:hsl(0, 0%, 100%,100%);
font-size:24px;
font-family: 'Josefin Sans', sans-serif;
padding:28px;
font-weight:400;
line-height: 1.2;
`
const Footer=styled.footer`
width:100%;
height:150px;
// margin-top:200px;
background-color:black;
`
const SubFooter=styled.footer`
width:80%;
`
const LeftFooter=styled.footer`
`
const RightFooter=styled.footer`
`
const Empty=styled.div`
height:180px;`

function Project(){
    return(
<Body>
<ProfileContainer id="profileContainer">
<Header>
    <leftDiv>
    <TitleSpan>loopstudios</TitleSpan>
    </leftDiv>
    <rightDiv>
    <Span>About</Span>   
    <Span>Careers</Span>
    <Span>Events</Span>
    <Span>Products</Span>
    <Span>Support</Span>
    <Span></Span> 
    </rightDiv>
</Header>
<LetterDiv>
<SubDiv>
<WordSpan>IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</WordSpan>
</SubDiv>

</LetterDiv>
</ProfileContainer>
<MiddleContainer>
  <ImageDiv>
    <img src={img} alt="image"/>
  </ImageDiv>
  <Wordings>
   <WordingsSpan>THE LEADER IN INTERACTIVE VR</WordingsSpan>
   <Paragraph>Founded in 2011, loopstudios has been producing world-class <br/> virtual reality projects for some of the best companies around the <br/>globe.Our award-winning creations have transformed <br/> businesses through digital experience that bind to their brand</Paragraph>
  </Wordings>
</MiddleContainer>
<ThirdContainer>
<Head>
 <div>
<WordingsSpan>OUR CREATIONS</WordingsSpan>
</div>
<EmptyDiv>

</EmptyDiv>
<CreationDiv>
    <CreationSpan>SEE ALL</CreationSpan>
</CreationDiv>
</Head>
</ThirdContainer>
<FourthDiv>
<FourthSubDiv>
<ImageDiv1><GridName>DEEP <br/> EARTH</GridName></ImageDiv1>
<ImageDiv2><GridName>NIGHT <br/> ARCADE</GridName></ImageDiv2>
<ImageDiv3><GridName>SOCCER <br/> TEAM VR</GridName></ImageDiv3>
<ImageDiv4><GridName>THE<br/> GRID</GridName></ImageDiv4>
<ImageDiv5><GridName>FROM UP <br/> ABOVE VR</GridName></ImageDiv5>
<ImageDiv6><GridName>POCKET <br/> BOREALIS</GridName></ImageDiv6>
<ImageDiv7><GridName>THE<br/> CURIOSITY</GridName></ImageDiv7>
<ImageDiv8><GridName>MAKE IT<br/> FISHEYE</GridName></ImageDiv8>
</FourthSubDiv>
</FourthDiv>
<Empty>

</Empty>
<Footer>
<SubFooter>
<LeftFooter>
<span>loopstudios</span>

</LeftFooter>
<RightFooter>

</RightFooter>
</SubFooter>
</Footer>
</Body>

    )
}
export default Project