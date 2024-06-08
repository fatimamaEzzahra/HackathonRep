

import './HeroSwiper.css'


const HeroSwiper = () => {
    const  services = [{
       {img:{}, title:"",description:"",takeservices:""},
       {img:{}, title:"",description:"",takeservices:""},
       {img:{}, title:"",description:"",takeservices:""},
       {img:{}, title:"",description:"",takeservices:""},
       {img:{}, title:"",description:"",takeservices:""},
       {img:{}, title:"",description:"",takeservices:""},
    }]


 


  return (
     
      <div className="hero-line">
        
     <img alt="" className="hero-image"/>
     <div className="hero-para" >
      <p>{t("Beats Solo")}</p>
      <h4>{t("Wireless")}</h4>
      <h2>{t("HEADPHONE")}</h2>
     <button>{t("Shop now")}</button>
      </div>
      </div>
     
    
  )
}

export default HeroSwiper