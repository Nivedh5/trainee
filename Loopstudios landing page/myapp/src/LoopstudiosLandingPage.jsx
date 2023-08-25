import MainProfile from "./landingPageSection1"
import BodySection from "./landingPageSection2"
import Grid from "./landingPageSection3"
import FooterSection from "./landingPageFooter"
import { styled } from "styled-components"


const MainBody=styled.div`
width:100%;
height:100vh;`

function LandingPage(){
    return(
        <MainBody>
       <MainProfile/>
       <BodySection/>
        <Grid/>
       <FooterSection/>
        </MainBody>
            )
        }
        export default LandingPage
