import React from 'react'
import { useDispatch } from 'react-redux';
import { AddItem, calculate } from '../reducer';
import img1 from '../Assets/1.webp'
import img3 from '../Assets/3.webp'
import img4 from '../Assets/4.webp'
import img5 from '../Assets/5.webp'
import toast from 'react-hot-toast';
const arrayval=[
  {
    id:'erwrewfdcvbdcfdsffd',
    name:'Addidas',
    price:'2000',
    img:img1
  },
  {
    id:'dsfdsdf',
    name:'Hilander',
    price:'2500',
    img:img3
  },
  {
    id:'ewrewtrefgfdgfdrd',
    name:'HRX',
    price:'1500',
    img:img4
  },
  {
    id:'sdfdsfdsfdsfdsfds',
    name:'Nike',
    price:'3000',
    img:img5
  }
]
const Home = () => {
  const dispatch=useDispatch()
  function handleclick(options){
    dispatch({
      type:AddItem,
      payload:options
    })
    dispatch({
      type:calculate
  }
  )
    toast.success('Added Item Successfully')
  }
  return (
    <div className='section_name'>
    {
      arrayval.map((prodt)=>(
        <Procuctcard key={prodt.id} imgsrc={prodt.img} id={prodt.id} name={prodt.name} price={prodt.price} handler={handleclick}/>
      ))
    }
     </div>
  )
}
const Procuctcard=({id,imgsrc,name,price,handler})=>{
  return (
  <div className='card_product'>
  <div>
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <p>${price}</p>
    <button onClick={()=>handler({id,imgsrc,name,price,Quantity:1,handler})}>Add to Cart</button>
    </div>
  </div>
  )
}
export default Home;