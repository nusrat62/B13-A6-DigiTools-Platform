import React from 'react'

const State = () => {
  return (
    <section className='bg-gradient-to-r from-[#5e2cff] to-[#8b3cff] py-10'>
      <div className='max-w-7xl mx-auto grid gap-8 px-4 text-center text-white md:grid-cols-3'>
        <div>
          <p className='text-4xl font-bold'>50K+</p>
          <p className='mt-2 text-sm uppercase tracking-[0.24em] text-white/80'>Active Users</p>
        </div>
        <div>
          <p className='text-4xl font-bold'>200+</p>
          <p className='mt-2 text-sm uppercase tracking-[0.24em] text-white/80'>Premium Tools</p>
        </div>
        <div>
          <p className='text-4xl font-bold'>4.9</p>
          <p className='mt-2 text-sm uppercase tracking-[0.24em] text-white/80'>Rating</p>
        </div>
      </div>
    </section>
  )
}

export default State
