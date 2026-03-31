import React from 'react'

const plans = [
  {
    id: 1,
    title: 'Starter',
    price: '$0',
    period: 'Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    buttonText: 'Get Started Free',
    highlight: false,
  },
  {
    id: 2,
    title: 'Pro',
    price: '$29',
    period: 'Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    buttonText: 'Start Pro Trial',
    highlight: true,
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '$99',
    period: 'Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    buttonText: 'Contact Sales',
    highlight: false,
  },
]

const Pricing = () => {
  return (
    <section id='pricing' className='py-20 bg-[#F8FAFF]'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-slate-900'>Simple, Transparent Pricing</h2>
          <p className='text-slate-500 mt-3'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        <div className='grid gap-8 md:grid-cols-3 justify-center items-stretch'>
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`relative mx-auto flex h-full min-h-[560px] w-full max-w-[320px] flex-col overflow-hidden rounded-[28px] p-8 transition duration-300 ease-out ${plan.highlight ? 'bg-gradient-to-br from-[#6D29FF] to-[#7836FF] text-white shadow-[0_28px_80px_-25px_rgba(109,41,255,0.28)] hover:-translate-y-2 hover:shadow-[0_30px_90px_-20px_rgba(109,41,255,0.24)]' : 'bg-white border border-slate-200 text-slate-900 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.08)] hover:-translate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(15,23,42,0.12)]'}`}
            >
              {plan.highlight && (
                <div className='absolute left-1/2 -top-2 w-full max-w-[220px] -translate-x-1/2 text-center'>
                  <span className='inline-flex rounded-full bg-[#fff1cc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#bb6503] shadow-sm'>Most Popular</span>
                </div>
              )}

              <div className='space-y-6 pt-10'>
                <div>
                  <h3 className='text-2xl font-semibold'>{plan.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${plan.highlight ? 'text-slate-100/90' : 'text-slate-500'}`}>
                    {plan.title === 'Starter'
                      ? 'Perfect for getting started'
                      : plan.title === 'Pro'
                      ? 'Best for professionals'
                      : 'For teams and businesses'}
                  </p>
                </div>

                <div className='flex items-end gap-2'>
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                  <span className={`text-base font-semibold ${plan.highlight ? 'text-slate-100/80' : 'text-slate-500'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className='mt-6 space-y-3 text-sm leading-7 flex-1'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-3'>
                    <span className={`mt-1 text-lg ${plan.highlight ? 'text-emerald-200' : 'text-emerald-500'}`}>✓</span>
                    <span className={`${plan.highlight ? 'text-slate-100/90' : 'text-slate-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full rounded-full px-6 py-3 text-sm font-semibold transition ${plan.highlight ? 'bg-white text-[#6D29FF] shadow-[0_20px_50px_-20px_rgba(255,255,255,0.9)] hover:bg-slate-100' : 'bg-gradient-to-r from-[#6D29FF] to-[#7F3DFF] text-white shadow-lg shadow-purple-500/20 hover:opacity-95'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
