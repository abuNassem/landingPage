import Image from 'next/image'
import React, { useContext } from 'react'

import LogoSaas from '@/asset/logo-saas.jpg'
import { MdClose } from 'react-icons/md'
import { AppContext } from '../createContext'
const SmallHeader = () => {
  const context=useContext(AppContext)
  return (
    <div onClick={()=>context?.setOpenHeader(false)} className='w-full h-[100vh] bg-zinc-900/60 fixed z-100 flex justify-end md:hidden '>
      <div className='w-[300px] h-full bg-gradient-to-b from-white to-indigo-500/60 p-2'>
      <div className='flex justify-between items-center'>
        <Image src={LogoSaas} className='w-[40px] h-[40px] rounded-sm' alt='logo saas'/>
        <button className='text-zinc-900 text-lg duration-[0.5s] hover:text-sky-700 hover:scale-[1.2] cursor-pointer '> <MdClose/></button>
      </div>
      <nav className='flex flex-col gap-3 justify-center mt-10'>
       <a href="" ><button className='w-full hover:bg-zinc-800 duration-[0.5s] rounded-sm text-black hover:text-white py-2'>About</button></a>
            <a href=""><button className='w-full hover:bg-zinc-800 duration-[0.5s] rounded-sm text-black hover:text-white py-2'>Features</button> </a>

            <a href=""> <button className='w-full hover:bg-zinc-800 duration-[0.5s] rounded-sm text-black hover:text-white py-2'> Customers</button> </a>

            <a href=""><button className='w-full hover:bg-zinc-800 duration-[0.5s] rounded-sm text-black hover:text-white py-2'>Updates</button> </a>
            <a href=""> <button className='w-full hover:bg-zinc-800 duration-[0.5s] rounded-sm text-black hover:text-white py-2'>Help</button> </a>
            <button className="btn btn-primary">Get for free</button>
        
      </nav>
      </div>
    </div>
  )
}

export default SmallHeader
