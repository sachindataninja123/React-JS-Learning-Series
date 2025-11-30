import React from 'react'

const Header = () => {
   return (
   <nav className=' bg-emerald-900 flex items-center text-2xl justify-between text-white p-5'>
    <h2 className='text-3xl'>Shreyans</h2>
    <div className='flex items-center gap-8 ml-8'>
      <h4>About</h4>
      <h4>Portfolio</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>Your Account</h4>
    </div>
   </nav>
  )
}

export default Header
