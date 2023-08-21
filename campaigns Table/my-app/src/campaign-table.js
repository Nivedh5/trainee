import styled from "styled-components"
import MenuSvg from "./svg/menuSvg"
import CampaignTable from "./Table"


const Header=styled.div`
// width: 1179.997px;
height: 42px;
flex-shrink: 0;
background-color:#E4E7EA;
display:flex;
justify-content:space-between;
align-items:center;
// margin:19px;

`
const Campaigns=styled.span`
color: #3A4A5B;
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 86.926px;
// padding:16px;
margin:11px 0px 10px 19.98px; 

`
const Svg=styled.span`
width: 15.986px;
height: 16px;
flex-shrink: 0;
opacity: 0.3;
padding:16px;
margin:13px 38px 13px 0px;`

const Body=styled.div`
margin:19px;
`
const Table = () => {
    return ( 
        <Body>
            <Header>
                <Campaigns>Campaigns</Campaigns>
                <Svg><MenuSvg/></Svg>
            </Header>
            <div>
             <CampaignTable/>
             </div>
        </Body>
     );
}
 
export default Table;