import { createSlice } from "@reduxjs/toolkit";


const initialState={
  Itemcart:[],
  subtotal:0,
  shiping:0,
  tax:0,
  total:0
}

export const reducerSlice=createSlice({
         name:'prodtItem',
         initialState,
         reducers:{
            AddItem:(state,action)=>{
                const isitemexist=state.Itemcart.find((i)=>i.id===action.payload.id)
                if(isitemexist){
                state.Itemcart.forEach(i=>{
                    if(i.id===action.payload.id){
                        i.Quantity+=1
                    }
                })
                }else{
                    state.Itemcart.push(action.payload) 
                }
               
            },
            decrement:(state,action)=>{
                const item=state.Itemcart.find((i)=>i.id===action.payload)
                if(item.Quantity>1){
                    state.Itemcart.forEach(i=>{
                        if(i.id===item.id){
                            i.Quantity-=1
                        }
                })
            }
            },
            deletedata:(state,action)=>{
                state.Itemcart= state.Itemcart.filter((i)=>i.id!==action.payload)
            },
            calculate:(state)=>{
                let sum=0;
                state.Itemcart.forEach((i)=>{
                    sum+=i.price*i.Quantity
                })
                state.subtotal=sum;
                
                state.shiping=state.subtotal>2000?0:200;
                if(state.Itemcart.length===0){
                    state.shiping=0        
                }
                state.tax= +(state.subtotal*0.18).toFixed()
                state.total=state.subtotal+state.shiping+state.tax;
            }
         }
})

export const{AddItem,decrement,deletedata,calculate}=reducerSlice.actions
export default reducerSlice.reducer