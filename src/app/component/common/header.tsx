import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import LogoSaas from "@/asset/logo-saas.jpg";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { api } from "@/app/page";
const Header = () => {
  const context=useContext(api)
  return (
    <header  className="sticky z-30 top-0 backdrop-blur-sm bg-white/20 rounded-lg">
      <div className="bg-zinc-900 py-3 flex gap-3 items-center justify-center">
        <p className="text-white/60 hidden md:block text-[15px]">Streamline your workflow and boost your productivty</p>
        <div className="text-zinc-50 inline-flex gap-1">
          <p>Get started for free</p>
          <FaArrowRight className="text-sm mt-1" />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between p-3">
          <Image
            src={LogoSaas}
            alt="logo saas"
            className="rounded-lg"
            width={40}
            height={40}
          />
                  <button onClick={()=>context?.setOpenHeader((prev)=>!prev)} className='text-zinc-900 text-lg duration-[0.5s] hover:text-sky-700 hover:scale-[1.2] cursor-pointer none md:hidden'> <MdMenu /></button>
          
         
          <nav className="hidden md:flex gap-6 text-black/60  items-center">
            <a href="" className="uderlineEmotion relative">About</a>
            <a href="" className="uderlineEmotion relative">Features</a>

            <a href="" className="uderlineEmotion relative">Customers </a>

            <a href="" className="uderlineEmotion relative">Updates</a>
            <a href="" className="uderlineEmotion relative">Help</a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
