import MainProfile from "./landingPageSection1"
import BodySection from "./landingPageSection2"
import Grid from "./landingPageSection3"
import FooterSection from "./landingPageFooter"
import { styled } from "styled-components"
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Action from './quickActions';
import About from './About';


const MainBody=styled.div`
width:100%;
height:100vh;`

function LandingPage(){
    return(
        <div>
        <MainBody>
       <MainProfile/>
       <BodySection/>
        <Grid/>
       <FooterSection/>
        </MainBody>
        </div>
            )
        }
        export default LandingPage
