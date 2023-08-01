import React from "react";
import { buy_Cake,Add_Cake,buy_Ice,ice_Cake } from '../redux/bakery/cakeaction';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function  HookContainer() {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const numOfIce=useSelector(state=>state.ice.numOfIce)
    const dispatch =useDispatch()
    const addDispatch=useDispatch()
    const BuyIce=useDispatch()
    const ice_Add=useDispatch()
    return ( 
        <div>
            <h3>number of ice-{numOfIce}</h3>
            <button onClick={()=>BuyIce(buy_Ice())}>Add Ice</button>
            <button onClick={()=>ice_Add(ice_Cake())}>Buy Ice</button>
            <h3>number of cakes -{numOfCakes}</h3>
            <button onClick={()=>dispatch(Add_Cake())}>Add cake</button>
            <button onClick={()=>addDispatch(buy_Cake())}>Buy Cake</button>
        </div>
     );
}


export default  (HookContainer);