import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

const Header = styled.header`
height:70px;
width 100%;
padding:16px;

`;
const Span = styled.span`
  margin: 100px;
  padding: 16px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-left: 500px;
  border: 2px solid white;
  background-color: grey;
  border-collapse: collapse;
  box-shadow: 2px 2px 3px 3px whitesmoke;
  padding: 16px;
`;

const H3 = styled.h4``;
const Btn = styled.button`
  height: 50px;
  width: 55px;
  font-size: 30px;
  margin-top: 10px;
  align-items: center;
  background-color: grey;
  border: none;
  cursor: pointer;
`;
const Div3 = styled.div`
  text-align: center;
`;

const Cart = ({ cart, setLen, setvalue2 }) => {
  console.log(cart);
  const total = cart?.reduce((total1, cart) => total1 + Number(cart?.price), 0);
  //  setLen(cart.length)

  const deleteBtn = (index) => {
    const newData = cart?.filter((element, i) => i !== index);
    setLen(cart?.length - 1);
    console.log(newData);
    setvalue2(newData);
  };

  return (
    <div>
      {total > 0 && (
        <Div>
          <h3>Cart Title</h3>
          <h3>Price</h3>
          <h3>Cart Delete </h3>
        </Div>
      )}
      {total > 0 &&
        cart?.map((data, index) => {
          return (
            <Div>
              <H3>{data?.title}</H3>
              <H3>{data?.price} $</H3>
              <Btn onClick={() => deleteBtn(index)}>
                <TiDeleteOutline></TiDeleteOutline>
              </Btn>
            </Div>
          );
        })}
      <br />
      {total > 0 && (
        <Div>
          <h3>total</h3>
          <h3>{total} $</h3>
        </Div>
      )}
      {total === 0 && (
        <Div3>
          <h1>Your Cart is Empty Please Buy!</h1>
        </Div3>
      )}
    </div>
  );
};
export default Cart;
