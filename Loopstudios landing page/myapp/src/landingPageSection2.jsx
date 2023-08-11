import { MiddleContainer,
    ImageDiv,
    VrImage,
    Wordings,
    WordingsSpan,
    Paragraph,
    ThirdContainer,
    Head,
    CreationSpan,
    CreationDiv,
    EmptyDiv} from "./ landingPageStyles"
    import img from "./Images/image-interactive.jpg"

    function BodySection(){
      return(
        <div>
    <MiddleContainer>
          <ImageDiv>
            <VrImage src={img} alt="bgimage"/>
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
    </div>
      )
    }
    export default BodySection