import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    // const MenuOpen=useSelector((store)=>store.app.isMenuOpen)
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-44 border text-black text-lg '>
                <h1 className='font-bold '>CONTEXTS</h1>
        <ul>
            <li><Link to="/"> Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold mt-10'>Subsriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'> Watch Later</h1>
         <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
    </div>

  )
}

export default Sidebar