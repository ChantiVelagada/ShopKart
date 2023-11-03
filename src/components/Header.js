import React from 'react'
import NavComponent from './NavComponent';
import { Link } from 'react-router-dom';

function Header({setOpen}) {
  return (
    <div className='h-14 bg-slate-900 fixed w-full shadow-lg z-10'>
        <header className='flex h-14 max-w-7xl mx-auto justify-around items-center font-bold'>
          <Link to='/'>
            <div className='flex items-center gap-4'>
              <i className="fa-solid fa-house" style={{color: '#ffffff'}}></i>
              <h3 className='text-white font-bold '>ShopKart</h3>
            </div>
          </Link>
          
          <NavComponent setOpen={setOpen}/>
        </header>
        
    </div>
  )
}

export default Header;