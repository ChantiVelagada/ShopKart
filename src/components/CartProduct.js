import React, { useContext } from 'react'
import AppContext from '../context/AppContext/AppContext'

export default function CartProduct({product}) {

    let {removeProductFromCart, handleQunatityChange} = useContext(AppContext)

  return (
    <div className='flex space-x-5 border boder-gray-200 mt-3 p-3'>
        <div>
            <img src={product.image} className='h-16 w-16' alt={product.title}/>

        </div>
        <div className='w-full'>
            <h2>{product.title}</h2>
            <input type='number' value={product.quantity} onChange={(e) => handleQunatityChange(product.id, e.target.value)}/>
            <p><i onClick={() => removeProductFromCart(product)} className='fas fa-trash' style={{color: 'red'}}></i></p>
        </div>
    </div>
  )
}

