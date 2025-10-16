import { TpricingTiers } from '@/app/custom/TpricingTiers'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  const PricingTiers=[
    {
      title:'Free',
      popular:false,
      inverse:false,
      features:[
        'Up to 5 projects members',
        "Unlimited tasks and projects",
        "2GB storage",
        "Basic support"
      ],
      buttonText:"Get started for free",
      monthlyPrice:0
    },
    {
      title:'Pro',
      popular:true,
      inverse:true,
      features:[
        'Up to 5 projects members',
        "Unlimited tasks and projects",
        "2GB storage",
        "Basic support"
      ],
      buttonText:'Sign up now',
      monthlyPrice:9
    },
    {
      title:'Business',
      popular:false,
      inverse:false,
      features:[
        'Up to 5 projects members',
        "Unlimited tasks and projects",
        "2GB storage",
        "Basic support"
      ],
      buttonText:'Sign up now',
      monthlyPrice:18
    }
  ]
  return (
    <div className='  py-[100px] mt-20'>
                    <h1 className='section-title w-full text-center'>Pricing</h1>

        <div className='w-[90%] mx-auto mt-20 text-center'>
      <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas magni aliquam corrupti dolores. Voluptatum.</p>
        </div>
      <div className='w-[90%] lg:w-[80%] mx-auto mt-20 grid grid-cols-1 items-end md:grid-cols-3 gap-5 '>
        {PricingTiers.map((item:TpricingTiers,index)=>(
          <div className={` p-3 w-[300px] mt-8 md:mt-0 mx-auto md:w-full rounded-lg ${item.inverse?'bg-black scale-[105%]':''} `}  key={index}>
            <div className='flex justify-between items-center'>
              <h1 className='font-[500] text-1xl' style={{color:item.inverse?'rgba(255, 255, 255, 1)':''}}>{item.title}</h1>
              {item.popular?<p  className='bg-[linear-gradient(to_right,rgba(77,76,76,1),rgba(161,161,161,1),rgba(111,208,253,1),rgba(0,174,255,1))] p-4 text-transparent bg-clip-text'>Popular</p>:null}
            </div>
            <div className='mt-8'>
              <p className='text-2xl font-bold' style={{color:item.inverse?'rgba(255, 255, 255, 1)':''}}>${item.monthlyPrice}<sub className='text-sm  text-zinc-500' style={{color:item.inverse?'rgba(204, 201, 201, 1)':''}}>/month</sub></p>
            </div>
            <div className='flex justify-center mt-7'>
              <button className={`btn-primary ${item.inverse?'bg-zinc-50 text-black hover:bg-zinc-700 hover:text-zinc-50':''}  w-[90%] font-bold cursor-pointer text-[10px] py-2 rounded-sm`}>{item.buttonText}</button>
              </div>
              <div className='mt-5 flex flex-col gap-3'>
                {item.features.map((ele,index)=>(
                  <div className='flex items-center gap-3'  key={index}>
                    <FaCheck className='text-green-500'/>
                    <p className='text-sm' style={{color:item.inverse?'rgba(255, 255, 255, 1)':''}}>{ele}</p>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
