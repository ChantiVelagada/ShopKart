import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const {id} = useParams()
  const Url = `https://fakestoreapi.com/products/category/${id}`;

  async function getCategoryProducts() {
    setLoading(true)

    let response = await fetch(Url)
    let data = await response.json();

    setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    getCategoryProducts()
  }, [id])

  return (
    <div className='max-w-7xl mx-auto mt-6 flex flex-wrap justify-evenly'>
    {loading ? <p className='m-auto'>Fetching Products</p> : (
     products.map((product) => {
       return <ProductCard product={product}/>
     })
    )}
    </div>
  )
}

export default CategoryPage
