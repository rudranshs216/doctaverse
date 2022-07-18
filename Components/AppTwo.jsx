import React from 'react'

const AppTwo = () => {
  return (
    <div className='h-full py-10 lg:py-20 w-full flex flex-col justify-around items-center lg:h-full lg:flex-row-reverse'>
            <img className='w-[500px]' src="https://themes.stackbit.com/demos/app/images/feature-2.svg" />
            <div className="w-[100%] mt-10 p-4 sm:w-[500px] lg:mt-0">
                <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>One and Only Place for All Doctors Tool</h1>
                <p className='text-l my-5 font-semibold md:text-xl lg:text-2xl'>Doctaverse app includes all the medical tools needed by a pediatrician on duty.</p>
                <p className='text-md my-5 md:text-l lg:text-xl'>It is a pocket buddy for pediatricians containing information on pediatric medical calculators,drug dosage, diagnostic algorithms,treatment algorithms, emergency treatment, ECG and different guidelines.</p>
                <button className='px-6 py-3 bg-[#2c343c] text-white rounded my-5  hover:bg-black'>Learn More</button>


            </div>

        </div>
  )
}

export default AppTwo