import React from 'react'


const AppOne = ({imgSrc,heading,paragraph}) => {
    return (
        <div className='h-full py-10 lg:py-20 w-full flex flex-col justify-around items-center lg:h-full lg:flex-row'>
            <img className='w-[500px]' src={imgSrc} />
            <div className="w-[100%] mt-10 p-4 sm:w-[500px] lg:mt-0">
                <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>{heading}</h1>
                <p className='text-l my-5 font-semibold md:text-xl lg:text-2xl'>{paragraph}</p>


            </div>

        </div>
    )
}

export default AppOne