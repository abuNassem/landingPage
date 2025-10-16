import LogoSaas from "@/asset/logo-saas.jpg";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black h-[200px] flex flex-col justify-center items-center'>
       <Image
            src={LogoSaas}
            alt="logo saas"
            className="rounded-lg"
            width={70}
            height={70}
          />
          <nav className="flex gap-6 text-black/60  items-center">
            <a href="" className="btn-motion text-sm">About</a>
            <a href="" className="btn-motion text-sm">Features</a>

            <a href="" className="btn-motion text-sm">Customers </a>

            <a href="" className="btn-motion text-sm">Updates</a>
            <a href="" className="btn-motion text-sm">Help</a>
          </nav>
          <div className="text-white flex gap-5 mt-5">
            <button className="btn-motion">
                <a href="https://www.linkedin.com/in/qutaibah-mohamed-188162357/">
                    <FaLinkedin />
                </a>
                </button>
                        <button className="btn-motion">
                            <a href="https://web.facebook.com/qutaibh.mohamd"><FaFacebook/></a>
                            </button>
            
            <button className="btn-motion">
                <a href="https://wa.me/962797917763"><FaWhatsapp/></a>
                
                </button>

          </div>
    </div>
  )
}

export default Footer
