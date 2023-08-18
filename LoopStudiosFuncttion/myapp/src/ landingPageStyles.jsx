import {styled} from "styled-components"
import img1 from "./Images/image-deep-earth.jpg"
import img2 from "./Images/image-night-arcade.jpg"
import img3 from "./Images/image-soccer-team.jpg"
import img4 from "./Images/image-grid.jpg"
import img5 from "./Images/image-from-above.jpg"
import img6 from "./Images/image-pocket-borealis.jpg"
import img7 from "./Images/image-curiosity.jpg"
import img8 from "./Images/image-fisheye.jpg"
import profile from "./Images/image-hero.jpg";
import mobileProfile from "./Images/mobileImages/image-hero.jpg"
import mobileImg1 from "./Images/mobileImages/image-deep-earth.jpg"
import mobileImg2 from "./Images/mobileImages/image-night-arcade.jpg"
import mobileImg3 from "./Images/mobileImages/image-soccer-team.jpg"
import mobileImg4 from "./Images/mobileImages/image-grid.jpg"
import mobileImg5 from "./Images/mobileImages/image-from-above.jpg"
import mobileImg6 from "./Images/mobileImages/image-pocket-borealis.jpg"
import mobileImg7 from "./Images/mobileImages/image-curiosity.jpg"
import mobileImg8 from "./Images/mobileImages/image-fisheye.jpg";
import { Link } from "react-router-dom"

export const Header=styled.header`
height:26%;
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:auto;
margin-right:auto;
@media (max-width:400px){
    width:85%;
    height:15%;
}`

export const ProfileContainer=styled.div`
background-image: url(${profile});
width:100%;
height:80vh;
display:flex;
// justify-content:center;
flex-direction:column;
@media (max-width:400px){
background-image: url(${mobileProfile});
width:750px;
height:1300px;

}
`
export const Span=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:15px;
font-weight:300;
cursor:pointer;
@media (max-width:400px){
display:none;
}
`
export const BurgerSvg=styled.span`
display:none;
@media (max-width:400px){
    display:block;
   
}
`
export const LinkTag=styled(Link)`
color:white;
`
export const  MenuItem=styled.div`
width:250px;
height:300px;
background-color:black;
padding:16px;
translate:376px -80px;
display:block;    
`
export const Li=styled.li`
font-size:18px;
padding:8px;
font-family: 'Alata', sans-serif;
color:white;
`
export const Ul=styled.ul`
display:none;

@media (max-width:400px){
list-style-type:none;
display:${(props)=>(props.isDisplay ? "block" :"none")};}
`
export const Menu=styled.span`
color:white;
font-size:20px;
font-family: 'Alata', sans-serif;
`
export const Menus=styled.div`
display:flex;
width:240px;
justify-content:space-between;
`
export const TitleSpan=styled.span`
padding:16px;
color: hsl(0, 0%, 100%);
font-family: 'Alata', sans-serif;
font-size:40px;
font-weight:400;
cursor:pointer;
@media (max-width:400px){
    padding:1px;
`
export const Letter=styled.div`
width:78%;
height:50%;
display:flex;
align-items:center;
margin-right:auto;
margin-left:auto;
padding:16px;

@media (max-width:400px){
    height:60%;
    width:63%;
    padding:24px;
    }
`
export const SubDiv=styled.div`
width:530px;
height:170px;
padding:30px;
border:2px solid white;
// text-align: center;
@media(max-width:400px){
    height:220px;
}

`

export const WordSpan=styled.span`
font-size:58px;
font-family: 'Josefin Sans', sans-serif;
color:hsl(0, 0%, 100%);
`

export const MiddleContainer=styled.div`
display:flex;
height:105vh;
width:100%;
background-color:hsl(0, 0%, 100%);
justify-content:center;
align-items:center;
@media (max-width:400px){
   width:710px;
   height:1200px;
   align-items:center ;
   flex-direction:column;
   justify-content:space-evenly;
}
`
export const ImageDiv=styled.div`
width:40%;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:400px){
    width:790px;
    display:flex;
    justify-content:center;
`
export const VrImage=styled.img`
@media (max-width:400px){
    width:650px;
    height:448px;
    margin-left:6%;
}
`
export const Wordings=styled.div`
width:35%;
height:320px;
padding:24px;
background-color:white;
display:flex;
flex-direction:column;
align-item:center;
margin-top:325px;
@media (max-width:400px){
 width:100%;
margin-top:0px;
text-align:center;
width:65%;
 }

`
export const WordingsSpan=styled.span`
font-size:42px;
margin:32px 32px 0px 32px;
font-family: 'Josefin Sans', sans-serif;
color:black;
padding:24px 24px 0px 24px;
`
export const Paragraph=styled.p`
font-family: 'Alata', sans-serif;
margin:24px 24px 24px 56px;
font-size:14px;
color:grey;
@media (max-width:400px){
font-size:20px;

 }`
export const ThirdContainer=styled.div`
width:100%;
display:flex;
justify-content:center;
@media (max-width:400px){
    height:350px;
    width:750px;
    align-Items:center;
    }
`
export const Head=styled.header`
width:87%;
height:150px;
display:flex;
// margin:24px;
justify-content:space-between;
@media (max-width:400px){
    height:300px;
    align-Items:center;
   
   
    }
`
export const CreationSpan=styled.div`
font-size:16px;
font-family: 'Josefin Sans', sans-serif;
font-weight:600;
margin-right:10px
`
export const CreationDiv=styled.div`
border:2px solid black;
display:flex;
width:120px;
height:35px;
justify-content:center;
align-items:center;
margin-right:9%;
@media (max-width:400px){
    margin-right:2%;
    }`
export const EmptyDiv=styled.div`
width:100px;`

export const FourthDiv=styled.div`
width:100%;
display:flex;
justify-content:center;
`
export const FourthSubDiv=styled.div`
width:80%;
margin-right:3%;
display:grid;
grid-template-columns: auto auto auto auto;
row-gap:30px;
// column-gap:10px;
@media (max-width:400px){
    grid-template-columns: auto ;
    width:71%;

}
`

export const ImageDiv1=styled.div`
background-image: url(${img1});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
 background-image: url(${mobileImg1});
    width:654px;
    height:240px

`
export const ImageDiv2=styled.div`
background-image: url(${img2});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg2});
    width:654px;
    height:240px
