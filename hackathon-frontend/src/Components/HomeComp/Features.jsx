import React from 'react'
import { BsArrowBarUp, BsInfoSquare } from 'react-icons/bs'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import RoofingIcon from '@mui/icons-material/Roofing';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FaAccessibleIcon, FaAffiliatetheme, FaAlignCenter, FaCheckCircle, FaCreditCard, FaGoodreads, FaHeadphones, FaPaypal, FaSdCard, FaSeedling, FaSuperpowers, FaTruck } from 'react-icons/fa'
import './Features.css'
import ShieldIcon from '@mui/icons-material/Shield';
import { FlashOnOutlined } from '@mui/icons-material'
const Features = () => {
  const features = [
    {titre:'ضمان على الخدمات',desc:'ضمان على الخدمات يصل حتى 30 يوم',icon:<WorkspacePremiumIcon style={{fontSize:'35px'}} className='icon-features'/>},
    {titre:' مزودي خدمات  موثوقين',desc:'مزودي خدمات معتمدين لتقديم الخدمة بأفضل طريقة ممكنة',icon:<HowToRegIcon style={{fontSize:'35px'}} className='icon-features'/>  },
    {titre:' ميزة الأمان',desc:'  في حال حدوث أي حالة عنف أو سرقة أثناء تقديم الخدمة، يمكنك الإبلاغ فوراً من خلال التطبيق',icon:<ShieldIcon style={{fontSize:'35px'}} className='icon-features'/>  },
      ]
  return (
    <div className='container-features'>
      
     <h1> <PlayArrowIcon/> مميزاتنا</h1> 
     
     <p className='qst'>لماذا تطبيق خدمات دارك ؟</p>
    
    <div className=' intro-container'>
     {
      features.map((f)=>{
        return (
          <div className="intro-part flex gap-6 items-center">
      {f.icon}
      <div>
      <h4 className='h6'> {f.titre}</h4>
      <p>{f.desc}</p>
     </div>
     </div>
        )
      })
     }
    </div>
    </div>
  )
}

export default Features