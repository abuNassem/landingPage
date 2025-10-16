'use client'
import React from 'react'
import Product from '@/asset/product.jpg'
import Man from '@/asset/man.png'
import {motion} from 'framer-motion'
import Image from 'next/image'
const ProductShowCase = () => {
  
  return (
<section className="pt-20 relative h-auto py-[100px] bg-[radial-gradient(ellipse_100%_90%_at_top,_rgba(255,255,255,1),_rgba(5,87,194,0.1))]">
        <div className='sm:w-[60%] lg:w-[40%] mx-auto flex flex-col items-center '>
            <p className='border-zinc-800/60 text-sm font-[500] border-2 px-3 rounded-[30px]'>boost your productivity</p>
      <h1 className='font-bold text-zinc-900 text-xl mt-10'>A more effective way </h1>
      <h2 className='section-title'> to track progress</h2>
      <p className='text-description'> Soluta ducimus earum neque inventore aut nam. Minima molestias nulla vero assumenda, offers</p>
        </div>
        <div className='w-[70%] md:w-[70%] mx-auto relative mt-10'>
          <Image src={Product} className='w-full rounded-lg h-[90%]' alt='Product'/>
        </div>
        <motion.div initial={{y:-10}} animate={{y:0}} transition={{duration:1,repeat:Infinity,repeatType:'reverse',ease:'easeIn'}} className='w-[130px]  sm:mt-0 md:w-auto absolute top-80 sm:top-70 right-0 sm:right-5'>
                  <Image src={Man} className='' width={250} height={250} alt='Man'/>

        </motion.div>
    </section>
  )
}

export default ProductShowCase
