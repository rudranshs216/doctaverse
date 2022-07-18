import React from 'react'

const FeatureCard = ({ imgSrc, heading, paragraph }) => {
    return (
        <div className='m-2 relative top-0 hover:top-[-10px] ease-in-out duration-300 cursor-pointer p-4 h-[400px] w-full sm:w-[350px] border-[1px] flex flex-col justify-between items-start'>
            <div>
                <img className='w-[120px]' src={imgSrc} alt="" />
                <h1 className='text-xl md:text-3xl font-bold'>{heading}</h1>
                <p className='text-md md:text-l'>{paragraph}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>


        </div>
    )
}

export default FeatureCard