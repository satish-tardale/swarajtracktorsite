import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import DealerLocator from './components/DealerLocator'
import FinancingCalculator from './components/FinancingCalculator'
import ProductShowcase from './components/ProductShowcase'
import SupportCenter from './components/SupportCenter'
import Testimonials from './components/Testimonials '
import ContactForm from './components/ContactForm '
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
  <>
     <Navbar/>  
     <HeroSection/>
     <FeaturedProducts/>
     <DealerLocator/>
     <FinancingCalculator/>
     <ProductShowcase/>
     <SupportCenter/>
     <Testimonials/>
     <ContactForm/>
     <Footer/>

  </>
  )
}

export default App