`
export const ImageDiv3=styled.div`
background-image: url(${img3});
width:256px;
height:450px;
display:flex;
align-items:end;

@media (max-width:400px){
    background-image: url(${mobileImg3});
    width:654px;
    height:240px

`
export const ImageDiv4=styled.div`
background-image: url(${img4});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg4});
    width:654px;
    height:240px
`
export const ImageDiv5=styled.div`
background-image: url(${img5});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg5});
    width:654px;
    height:240px
`
export const ImageDiv6=styled.div`
background-image: url(${img6});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg6});
    width:654px;
    height:240px
`
export const ImageDiv7=styled.div`
background-image: url(${img7});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg7});
    width:654px;
    height:240px
`
export const ImageDiv8=styled.div`
background-image: url(${img8});
width:256px;
height:450px;
display:flex;
align-items:end;
@media (max-width:400px){
    background-image: url(${mobileImg8});
    width:654px;
    height:240px
`
export const GridName=styled.span`
color:hsl(0, 0%, 100%,100%);
font-size:24px;
font-family: 'Josefin Sans', sans-serif;
padding:28px;
font-weight:400;
line-height: 1.2;
`
export const Footer=styled.footer`
width:100%;
height:150px;
// margin-top:200px;
background-color:black;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:400px){
    width:750px;
}
`
export const SubFooter=styled.footer`
width:90%;
// display:flex;
// justify-content:space-between;
`
export const LeftFooter=styled.footer`
height:50px;
display:flex;
// flex-direction:column;
justify-content:space-between;
@media(max-width:400px){
    width:670px;
 }
`
export const RightFooter=styled.footer`
height:50px;
display:flex;
// flex-direction:column;
justify-content:space-between;
@media(max-width:400px){
   width:670px;
}

`
export const Empty=styled.div`
height:180px;`
export const FooterTitle=styled.span`
color:hsl(0, 0%, 100%,100%);
padding:16px;
font-size:20px;
font-weight:400;
font-family: 'Alata', sans-serif;`

export const FooterWord=styled.span`
color:hsl(0, 0%, 100%,100%);
font-size:14px;
font-family: 'Alata', sans-serif;
padding:16px;
cursor:pointer;
`
export const IconFooter=styled.span`
padding:16px 8px 8px 8px;
`
export const CopyRights=styled.span`
color:hsl(0, 0%, 41%);
font-size:12px;
font-family: 'Alata', sans-serif;
padding:8px;
@media(max-width:400px){
   
}
`
export const Icons=styled.div`
margin-top:0.5%;
`