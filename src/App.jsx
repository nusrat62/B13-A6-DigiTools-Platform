import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './component/Navbar'
import Banner from './banner/Banner'
import State from './State/State'
import MainSection from './MainSection/MainSection'
import Steps from './component/Steps'
import Pricing from './component/Pricing'
import Footer from './component/Footer'

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Banner />
      <State />
      <MainSection cart={cart} setCart={setCart} />
      <Steps />
      <Pricing />
      <section className='bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-20'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl Font-bold'>Ready To Transform Your Workflow?</h2>
          <p className='mt-4 text-base md:text-lg text-slate-100 max-w-2xl mx-auto'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
          <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center'>
            <button className='rounded-full bg-white text-violet-600 font-semibold px-6 py-3 shadow-lg shadow-violet-500/30 transition hover:bg-slate-100'>Explore Products</button>
            <button className='rounded-full border border-white text-white px-6 py-3 transition hover:bg-white/10'>View Pricing</button>
          </div>
          <p className='mt-4 text-sm text-slate-200'>14-day free trial · No credit card required · Cancel anytime</p>
        </div>
      </section>
      <Footer />
      <ToastContainer position='top-right' autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme='colored' />
    </>
  )
}

export default App
