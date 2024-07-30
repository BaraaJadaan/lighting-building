import './App.css'
import FeaturedProjects from './components/FeaturedProjects'
import HamburgerNav from './components/HamburgerNav'
import HeroSection from './layout/HeroSection'
import ContactUs from './layout/ContactUs'
import OurTeam from './layout/OurTeam'
import Customers from './layout/Customers'
import Footer from './layout/Footer'

function App() {

  return (
    <div className='font-sans'>
     <HeroSection/>
     <ContactUs/>
     <OurTeam/>
     <Customers/>
     <FeaturedProjects/>
     <Footer/>
    </div>
  )
}

export default App
