import React from 'react'
import { Link } from 'react-router-dom'
import headphone from '../icons/headphone2.png'
import laptop from '../icons/laptop.png'
import tablet from '../icons/tablet.png'
import smartphone from '../icons/smartphone2.png'
import desktop from '../icons/desktop.png'
import smartwatch from '../icons/smartwatch.png'
import cleaner from '../images/cleanerwoman.png'
import pinter from '../images/pinterman.png'
import cooker from '../images/cooker.png'
import plumbier from '../images/plumbier.png'
import './Services.css'
const Services = () => {
  return (
    <div>
      <div className='content'>
     <h2 className='title-main'>خدمات  </h2>
     <div className="categories">
      <div className="category-first-row">
      <div className="category-item large-item" id='first'>
        <div className="para">
          <p></p>
          <h4></h4>
          <h2>صباغ</h2>
          <Link to='products/category/pc'><button>تصفح </button></Link>
          </div>
          <img src={pinter} alt="" className='pinter-image'  />
      </div>
      <div className="category-item" id='second'>
    <div className="para">
      <p></p>
      <h4></h4>
      <h2>طباخ</h2>
          <Link to='products/category/telephone'><button>تصفح </button></Link>
    </div>
    <img src={cooker} alt="" className='cooker-image'/>
      </div>
      <div className="category-item" id='third'>
      <div className="para">
          <p></p>
          <h4></h4>
          <h2>منظفات  <br />بيوت </h2>
          <Link to='products/category/ecouteurs'><button>تصفح </button></Link>
        </div>
        <img src={cleaner} alt="" className='cleaner-image'/>
      </div>
      </div>
      <div className="category-second-row">
      <div className="category-item large-item" id='fourth'>
        <div className="para">
          <p>Best</p>
          <h4>Interactive</h4>
          <h2>TABLETS</h2>
          <Link to='products/category/tablette'><button>تصفح </button></Link>
          </div>
          <img src={plumbier} alt="" className='tablet-image'  />
      </div>
      <div className="category-item" id='fifth'>
    <div className="para">
      <p>Discover</p>
      <h4>SMARTt</h4>
      <h2>WATCHES</h2>
      <Link to='products/category/smartwatch'><button>تصفح </button></Link>
    </div>
    <img src={smartwatch} alt="" className='smartwatch-image'/>
      </div>
      <div className="category-item" id='sixth'>
      <div className="para">
          <p>Latest</p>
          <h4>Professional</h4>
          <h2>DESKTOPS</h2>
          <Link to='products/category/ordinateur'><button>تصفح </button></Link>
        </div>
        <img src={desktop} alt="" className='desktop-image'/>
      </div>
      
      </div>
     </div>
    </div>
    </div>
  )
}

export default Services