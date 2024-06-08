

import Features from '../Components/HomeComp/Features'
import Footer from '../Components/HomeComp/Footer'
import HeroSwiper from '../Components/HomeComp/HeroSection'
import  {  StickyNavbar } from '../Components/HomeComp/Navbar'
import Services from '../Components/HomeComp/Services'

const Home = () => {
  return (
     <div style={{marginBottom:'100px',marginLeft:'0'}}>
     
     <HeroSwiper/>
     <Services/>
     <Features/>
     <Footer/>
    </div>
  )
}

export default Home