
import './HeroSection.css';
import imag from "../../assests/img1.jpg"
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const HeroSwiper = () => {
 

  return (
    <>
    {/* <div className="">
      {Services.map((service, index) => (
        <div key={index}  className='containerr'>
          <img src={service.image} alt=""  />
          <div className='content'>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <button>{service.sercheNow}</button>
          </div>
        </div>
      ))}
    </div> */}



<div className="md:px-12 p-4 max-w-screen-2xl mx-auto  mt-20  shadow-xl">
        <div className="md:p-9 -4 py-9 ">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
                  {/* image of Hero  */}
                  <div className="" >
                 <img src={imag} alt="Doctor Ali" className="lg:h-[499px] rounded "    />
                 </div>
                 
                 {/* content Home */}
                 <div className="md:w-2/5  ">
                 <span className="flex    justify-center  tracking-wide items-center md:w-1/2  bg-lightbutton text-lg font-Poppins rounded-lg px-3 py-1
                  font-bold text-primaryBlue" > </span>
                 <h1 className='text-5xl  font-Poppins tracking-wide mt-4 font-semibold mb-4 text-font   leading-snug' >مرحبا بك في  <br/> 
                 <span className='text-primaryBlue ml-5     font-bold leading-snug tracking-wide text-yellow'>  خدمات بيتك</span> <br /></h1>
                 <p className='text-fontGray   font-Poppins  font-semibold mb-20 mt-8   '><VerifiedIcon className='text-yellow' />  جميع خدمات بيتك في تطبيق واحد فقط .<br></br> <span className='tracking-wide'><WorkspacePremiumIcon className='text-yellow'/>مزودي خدمات معتمدين لتقديم الخدمة بأفضل طريقة ممكنة.</span></p>
                  <div className="">
                  
                   
             
                
                   
                 
                  </div>
                 

                 {/* Member of clients */}
            <div className='flex mt-10  justify-start '>
              <div className='mr-2'>
                <img  alt="" /> </div>
             
                <div className='w-1/2'>
                <h1 className='font-bold text-xl text-font'>1.3M+</h1>
                <p className='tracking-wide  font-Poppins text-xs  text-fontGray'>تقييم 4.5/5 <br /></p>
              </div>
            </div>
            </div>



                
            </div>
        </div>
    </div>
</>
  );
}

export default HeroSwiper;
