import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { useSelector,useDispatch } from 'react-redux';
import { AddItem, calculate, decrement, deletedata } from '../reducer';
const Cart = () => {
    const {Itemcart, subtotal, shiping,tax,total}=useSelector((state)=>state.prodtItem)
    const dispatch=useDispatch()
    const increment=(id)=>{
        dispatch({
            type:AddItem,
            payload:{id}
        })
        dispatch({
            type:calculate
        }
        )
    }
    const decremant=(id)=>{
        dispatch({
            type:decrement,
            payload:id
        })
        dispatch({
            type:calculate
        }
        )
    }
    const delteitem=(id)=>{
        dispatch({
            type:deletedata,
            payload:id
        })
        dispatch({
            type:calculate
        }
        )
    }
  return (
    <div className='section_cart'>
    <div className='card_cart'>
    {
        Itemcart.length>0?(Itemcart.map((item)=>(
            <Cartsec key={item.id} name={item.name} id={item.id} imgsrc={item.imgsrc} price={item.price}  qty={item.Quantity}
                increment={increment} decremant={decremant} delteitem={delteitem}
            />))):<h1>Item not yet added</h1>
    }
    </div>
   
        
         <div className='calc_section'>
            <div><span className='spanleft'>Subtotal</span><span className='spanright'>${subtotal}</span></div>
            <div><span className='spanleft'>Shiping</span><span className='spanright'>${shiping}</span></div>
            <div><span className='spanleft'>Tax</span><span className='spanright'>${tax}</span></div>
            <div><span className='spanleft'>Total</span><span className='spanright'>${total}</span></div>
         </div>
    </div>
  )
}
const Cartsec=({id,imgsrc,price,qty,name,increment,decremant,delteitem})=>{
    return(
        <div className='card_sec'>
        <img src={imgsrc} alt="cart" />
        <div className='wholesection'>
        <div className='name_div'>{name}</div>
        <div className='price_sec'>${price}</div>
            <div className='btn_names'>
               <button onClick={()=>decremant(id)}>-</button>
               <p>{qty}</p>
               <button onClick={()=>increment(id)}>+</button>
               <button onClick={()=>delteitem(id)}><FaRegTrashCan /></button>
            </div>
        </div>
       
        </div>
    )
}
export default Cart