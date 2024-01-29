import React from 'react'
import { Link } from 'react-scroll'

function Header() {
  
  return (
    <div className='bg-black py-1 text-cyan-600 text-xs sm:hidden fixed top-0 z-20 w-full'>
      <div className='flex items-center justify-evenly'>
        <Link smooth duration={800} to='home' className='hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white p-2 cursor-pointer '>Home</Link>
        <Link smooth duration={800} to='about' className='hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white p-2 cursor-pointer '>About</Link>
        <Link smooth duration={800} to='projects' className='hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white p-2 cursor-pointer '>Projects</Link>
        <Link smooth duration={800} to='contact' className='hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white p-2 cursor-pointer '>Contact</Link>
      </div>
    </div>
  )
}

export default Header
