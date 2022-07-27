import Link from 'next/link'
import React from 'react'

const AppDownload = () => {
    return (
        <div className='w-full bg-[#0084ff] flex flex-col justify-center items-center py-24'>
            <h1 className='text-white text-4xl text-center md:text-5xl font-semibold mx-4 w-full'>Download the App</h1>
            <div className='mt-6'>
                <button className='px-6 py-3 bg-[#2c343c] text-white border-2 border-[#0084ff] rounded my-5 mr-5 hover:border-black hover:bg-white hover:text-black'>App Store</button>
                <Link href="https://play.google.com/store/apps/details?id=com.doctaverse.doctors.community.diagnostics.calculators.drugdoses">
                <button className='px-6 py-3 rounded bg-white border-2 border-[#0084ff]  hover:bg-[#0099ff]/50 hover:border-white hover:text-white'>Google Play</button>
                </Link>
            </div>
        </div>
    )
}

export default AppDownload