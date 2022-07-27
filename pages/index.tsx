import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AppDownload from "../Components/AppDownload"
import AppOne from "../Components/AppOne"
import AppTwo from "../Components/AppTwo"
import Feature from "../Components/Feature"
import Footer from "../Components/Footer"
import Navbar from '../Components/Navbar'
import TestimonialComponent from "../Components/TestimonialComponent"


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DoctaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />

      <div className='h-full pb-10 pt-20 lg:py-20 w-full bg-[#0084ff] flex flex-col justify-around items-center flex-wrap lg:h-full lg:flex-row'>
            <img className='w-[100%] max-w-[500px]' src="assets/images/main.png" />
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
        <Feature />
        <AppOne imgSrc="assets/images/dashboard.png" heading="Doctor's Dashboard" paragraph="Plateform for doctors to see 10 patients in 1 hour and can genrate prescription just by their voice" />
        <AppTwo imgSrc="assets/images/cal.png" heading="Medical Calculator" paragraph="All the pediatric calculators which students use on a day to day basis. Calculators like GIR calculation, Pediatric BP Centiles (Hypertension), Anthropometry,Hyponatremic dehydration calculation,etc are part of this app. Pediatric Medical Students can calculate any value within 5 minutes." />
        <AppOne imgSrc="assets/images/treat.png" heading="Treatment Algorithm" paragraph="Every disease has a treatment algorithm. Doctaverse contains many treatment guidelines to help doctors to treat patients by treatment guidelines. Below diseases are included: Febrile Seizure, Asthma, Anaphylactic Reaction,Cardiac Arrest, Dyslipidemia, Bradyarrhythmia,Guillian Barre Syndrome." />
        <AppTwo imgSrc="assets/images/Dia.png" heading="Diagnostic Algorithm" paragraph="With doctaverse app students can see flowchart for diagnosis anywhere anytime. Doctaverse app provides diagnostic algorithms for many diseases like hypertension, short stature, GBS, floppy infants, DMD, immunodeficiency, Asthma, Obesity, Delayed Puberty, Lactic Acidosis and many more." />
        <AppOne imgSrc="assets/images/comm.png" heading="Doctor's Community" paragraph="Doctaverse is planning to make the largest platform for doctors where they can post cases, paper, queries, vacancies, achievements. They can connect to other doctors." />
        <AppTwo imgSrc="assets/images/drug.png" heading="Drug Index" paragraph="All Pediatric drug details with their Mechanism, Indications, Contraindications, Interactions, Adverse Effects & Dosing based on weight and certain conditions." />
        <TestimonialComponent />
        <AppDownload />
        <Footer />
      </div>

    </>
  )
}

export default Home
