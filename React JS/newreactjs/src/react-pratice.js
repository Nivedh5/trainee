import styled from "styled-components"

export const Btn=styled.button`
background-color: aquamarine;
font-weight: 600;
`;





const [color,change]=useState('')
  const [bgColor, setBgColor] = useState(color);
   const changeColor =()=>{
      setBgColor(color);
   }
  return (
    <Div style={{backgroundColor:bgColor}}>
    <Div1 >
    <input type="text" onChange={event=>change(event.target.value)}></input>
    <Btn backgroundColor="red" onClick={changeColor}>click here</Btn>
    </Div1>
    </Div>