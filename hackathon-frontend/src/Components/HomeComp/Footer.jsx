import { Link } from "react-router-dom";

import { RiSendPlaneFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <>
        <div className="   bg-backgra      mt-10 h-screen ">
        <div className="md:grid grid-cols-5 p-6 font-Poppins sm:grid  text-xl text-center ">
           
        <div className=" text-center font-medium  ">
                <h1 className="text-yellow text-xl ">اطلب خدمات منزلك بأقل من دقيقة !</h1>
             </div>

            <div className="grid grid-cols-1 text-sm  text-white">
                <h2 className="  text-primaryBlue font-semibold text-2xl"></h2>
                 <Link to={""}> الرئيسية </Link>
                 <Link to={""}>خدماتنا</Link>
                 <Link to={""}> تواصل معنا</Link>
                 
            </div>

            
            <div className="grid grid-cols-1 mt-4 text-sm text-white ">
                  <h2 className="text-primaryBlue font-semibold"></h2>
                 <p>789 Casa @18th Street 2nd floor casa Morocco </p>
                <p> 6521067567 212+ </p>
                <h2 className="text-primaryBlue font-semibold mt-3"></h2>
                <div className="flex  mt-4 justify-between">
               <a href="/"> <FaInstagram  className="w-6 h-6"/></a>
               <a  href="/"> <FaFacebook  className="w-6 h-6"/></a> 
                <a href="/"> <FaLinkedin  className="w-6 h-6"/></a> 
               <a href="/"><BsTwitterX   className="w-6 h-6"/></a> 
                </div>
            </div>

            
        </div>
        <hr  className="text-fontGray mx-4"/>
        <p className="font-Poppins text-sm text-fontGray text-center p-4">&copy;<span className="text-yellow">خدمات بيتك 2024. جميع الحقوق محفوطة </span> </p>
        </div>
        </>
    )
}
export default Footer;