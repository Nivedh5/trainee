import {FourthDiv,
    FourthSubDiv,
    ImageDiv1,
    ImageDiv2,
    ImageDiv3,
    ImageDiv4,
    ImageDiv5,
    ImageDiv6,
    ImageDiv7,
    ImageDiv8,
    GridName,
    Empty} from "./ landingPageStyles"

function Grid(){
    return(
<div>
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
        </div>
    )
}
export default Grid