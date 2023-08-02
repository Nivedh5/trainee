const redux =require('redux')
const createStore= redux.createStore
const Bun='bun'
function buyBun(){
    return{
        type:Bun,
        info:'first redux action'
    }
}
const initialState={
    numofBun:10
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Bun:return{
            ...state,
         numofBun:state.numofBun-1
        }
        default:return state
    }
}
const store = createStore(reducer)
console.log('initialstate',store.getState())

const unsubscribe=store.subscribe(()=>console.log('updated',store.getState()))
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
store.dispatch(buyBun())
unsubscribe()
