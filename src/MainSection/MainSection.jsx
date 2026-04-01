import React, { useState } from 'react'
import Products from '../component/Products'
import { toast } from 'react-toastify'

const MainSection = ({ cart, setCart }) => {
  const [activeSection, setActiveSection] = useState('products')

  const addToCart = product => {
    setCart(prev => [...prev, product])
    toast.success(`${product.name} added to cart`)
  }

  const removeFromCart = index => {
    setCart(prev => prev.filter((_, idx) => idx !== index))
    toast.info('Product removed from cart')
  }

  const proceedToCheckout = () => {
    setCart([])
    setActiveSection('products')
    toast.success('Checkout completed successfully')
  }

  const cartTotal = cart.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9.]/g, '')), 0)

  return (
    <section id='products' className='flex flex-col items-center mt-32 px-4 md:px-8'>
      <div className='max-w-5xl text-center p-8'>
        <h1 className='text-5xl font-bold m-4'>Premium Digital Tools</h1>
        <p className='text-slate-600'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

        <div className='inline-flex rounded-full border border-slate-200 bg-white shadow-2xl mt-8 overflow-hidden'>
          <button
            onClick={() => setActiveSection('products')}
            className={`px-6 py-3 text-sm font-semibold rounded-full ${activeSection === 'products' ? 'bg-purple-600 text-white' : 'text-slate-700'}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveSection('cart')}
            className={`px-6 py-3 text-sm font-semibold rounded-full ${activeSection === 'cart' ? 'bg-purple-600 text-white' : 'text-slate-700'}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      <div className='w-full max-w-7xl mb-16'>
        {activeSection === 'products' ? (
          <Products onAddToCart={addToCart} />
        ) : (
          <div className='rounded-[40px] border border-slate-200 bg-slate-50 p-8 shadow-[0_40px_80px_rgba(15,23,42,0.08)]'>
            {cart.length === 0 ? (
              <div className='text-center py-20'>
                <h2 className='text-3xl font-semibold text-slate-900'>Your cart is empty</h2>
                <p className='mt-4 text-slate-600'>Browse products and add items to your cart to see them here. The best tools for productivity are waiting.</p>
              </div>
            ) : (
              <div className='space-y-6'>
                <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                  <div>
                    <h2 className='text-3xl font-semibold text-slate-900'>Shopping Cart</h2>
                    <p className='mt-2 text-slate-600'>{cart.length} item{cart.length === 1 ? '' : 's'} added</p>
                  </div>
                  <div className='rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700'>{cart.length} Items</div>
                </div>

                <div className='space-y-4'>
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className='flex flex-col gap-4 rounded-[32px] border border-slate-200 bg-white p-5 md:flex-row md:items-center md:justify-between'>
                      <div className='flex items-center gap-4'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-50'>
                          <img src={item.icon} alt={item.name} className='h-10 w-10 object-contain' />
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold text-slate-900'>{item.name}</h3>
                          <p className='text-sm text-slate-600'>{item.description}</p>
                        </div>
                      </div>
                      <div className='flex flex-col items-start gap-3 md:items-end'>
                        <span className='text-lg font-semibold text-slate-900'>{item.price}/{item.period}</span>
                        <button onClick={() => removeFromCart(index)} className='rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-slate-100'>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='flex flex-col gap-4 rounded-[32px] border border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between'>
                  <div>
                    <p className='text-sm uppercase tracking-[0.24em] text-slate-500'>Total</p>
                    <p className='text-3xl font-bold text-slate-900'>${cartTotal}</p>
                  </div>
                  <button onClick={proceedToCheckout} className='rounded-full bg-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-200/30'>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default MainSection
