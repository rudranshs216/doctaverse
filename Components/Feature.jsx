import React from 'react'
import FeatureCard from './FeatureCard'
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';


const Feature = () => {
  return (
    <div id="about" className='py-24 flex flex-col items-center'>
        <h1 className='text-center text-3xl md:text-5xl font-bold'>What's Great About Docta-Verse?</h1>
        <div className='pt-16 flex flex-wrap justify-evenly xl:w-[1100px]'>
            <FeatureCard imgSrc={<DashboardCustomizeRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Doctors Dashboard"  />
            <FeatureCard imgSrc={<CalculateRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Medical Calculators"  />
            <FeatureCard imgSrc={<VaccinesRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Drug Index"  />
            <FeatureCard imgSrc={<DescriptionRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Diagnostic Algorithm"  />
            <FeatureCard imgSrc={<LocalHospitalRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Treatment Algorithm"  />
            <FeatureCard imgSrc={<PeopleRoundedIcon className='w-[50px] h-[50px]'/>} heading ="Community of Doctors"  />
        </div>
    </div>
  ) 
}

export default Feature