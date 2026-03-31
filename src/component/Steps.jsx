import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: '👤',
  },
  {
    id: 2,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: '📦',
  },
  {
    id: 3,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: '🚀',
  },
]

const Steps = () => {
  return (
    <section className='py-20 bg-slate-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-slate-900'>Get Started In 3 Steps</h2>
          <p className='text-slate-600 mt-3'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {steps.map(step => (
            <div key={step.id} className='relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(15,23,42,0.12)]'>
              <div className='absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white'>
                {String(step.id).padStart(2, '0')}
              </div>
              <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-3xl text-purple-700'>
                {step.icon}
              </div>
              <h3 className='text-xl font-semibold text-slate-900 mt-4'>{step.title}</h3>
              <p className='mt-3 text-sm leading-7 text-slate-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
