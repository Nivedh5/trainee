import {
Header,
ProfileContainer,
Span,
MenuItem,
Li,
Ul,LinkTag,
Menu,
Menus,
BurgerSvg,
TitleSpan,
Letter,
SubDiv,
WordSpan} from "./ landingPageStyles";
import About from "./About";
import burgerSvg from "./Svgs/icon-hamburger.svg";
import Close from "./Svgs/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form, Input } from 'antd';

function MainProfile(props){
    const [btnClick,setClick]=useState(false)
    const [visible, setVisible] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [form] = Form.useForm();
    const{Render,SetRender,auth,setAuth}=props
    const DisplayList =()=>{
        setClick(!btnClick)
        
    }
    const handleLogin = () => {
        const { username, password } = form.getFieldsValue();
    
        // Custom validation logic
        if (username === 'nivedh' && password === 'nivedh') {
          setIsLoggedin(true);
          setVisible(false);
          
          setAuth(true)
        } else {
          setAuth(false)
         setTimeout(() => {
            alert("username or Password is wrong")
          }, );
        }
      };
    
      const showModal = () => {
        setVisible(true);
      };
    
      const handleCancel = () => {
        setVisible(false);
        form.resetFields();
      };
    
    return(
<ProfileContainer>
        <Header>
            <leftDiv>
            <TitleSpan>loopstudios</TitleSpan>
            </leftDiv>
            <rightDiv>
       <Span>About</Span>
       <Span>Home</Span>
            <Span>Careers</Span>
            <Span>Events</Span>
          <Span id="profile" onClick={showModal}>Profile Login</Span>
          <Modal
            title="Login"
            visible={visible}
            onCancel={handleCancel}
            footer={[
             <Link to="/Profile"> <Button key="login" type="primary" id="login-button" onClick={handleLogin}>
                Login
              </Button></Link>,
            ]}
          >
            <Form form={form}>
              <Form.Item  label="Username" name="username" rules={[{ required: true, message: 'Please enter your username.' }]}>
                <Input id="username" placeholder="Enter your username" />
              </Form.Item>
              <Form.Item  label="Password" name="password" rules={[{ required: true, message: 'Please enter your password.' }]}>
                <Input.Password id="password" placeholder="Enter your password" />
              </Form.Item>
            </Form>
          </Modal>
            <Span>Support</Span>
            <BurgerSvg onClick={DisplayList} ><img src={burgerSvg} alt="burger"/></BurgerSvg>
            </rightDiv>
        </Header>
        <Ul isDisplay={btnClick}>
                <MenuItem >
                <Menus>
                    <Menu>Loopstudios</Menu>
                    <span><img src={Close}alt="close"/></span>
                </Menus>
                <br/>
                <br/>
                <Li>About</Li>
                <Li>Careers</Li>
                <Li>Events</Li>
                <Li>Products</Li>
                <Li>Support</Li>
                </MenuItem>
            </Ul> 
        <Letter>
        <SubDiv>
        <WordSpan>IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER</WordSpan>
        </SubDiv>
        
        </Letter>
 </ProfileContainer>
    )
}
export default MainProfile