import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

function HomePage() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const productURL = 'https://fakestoreapi.com/products';

  async function getAllProducts() {

    let response = await fetch(productURL);
    let data = await response.json()

    setProducts(data)
    setLoading(false)
  }

  const handleSearch = (e) => {

    setSearchTerm(e.target.value);
    if(searchTerm.length > 0) {
      let result = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

     setProducts(result)
    }else {
      getAllProducts()
    }
  }

  useEffect(() => {
    if(searchTerm.length === 0) {
      getAllProducts()
    }
  },[searchTerm])

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <form className='max-w-1 mx-auto'>
            <div className="relative mx-20">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    value={searchTerm}
                    onChange={(e) => {handleSearch(e)}}
                    type="text"
                    placeholder="Search Products"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border outline-none bg-gray-50 focus:bg-white focus:border-slate-900"
                />
            </div>
          </form>
      <div className='max-w-7xl mx-auto mt-8 flex flex-wrap'>
        {loading ? <p className='m-auto'>Fetching Products</p> : (
          products.map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        )}
      </div>
    </div>
  )
}

export default HomePage;
