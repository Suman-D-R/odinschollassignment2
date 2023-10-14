import React, { useContext } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext/AppContext'

export default function Header({setOpenCart,setOpenList}) {

  let appContext = useContext(AppContext);

  return (
    <div className="h-12 bg-purple-600 fixed w-full shadow-lg padding">
      <header className='flex h-12 max-w-6xl justify-between items-center mx-auto p-4'>
        <div className="flex items-center ">
          <Link to='/' className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          
          <h3 className=" text-white">{appContext.name}</h3>
          </Link>
        </div>
        
        <NavBar setOpenCart={setOpenCart} setOpenList={setOpenList}></NavBar>
      </header>
    </div>
  )
}
