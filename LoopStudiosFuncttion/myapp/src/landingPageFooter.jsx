import { Footer,
    SubFooter,
    LeftFooter,
    RightFooter,
    FooterTitle,
    FooterWord,
    IconFooter,
    CopyRights,
    Icons} from "./ landingPageStyles"

import FaceBook from "./Svgs/icon-facebook.svg"
import Instagram from "./Svgs/icon-instagram.svg"
import Pinterest from "./Svgs/icon-pinterest.svg"
import twitter from "./Svgs/icon-twitter.svg"

    function FooterSection(){
        return(
        <Footer>
        <SubFooter>
        <LeftFooter>
        <div>
          <FooterTitle>loopstudios</FooterTitle>
          </div>
        <Icons>
         <IconFooter><img src={FaceBook} alt="img1"/></IconFooter>
         <IconFooter><img src={twitter} alt="img2"/></IconFooter>
         <IconFooter><img src={Pinterest} alt="img3"/></IconFooter>
         <IconFooter><img src={Instagram} alt="img4"/></IconFooter>
        </Icons>
        </LeftFooter>
        <RightFooter>
        <div>
         <FooterWord>About</FooterWord>
          <FooterWord>Career</FooterWord>
          <FooterWord>Events</FooterWord>
          <FooterWord>Products</FooterWord>
          <FooterWord>Support</FooterWord>
         </div>
         <div>
         <CopyRights>© 2021 Loopstudios. All rights reserved.</CopyRights>
         </div>
        </RightFooter>
        </SubFooter>
        </Footer>
        )
    }
    export default FooterSection