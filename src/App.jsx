import NavBar from './assets/components/NavBar';
import HeroAction from './assets/components/HeroAction';
import Tools from './assets/components/Tools';
import TestimonialSection from './assets/components/TestimonialSection';
import PricingSection from './assets/components/PricingSection';
import Footer from './assets/components/Footer';
import PremiumSection from './assets/components/PremiumSection';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer1 from './assets/components/Footer1';
import Helmet from 'react-helmet';

const App = () => {
  return (
    <>
    <Helmet>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/heart.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ILovePDF</title>
    </Helmet>
      <Router>
         <div>
      <NavBar />
      <div>
      <HeroAction text='Found Out More'/>
      <Tools />
      </div>
      <TestimonialSection/>
                <Routes>
                    <Route path="/premium" element={<PremiumSection />} />
                    <Route path="/pricing" element={<PricingSection />} />
                </Routes>
                <PremiumSection />
      <Footer1/>
      <Footer/>
         </div>
      </Router>
</>
  )
}

export default App