import { Route, Routes } from "react-router-dom"
import { StickyNavbar } from "./Components/HomeComp/Navbar"
import Home from "./Pages/Home"



function App() {
 

  return (
    <>
    <Routes>
      <Route path='/services'/>
    </Routes>
     <div className="App" >
      
      <StickyNavbar/> 
     <Home/>
   
    </div>
     
    </>
  )
}

export default App
