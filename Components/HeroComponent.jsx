import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroComponent = () => {
    return (
        <div className='h-full pb-10 pt-20 lg:py-20 w-full bg-[#0084ff] flex flex-col justify-around items-center flex-wrap lg:h-full lg:flex-row'>
            <Image className='w-[100%] max-w-[500px]' src="assets/images/main.png" />
            <div className="w-[100%] mt-10 p-4 sm:w-[500px] lg:mt-0">
                <h1 className='text-white text-3xl font-bold md:text-4xl lg:text-5xl'>One and Only Place for All Doctors Tool</h1>
                <p className='text-white text-l my-5 font-semibold md:text-xl lg:text-2xl'>Doctaverse app includes all the medical tools needed by a pediatrician on duty.</p>
                <p className='text-white text-md my-5 md:text-l lg:text-xl'>It is a pocket buddy for pediatricians containing information on pediatric medical calculators,drug dosage, diagnostic algorithms,treatment algorithms, emergency treatment, ECG and different guidelines.</p>
                <div>
                    <Link href="https://apps.apple.com/eg/app/doctaverse-pediatrics/id1616885718">
                    <button className='px-6 py-3 bg-[#2c343c] text-white border-2 border-[#0084ff] rounded my-5 mr-5 hover:border-black hover:bg-white hover:text-black'>App Store</button>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.doctaverse.doctors.community.diagnostics.calculators.drugdoses">
                    <button className='px-6 py-3 rounded bg-white border-2 border-[#0084ff]  hover:bg-[#0099ff]/50 hover:border-white hover:text-white'>Google Play</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default HeroComponent