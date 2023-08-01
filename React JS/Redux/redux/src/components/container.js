import React from 'react';
import {  connect } from 'react-redux';
import { buy_Cake } from '../redux/bakery/cakeaction';
import Add_Cake from '../redux/bakery/addAction';
function  Container(props) {
    return ( 
        <div>
            <h3>number of cakes -{props?.numOfCakes}</h3>
            <button onClick={props?.Add_Cake}>Add cake</button>
            <button onClick={props?.buycake}>Buy Cake</button>
        </div>
     );
}
const MapStateToProps=state=>{
   return{
    numOfCakes:state?.numOfCakes,

    }
}
const MapDispatchToProps=dispatch=>{
    return{
        buycake:()=>dispatch(buy_Cake()),
        Add_Cake:()=>dispatch(Add_Cake())
    }
}

export default connect(MapStateToProps,MapDispatchToProps) (Container);