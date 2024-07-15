import React from 'react'
import NavBar from './assets/components/NavBar';
import HeroAction from './assets/components/HeroAction';
import Tools from './assets/components/Tools';
import TestimonialSection from './assets/components/TestimonialSection';
import PricingSection from './assets/components/PricingSection';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroAction text='Found Out More'/>
      <Tools />
      <TestimonialSection/>
      <PricingSection/>
      <Footer/>
    </div>
  )
}

export default App