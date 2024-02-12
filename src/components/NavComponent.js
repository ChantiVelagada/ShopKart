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
    <>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          {categories.map((category) => {
            return (
              <li>
                <Link key={category} to={`category/${category}`} className=" capitalize block py-2 px-3 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-white-500" aria-current="page">{category}</Link>
              </li>
            )
          })}

          <li>
            <Link onClick={() => setOpen(true)} href="#" className=" capitalize block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </div>
      {/* <div className='flex space-x-4 text-white font-medium'>
        {categories.map((category) => {
          return (
            <Link key={category} to={`category/${category}`}><p className='capitalize'>{category}</p></Link>
          )
        })}
        <p onClick={() => setOpen(true)}><i className="fa-solid fa-cart-shopping"></i></p>
      </div> */}
    </>
  )
}

export default NavComponent;
