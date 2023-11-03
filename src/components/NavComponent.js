import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function NavComponent({setOpen}) {
  const [categories, setCategories] = useState([])

  let apiURL = 'https://fakestoreapi.com/products/categories';

  async function getAllCategories() {
    let response = await fetch(apiURL);
    let data = await response.json();
    console.log(data)
    setCategories(data)
  }

  useEffect(() => {
    getAllCategories();
  },[])

  return (
    <div className='flex space-x-4 text-white font-medium'>
      {categories.map((category) => {
        return (
          <Link key={category} to={`category/${category}`}><p className='capitalize'>{category}</p></Link>
        )
      })}
      <p onClick={() => setOpen(true)}><i className="fa-solid fa-cart-shopping"></i></p>
    </div>
  )
}

export default NavComponent;
