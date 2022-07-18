import React from 'react'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div className='py-16 flex flex-col items-center'>
        <h1 className='text-center text-3xl md:text-5xl font-bold'>What's Great About Docta-Verse?</h1>
        <div className='pt-16 flex flex-wrap justify-evenly xl:w-[1100px]'>
            <FeatureCard imgSrc="https://themes.stackbit.com/demos/app/images/icon-1.svg" heading ="Heading" paragraph="paragraph" />
            <FeatureCard imgSrc="https://themes.stackbit.com/demos/app/images/icon-2.svg" heading ="Heading" paragraph="paragraph" />
            <FeatureCard imgSrc="https://themes.stackbit.com/demos/app/images/icon-3.svg" heading ="Heading" paragraph="paragraph" />
        </div>
    </div>
  )
}

export default Feature