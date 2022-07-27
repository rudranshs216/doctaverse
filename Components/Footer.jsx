import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16  flex flex-col justify-center items-center'>
    <div className='w-full px-6 flex flex-col gap-8 items-center justify-center md:gap-0 md:items-start md:flex-row md:justify-between'>
        <h1 className='font-bold text-4xl'>DoctaVerse</h1>
        <div className='w-full max-w-[500px] mx-4'>
            <p className='text-lg'>Doctaverse app includes all the medical tools needed by a pediatrician on duty.It is a pocket buddy for pediatricians containing information on pediatric medical calculators,drug dosage, diagnostic algorithms,treatment algorithms, emergency treatment, ECG and different guidelines.</p>

        </div>
        <div>
            <h1>Contact Us</h1>
            <p>contact@gagahealth.com</p>
            <div className='flex gap-4 mt-6'>
                <img className='w-6' src="assets/social/facebook.png" alt="facebook" />
                <img className='w-6' src="assets/social/instagram.png" alt="instagram" />
                <img className='w-6' src="assets/social/linkedin.png" alt="linkedin" />
                <img className='w-6' src="assets/social/twitter.png" alt="twitter" />
                <img className='w-6' src="assets/social/you.png" alt="youtube" />
            </div>

        </div>
    </div>
    <div className='py-6 bg-[#0084ff] w-full mt-16 px-6'>
        <p className='w-full text-center text-white'>Copyright © 2022 Design & Developed by DoctaVerse</p>

    </div>
    </div>
  )
}

export default Footer