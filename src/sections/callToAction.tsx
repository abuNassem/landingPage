import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CallToAction = () => {
  return (
    <div className='py-24 bg-gradient-to-b from-white to-blue-300'>
        <div className='w-[90%] sm:w-[80%] mx-auto flex flex-col items-center justify-center '>
            <h1 className='section-title'>Sign up for free today</h1>
            <p className='text-description w-[90%] sm:w-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla, commodi quidem veritatis distinctio est quaerat a et molestias ipsam.</p>
        <div className='flex gap-3 mt-10'>
            <button className='btn-primary px-3 rounded-sm text-sm'>Get for free</button>
                        <button className='flex gap-1 p-2 items-center duration-[0.5s] hover:gap-3 hover:shadow-lg'>
                            <span className='font-[500] text-sm p-0 '>Learn more</span>
                            <FaArrowRight className='text-[10px] p-0'/>
                        </button>

        </div>
        </div>
    </div>
  )
}

export default CallToAction
