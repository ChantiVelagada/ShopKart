import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext/AppContext';


function ProductPage() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let {addProductToCart} = useContext(AppContext)

  const {id} = useParams();
  const Url = `https://fakestoreapi.com/products/${id}`;

  async function getProduct() {

    const response = await fetch(Url)
    const data = await response.json()

    setProduct(data)
    setLoading(false)
  };

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <>
      {loading ? <p className='mt-20 text-center'>Loading Products Details</p> : (
        <div className="bg-white rounded-lg p-4 md:flex mt-10">

        <div className="md:w-1/3">
            <img src={product.image} alt="Product Image" className="w-1/2 mx-auto mt-5" />
        </div>

        <div className="md:w-2/3 md:pl-4 mt-5">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 my-2">{product.description}</p>
            <p className="text-2xl text-red-600 font-semibold">${product.price}</p>
            <p className="text-gray-500 line-through">${Math.round(product.price + 20)}</p>
            
            
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
            onClick={() => (
              addProductToCart(product)
            )}>
                Add to Cart
            </button>
        </div>
        </div>
      )}
    </>
  )
}

export default ProductPage

