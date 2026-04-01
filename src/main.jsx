import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Products from './component/Products.jsx'
import Features from './component/Features.jsx'
import Pricing from './component/Pricing.jsx'
import Testimonials from './component/Testimonials.jsx'
import FAQ from './component/FAQ.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/B13-A6-DigiTools-Platform/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<Products />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<FAQ />} />

    </Routes>
  </BrowserRouter>,
)
