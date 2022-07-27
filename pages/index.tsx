import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import AppDownload from "../Components/AppDownload"
import AppOne from "../Components/AppOne"
import AppTwo from "../Components/AppTwo"
import Feature from "../Components/Feature"
import FeatureCard from '../Components/FeatureCard'
import Footer from "../Components/Footer"
import TestimonialComponent from "../Components/TestimonialComponent"
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DoctaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <HeroComponent /> */}
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
        {/* <Feature /> */}
        <div id="about" className='py-24 flex flex-col items-center'>
          <h1 className='text-center text-3xl md:text-5xl font-bold'>What's Great About Docta-Verse?</h1>
          <div className='pt-16 flex flex-wrap justify-evenly xl:w-[1100px]'>
            <FeatureCard imgSrc={<DashboardCustomizeRoundedIcon className='w-[50px] h-[50px]' />} heading="Doctors Dashboard" />
            <FeatureCard imgSrc={<CalculateRoundedIcon className='w-[50px] h-[50px]' />} heading="Medical Calculators" />
            <FeatureCard imgSrc={<VaccinesRoundedIcon className='w-[50px] h-[50px]' />} heading="Drug Index" />
            <FeatureCard imgSrc={<DescriptionRoundedIcon className='w-[50px] h-[50px]' />} heading="Diagnostic Algorithm" />
            <FeatureCard imgSrc={<LocalHospitalRoundedIcon className='w-[50px] h-[50px]' />} heading="Treatment Algorithm" />
            <FeatureCard imgSrc={<PeopleRoundedIcon className='w-[50px] h-[50px]' />} heading="Community of Doctors" />
          </div>
        </div>
        <div className='h-full py-10 lg:py-20 w-full flex flex-col justify-around items-center lg:h-full lg:flex-row'>
          <img className='w-[500px]' src="assets/images/dashboard.png" />
          <div className="w-[100%] mt-10 p-4 sm:w-[500px] lg:mt-0">
            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Doctor's Dashboard</h1>
            <p className='text-l my-5 font-semibold md:text-xl lg:text-2xl'>Plateform for doctors to see 10 patients in 1 hour and can genrate prescription just by their voice</p>


          </div>

        </div>
        <div className='h-full py-10 lg:py-20 w-full flex flex-col justify-around items-center lg:h-full lg:flex-row-reverse'>
          <img className='w-[500px]' src="assets/images/cal.png" />
          <div className="w-[100%] mt-10 p-4 sm:w-[500px] lg:mt-0">
            <h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Medical Calculator</h1>
            <p className='text-l my-5 font-semibold md:text-xl lg:text-2xl'>All the pediatric calculators which students use on a day to day basis. Calculators like GIR calculation, Pediatric BP Centiles (Hypertension), Anthropometry,Hyponatremic dehydration calculation,etc are part of this app. Pediatric Medical Students can calculate any value within 5 minutes.</p>


          </div>

        </div>
        {/* <AppOne imgSrc="assets/images/dashboard.png" heading="Doctor's Dashboard" paragraph="Plateform for doctors to see 10 patients in 1 hour and can genrate prescription just by their voice" /> */}
        {/* <AppTwo imgSrc="assets/images/cal.png" heading="Medical Calculator" paragraph="All the pediatric calculators which students use on a day to day basis. Calculators like GIR calculation, Pediatric BP Centiles (Hypertension), Anthropometry,Hyponatremic dehydration calculation,etc are part of this app. Pediatric Medical Students can calculate any value within 5 minutes." /> */}
        <AppOne imgSrc="assets/images/treat.png" heading="Treatment Algorithm" paragraph="Every disease has a treatment algorithm. Doctaverse contains many treatment guidelines to help doctors to treat patients by treatment guidelines. Below diseases are included: Febrile Seizure, Asthma, Anaphylactic Reaction,Cardiac Arrest, Dyslipidemia, Bradyarrhythmia,Guillian Barre Syndrome." />
        <AppTwo imgSrc="assets/images/Dia.png" heading="Diagnostic Algorithm" paragraph="With doctaverse app students can see flowchart for diagnosis anywhere anytime. Doctaverse app provides diagnostic algorithms for many diseases like hypertension, short stature, GBS, floppy infants, DMD, immunodeficiency, Asthma, Obesity, Delayed Puberty, Lactic Acidosis and many more." />
        <AppOne imgSrc="assets/images/comm.png" heading="Doctor's Community" paragraph="Doctaverse is planning to make the largest platform for doctors where they can post cases, paper, queries, vacancies, achievements. They can connect to other doctors." />
        <AppTwo imgSrc="assets/images/drug.png" heading="Drug Index" paragraph="All Pediatric drug details with their Mechanism, Indications, Contraindications, Interactions, Adverse Effects & Dosing based on weight and certain conditions." />
        {/* <TestimonialComponent /> */}
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
        {/* <AppDownload /> */}
        <div className='w-full bg-[#0084ff] flex flex-col justify-center items-center py-24'>
          <h1 className='text-white text-4xl text-center md:text-5xl font-semibold mx-4 w-full'>Download the App</h1>
          <div className='mt-6'>
            <Link href="https://apps.apple.com/eg/app/doctaverse-pediatrics/id1616885718">
              <button className='px-6 py-3 bg-[#2c343c] text-white border-2 border-[#0084ff] rounded my-5 mr-5 hover:border-black hover:bg-white hover:text-black'>App Store</button>
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.doctaverse.doctors.community.diagnostics.calculators.drugdoses">
              <button className='px-6 py-3 rounded bg-white border-2 border-[#0084ff]  hover:bg-[#0099ff]/50 hover:border-white hover:text-white'>Google Play</button>
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
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
      </div>

    </>
  )
}

export default Home
