import React, { useState } from 'react'
import img from '../assets/shopping-cart.png'

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8'>
        <div className='text-purple-700 text-2xl md:text-4xl font-bold'>DigiTools</div>

        <button className='md:hidden text-slate-700' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} md:block`}> 
          <ul className='flex flex-col gap-4 p-4 md:flex-row md:p-0 md:items-center md:gap-8'>
            <li><a href='#products' className='text-slate-700 hover:text-purple-700'>Products</a></li>
            <li><a href='#features' className='text-slate-700 hover:text-purple-700'>Features</a></li>
            <li><a href='#pricing' className='text-slate-700 hover:text-purple-700'>Pricing</a></li>
            <li><a href='#testimonials' className='text-slate-700 hover:text-purple-700'>Testimonials</a></li>
            <li><a href='#faq' className='text-slate-700 hover:text-purple-700'>FAQ</a></li>
          </ul>
        </div>

        <div className='hidden items-center gap-4 md:flex'>
          <div className='relative'>
            <img src={img} alt='cart' className='w-6 h-6' />
            {cartCount > 0 && (
              <span className='absolute -right-2 -top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-purple-600 text-[10px] text-white px-1'>
                {cartCount}
              </span>
            )}
          </div>
          <span className='text-slate-700'>Login</span>
          <button className='rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-200/30'>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
