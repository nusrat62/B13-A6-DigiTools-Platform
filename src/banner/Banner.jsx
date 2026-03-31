import React from 'react'
import img from '../assets/banner.png'
import playIcon from '../assets/Play.png'

const Banner = () => {
  return (
    <section className='pt-28 pb-16 bg-white'>
      <div className='max-w-7xl mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center'>
        <div className='space-y-6'>
          <div className='inline-flex items-center gap-3 rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700 font-medium shadow-sm'>
            <span className='h-2 w-2 rounded-full bg-purple-700'></span>
            New: AI-Powered Tools Available
          </div>
          <div>
            <h1 className='text-5xl font-extrabold text-slate-900 sm:text-6xl'>Supercharge Your Digital Workflow</h1>
          </div>
          <p className='max-w-xl text-slate-600 leading-8'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
          <div className='flex flex-wrap gap-4'>
            <button className='rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/40'>Explore Products</button>
            <button className='inline-flex items-center gap-3 rounded-full border border-purple-600 px-6 py-3 text-sm font-semibold text-purple-700 transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-purple-50'>
              <img src={playIcon} alt='play icon' className='h-5 w-5' />
              Watch Demo
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={img} alt='banner' className='w-full max-w-xl rounded-[32px] shadow-2xl' />
        </div>
      </div>
    </section>
  )
}

export default Banner
