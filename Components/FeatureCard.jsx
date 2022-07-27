import React from 'react'



const FeatureCard = ({ imgSrc, heading}) => {
    return (
        <div className='m-2 w-[300px] relative top-0 hover:top-[-10px] ease-in-out duration-300 cursor-pointer p-4 border-[1px] flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                { imgSrc  }
                <h1 className='text-xl mt-6 md:text-2xl font-bold'>{heading}</h1>
            </div>
        </div>
    )
}

export default FeatureCard