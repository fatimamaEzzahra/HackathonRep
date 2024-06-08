import { Route, Routes } from "react-router-dom"
import { StickyNavbar } from "./Components/HomeComp/Navbar"
import Home from "./Pages/Home"
import Footer from "./Components/HomeComp/Footer"
import Services from "./Components/HomeComp/Services"
import OurServices from "./Pages/OurServices"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import LoginClient from "./Pages/Auth/LoginClient"
import SignInClient from "./Pages/Auth/SignInClient"
import LoginWorker from "./Pages/Auth/LoginWorker"
// import SignInWorker from "./Pages/Auth/SignInWorker.Jsx"



function App() {
 

  return (
    <>
      <StickyNavbar/> 
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<OurServices/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/loginClient' element={<LoginClient/>}/>
      <Route path='/signinClient' element={<SignInClient/>}/>
      <Route path='/loginWorker' element={<LoginWorker/>}/>
      <Route path='/signinWorker' element={<SignInClient/>}/>
    </Routes>
    <Footer/>

     <div className="App" >
      
   
    </div>
     
    </>
  )
}

export default App
