import React from 'react'
import facebookIcon from '../assets/Facebook.png'
import instagramIcon from '../assets/Instagram.png'
import socialIcon from '../assets/social3.png'

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-slate-200 py-16'>
      <div className='max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]'>
        <div>
          <h3 className='text-2xl font-bold text-white'>DigiTools</h3>
          <p className='mt-4 text-slate-400 max-w-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Product</h4>
          <ul className='space-y-3 text-slate-400'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Company</h4>
          <ul className='space-y-3 text-slate-400'>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Resources</h4>
          <ul className='space-y-3 text-slate-400'>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-white mb-4'>Social Links</h4>
          <div className='flex items-center gap-3'>
            <a href='https://instagram.com' target='_blank' rel='noreferrer' className='h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center transition hover:bg-violet-600'>
              <img src={instagramIcon} alt='Instagram' className='h-6 w-6 object-contain' />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer' className='h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center transition hover:bg-violet-600'>
              <img src={facebookIcon} alt='Facebook' className='h-6 w-6 object-contain' />
            </a>
            <a href='https://x.com' target='_blank' rel='noreferrer' className='h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center transition hover:bg-violet-600'>
              <img src={socialIcon} alt='Social' className='h-6 w-6 object-contain' />
            </a>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 mt-14 border-t border-slate-800 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-slate-400 text-sm'>
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className='flex flex-wrap items-center gap-4'>
          <a href='#' className='hover:text-white'>Privacy Policy</a>
          <a href='#' className='hover:text-white'>Terms of Service</a>
          <a href='#' className='hover:text-white'>Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
