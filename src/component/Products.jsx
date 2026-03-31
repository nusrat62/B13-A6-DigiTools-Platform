import React, { useState } from 'react'
import products from '../data/productsData'

const badgeStyles = {
  'Best Seller': 'bg-[#fff6e7] text-[#bb6503]',
  Popular: 'bg-[#eef4ff] text-[#3d5dd5]',
  New: 'bg-[#e7fbf1] text-[#0f8a4a]',
}

const Products = ({ onAddToCart }) => {
  const [addedIds, setAddedIds] = useState([])

  const handleAdd = product => {
    onAddToCart(product)
    setAddedIds(prev => [...new Set([...prev, product.id])])
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id))
    }, 1500)
  }

  return (
    <div className='grid gap-8 xl:grid-cols-3 lg:grid-cols-2 w-full'>
      {products.map(product => (
        <div
          key={product.id}
          className='relative mx-auto max-w-[340px] rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(15,23,42,0.14)] flex min-h-[520px] flex-col'
        >
          <div className='flex items-start justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-[#f7f4ff]'>
                <img src={product.icon} alt={product.name} className='h-10 w-10 object-contain' />
              </div>
            </div>

            <span className={`rounded-full px-3 py-2 text-sm font-semibold ${badgeStyles[product.tag]}`}>
              {product.tag}
            </span>
          </div>

          <div className='mt-6 flex-1'>
            <h2 className='text-xl font-semibold text-slate-900'>{product.name}</h2>
            <p className='mt-3 text-sm leading-7 text-slate-600'>{product.description}</p>

            <div className='mt-6'>
              <p className='text-3xl font-bold text-slate-900'>{product.price}</p>
              <span className='text-sm text-slate-500'>/{product.period}</span>
            </div>

            <ul className='mt-6 space-y-3 text-sm text-slate-600'>
              {product.features.map((feature, featureIndex) => (
                <li key={featureIndex} className='flex items-start gap-3'>
                  <span className='mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e6f7f0] text-[#0f8a4a] font-bold'>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type='button'
            onClick={() => handleAdd(product)}
            className='mt-8 rounded-full bg-gradient-to-r from-[#6d29ff] to-[#7e3bff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95'
          >
            {addedIds.includes(product.id) ? 'Added to cart' : 'Buy Now'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
