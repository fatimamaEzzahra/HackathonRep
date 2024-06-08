

import Features from '../Components/HomeComp/Features'
import HeroSwiper from '../Components/HomeComp/HeroSection'
import  {  StickyNavbar } from '../Components/HomeComp/Navbar'
import Services from './Services'

const Home = () => {
  return (
     <div style={{marginBottom:'100px',marginLeft:'0'}}>
     <StickyNavbar/>
     <HeroSwiper/>
     <Services/>
     <Features/>
   
    </div>
  )
}

export default Home