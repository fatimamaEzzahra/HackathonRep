import React from 'react'
import { Link } from 'react-router-dom'

import cleaner from '../../images/cleanerwoman.png'
import pinter from '../../images/pinterman.png'
import cooker from '../../images/cooker.png'
import plumbier from '../../images/plumbier.png'
import driver from '../../images/driver.png'
import './Services.css'
const Services = () => {
  return (
    <div>
      <div className='services-container'>
     <h2 className='title-main'>خدماتنا</h2>
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
          <h2>منظفة<br />بيوت </h2>
          <Link to='products/category/ecouteurs'><button>تصفح </button></Link>
        </div>
        <img src={cleaner} alt="" className='cleaner-image'/>
      </div>
      </div>
      <div className="category-second-row">
      <div className="category-item large-item" id='fourth'>
        <div className="para">
          <p></p>
          <h4></h4>
          <h2>سباك</h2>
          <Link to='products/category/tablette'><button>تصفح </button></Link>
          </div>
          <img src={plumbier} alt="" className='plumbier-image'  />
      </div>
      {/* <div className="category-item" id='fifth'>
    <div className="para">
      <p>Discover</p>
      <h4>SMARTt</h4>
      <h2>WATCHES</h2>
      <Link to='products/category/smartwatch'><button>تصفح </button></Link>
    </div>
    <img src={smartwatch} alt="" className='smartwatch-image'/>
      </div> */}
      <div className="category-item" id='sixth'>
      <div className="para">
          <p></p>
          <h4></h4>
          <h2 > سائق خاص</h2>
          <Link to='products/category/ordinateur'><button>تصفح </button></Link>
        </div>
        <img src={driver} alt="" className='desktop-image'/>
      </div>
      
      </div>
     </div>
    </div>
    </div>
  )
}

export default Services