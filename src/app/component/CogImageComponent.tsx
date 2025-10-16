'use client'
import Image from "next/image";
import cogImage from '@/asset/cog-img.png'
import { motion } from "framer-motion";const CogImageComponent = () => {
  return (
     <motion.div initial={{y:-10}}   animate={{y:0}} transition={{duration:1,repeat:Infinity,repeatType:'reverse',ease:'easeInOut'}} className=" w-full md:h-[500px] md:flex-1 relative mt-[40px] ">
        
        <Image src={cogImage} className="md:absolute md:h-[80%] w-[60%] md:w-auto md:max-w-none md:left-6" alt="cog image"/>
      </motion.div>
  )
}

export default CogImageComponent
