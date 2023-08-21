import { styled } from "styled-components";
import { useState } from "react";
import { Button, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import Svg from "./Svgs/svg.svg"
import MainSvg from "./Svgs/Svg";

const Span = styled.span`
  padding: 16px;
  color: hsl(0, 0%, 100%);
  font-family: "Alata", sans-serif;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  @media (max-width: 400px) {
    display: none;
  }
`;
const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(228, 231, 234, 0.5);
`;
const Body = styled.div`
  // margin-left:400px;
  // margin-top:200px;
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
  width:655px;
  background-color:whitesmoke;
  &:hover {
    scale: 1.03;
  }
`;
// const Save=styled.span`
// padding:8px;`
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 20px;
  
`;
const EditMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 500px;
`;
const AddDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 20px;
`;
const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  margin: 30px;
`;
const Products = styled.span`
  margin-left: 20px;
  margin-top: 6px;
`;
const CancelSpan = styled.span`
  margin-right: 8px;
  color: blue;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const InputSpan = styled.span`
  width: 500px;
`;
const SvgDiv=styled.div`
display:flex;`
const SvgSpan=styled.span`
margin-top:15px;
margin-right:12px;
color:grey;`

function About(props) {
  console.log(props);
 const{edit,setEdit}=props;
  // const[inputStore,setInputStore]=useState([{value:''}])
  const [inputFields, setInputFields] = useState([{ id: 0, value: "",originalValue:'' }]);
  // const[save,setSave]=useState(true)
  // const [Render,SetRender]=useState(true)
  const addInputField = () => {
    setInputFields([...inputFields, { id: inputFields.length, value: "",orginalValue:''}]);
  };
  const handleInputChange = (id, event) => {
  const newInputFields = inputFields.map((object) => {
      if (object.id === id) {
        return { ...object, value: event.target.value };
      }
      return object;
    })

    setInputFields(newInputFields);
  };
  const handleClick = (event) => {
    event.preventDefault();
    setEdit(false);
     const updatedInputFields = inputFields.map((field) => ({
      ...field,
      originalValue: field.value,
    }));
    setInputFields(updatedInputFields);
  };
  const handleEdit = () => {
    setEdit(true);
  };
  const handleDelete = (id) => {
    const newData = inputFields.filter((Field) => Field.id !== id);
    setInputFields(newData);
  };
  const handleCancel = () => {
    setEdit(false);
    const resetInputFields = inputFields.map((field) => ({ ...field, value: field.originalValue }));
    setInputFields(resetInputFields);
      }
  
  return (
    <MainBody>
        
      <Body>
        <div>
          <div>
            <EditMain>
              <div>
                <span>Description</span>
                <h5>
                  Despite being an electronic product (bound to have a lot of
                  technical jargon), the brand has used an informal tone and
                  simple language to highlight the features and benefits of the
                  product. This is important because it makes the product
                  description quite engaging and conversational.{" "}
                </h5>
              </div>
              <div>
                <span>
                  <EditOutlined  />
                </span>
              </div>
            </EditMain>
           
          </div>
        </div>
      </Body>
      <Body>
        <div>
          <div>
            <EditMain>
              <div>
                <span>NPS SCORE</span>
                <h6>
                  Net Promoter Score:0
                </h6>
                <div>
               
                </div>
              </div>
              <div>
                <span>
                  <EditOutlined  />
                </span>
              </div>
            </EditMain>
           
          </div>
        </div>
      </Body>
      <Body>
       <div>
            <div>
              <EditMain>
                <div>
                  <span>Year Started</span>
                </div>
                <div>
                  <span>
                    <EditOutlined/>
                  </span>
                </div>
              </EditMain>
            </div>
          </div>
          </Body>
      <Body>
        {edit ? (
          <div>
            <form onSubmit={handleClick}>
              <Main>
                <div>
                  <span>Products & Service offered</span>
                </div>
                <div>
                  <CancelSpan onClick={handleCancel}> Cancel</CancelSpan>
                  <Button
                    type="primary"
                    htmlType="submit"
                    id="save"
                    style={{ height: "30px", width: "70px" }}
                  >
                    Save
                  </Button>
                </div>
              </Main>
              <InputDiv>
                {inputFields.map((inputValue, index) => (
                  <Field className="input-container">
                    <InputSpan>
                      <Input
                        key={index}
                        type="text"
                        required
                        value={inputValue.value}
                        className="about-input"
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Enter Products and Services"
                      />{" "}
                    </InputSpan>
                    <DeleteOutlined 
                    id="delete"
                      onClick={() => handleDelete(inputValue.id)}
                    />
                  </Field>
                ))}
              </InputDiv>
            </form>
            <AddDiv>
              {/* <Button type="primary" shape="circle" icon="plus"  /> */}
              <Button
                type="primary"
                shape="circle"
                icon={<DownloadOutlined className="add-button" onClick={addInputField} />}
              />

              <Products>Add Products</Products>
            </AddDiv>
          </div>
        ) : (
          <div>
            <div>
              <EditMain>
                <div>
                  <span>Products & Service offered</span>
                </div>
                <div>
                  <span>
                    <EditOutlined id="edit" onClick={handleEdit} />
                  </span>
                </div>
              </EditMain>
              {inputFields.map((obj) => {
                return(
                  <>
                  {
                    obj.value?<SvgDiv><SvgSpan><MainSvg/></SvgSpan>
                    <SvgSpan>{obj.value}</SvgSpan></SvgDiv>:("")
                  }
                  </>
                  
                )
                
})}

            </div>
          </div>
        )}
      </Body>
    </MainBody>
  );
}
export default About;