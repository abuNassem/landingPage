import { Timonials } from '@/app/custom/Timonials';
import Image from 'next/image';
import React from 'react'

const TestImonials = () => {
   const testImonials = [
  {
    text: 'This is a very good experience!',
    email: 'ahmed@gmail.com',
    userName: 'Ahmed',
    srcImage: 'https://i.pravatar.cc/150?img=1'
  },
  {
    text: 'Amazing service and friendly support!',
    email: 'lina@example.com',
    userName: 'Lina',
    srcImage: 'https://i.pravatar.cc/150?img=2'
  },
  {
    text: 'I learned a lot from this platform!',
    email: 'omar@example.com',
    userName: 'Omar',
    srcImage: 'https://i.pravatar.cc/150?img=3'
  },
  {
    text: 'Great design and easy to use interface.',
    email: 'sara@example.com',
    userName: 'Sara',
    srcImage: 'https://i.pravatar.cc/150?img=4'
  },
  {
    text: 'Highly recommend to anyone starting out!',
    email: 'mohammad@example.com',
    userName: 'Mohammad',
    srcImage: 'https://i.pravatar.cc/150?img=5'
  },
  {
    text: 'The team was super helpful and fast.',
    email: 'fatima@example.com',
    userName: 'Fatima',
    srcImage: 'https://i.pravatar.cc/150?img=6'
  },
  {
    text: 'One of the best experiences I’ve had!',
    email: 'yousef@example.com',
    userName: 'Yousef',
    srcImage: 'https://i.pravatar.cc/150?img=7'
  },
  {
    text: 'Fantastic results, exceeded my expectations.',
    email: 'noor@example.com',
    userName: 'Noor',
    srcImage: 'https://i.pravatar.cc/150?img=8'
  },
  {
    text: 'Simple, efficient, and professional.',
    email: 'ali@example.com',
    userName: 'Ali',
    srcImage: 'https://i.pravatar.cc/150?img=9'
  }
];

  return (
    <div className='py-[100px]'>
        <p className='border-2 font-[500] text-sm w-[fit-content] px-4 mx-auto rounded-[30px]'>section says</p>
        <h1 className='section-title text-center mt-10'>What our users say</h1>
        <p className='w-[90%] sm:w-md mx-auto text-center text-description text-sm font-[500]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure blanditiis, harum esse quia facere eum odit quo doloribus molestias?</p>
      <div className='w-[90%] mt-10 place-items-center grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  md:[mask-image:linear-gradient(to_top,transparent_0%,black_15%,black_60%,transparent)]'>
        {testImonials.map((item:Timonials,index)=>(
            <div key={index} className='flex flex-col w-[300px] md:mx-0 lg:w-full gap-4 p-3 shadow-lg'>
                <p className='text-description text-start text-sm'>{item.text}</p>
                <div className='flex gap-2 items-center ms-2'>
                    <Image src={item.srcImage}  className='rounded-full w-[40px] h-[40px]'  unoptimized alt={item.email} width={40} height={40}/>
                    <div>
                        <h1 className='font-[500]'>{item.userName}</h1>
                        <p className='font-[400] text-zinc-500 text-sm'>{item.email}</p>
                    </div>
                    
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TestImonials
