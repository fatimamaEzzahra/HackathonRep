

import HeroSwiper from '../Components/HomeComp/HeroSection'
import  {  StickyNavbar } from '../Components/HomeComp/Navbar'

const Home = () => {
  return (
     <div style={{marginBottom:'40px',marginLeft:'0'}}>
     <StickyNavbar/>
     <HeroSwiper/>
  
    </div>
  )
}

export default Home