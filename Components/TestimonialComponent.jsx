import React from 'react'

const TestimonialComponent = () => {
  return (
  <div className='bg-[#eceef1] md:py-20 py-12 px-6 md:px-16'>
    <div className='bg-[#eceef1] flex justify-around flex-wrap-reverse items-center'>
        <div className='mt-6 w-[100%] max-w-[768px]'>
            <h1 className=' font-bold text-xl md:text-4xl leading-10'>“All information is very well summarised”</h1>
            <p className='mt-4 text-l md:text-2xl font-light'>Garima Yadav</p>

        </div>
        <img className='w-[200px] md:w-[300px]' src="https://themes.stackbit.com/demos/app/images/person-1.png" alt="" />

    </div>
    <div className='bg-[#eceef1] flex flex-row-reverse justify-around flex-wrap-reverse items-center mt-10'>
        <div className='mt-6 w-[100%] max-w-[768px]'>
            <h1 className='w-full font-bold text-xl md:text-4xl leading-loose'>“A very useful project management app. I use it every day.”</h1>
            <p className='mt-4 text-l md:text-2xl font-light'>Travis Guidelines, Manager at Company</p>

        </div>
        <img className='w-[200px] md:w-[300px]' src="https://themes.stackbit.com/demos/app/images/person-2.png" alt="" />

    </div>
    </div>
  )
}

export default TestimonialComponent