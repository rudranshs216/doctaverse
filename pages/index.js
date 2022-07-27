import Head from "next/head"
import AppDownload from "../Components/AppDownload"
import AppOne from "../Components/AppOne"
import AppTwo from "../Components/AppTwo"
import Feature from "../Components/Feature"
import Footer from "../Components/Footer"
import HeroComponent from "../Components/HeroComponent"
import TestimonialComponent from "../Components/TestimonialComponent"

export default function Home() {
  return (<>
  <Head>
    <title>DoctaVerse</title>
  </Head>
    <HeroComponent />
    <Feature/>
    <AppOne imgSrc="assets/images/dashboard.png" heading="Doctor's Dashboard" paragraph="Plateform for doctors to see 10 patients in 1 hour and can genrate prescription just by their voice"/>
    <AppTwo imgSrc="assets/images/cal.png" heading="Medical Calculator" paragraph="All the pediatric calculators which students use on a day to day basis. Calculators like GIR calculation, Pediatric BP Centiles (Hypertension), Anthropometry,Hyponatremic dehydration calculation,etc are part of this app. Pediatric Medical Students can calculate any value within 5 minutes."/>
    <AppOne imgSrc="assets/images/drug.png" heading="Drug Index" paragraph="All Pediatric drug details with their Mechanism, Indications, Contraindications, Interactions, Adverse Effects & Dosing based on weight and certain conditions."/>
    <AppTwo imgSrc="assets/images/Dia.png" heading="Diagnostic Algorithm" paragraph="With doctaverse app students can see flowchart for diagnosis anywhere anytime. Doctaverse app provides diagnostic algorithms for many diseases like hypertension, short stature, GBS, floppy infants, DMD, immunodeficiency, Asthma, Obesity, Delayed Puberty, Lactic Acidosis and many more."/>
    <AppOne imgSrc="assets/images/treat.png" heading="Treatment Algorithm" paragraph="Every disease has a treatment algorithm. Doctaverse contains many treatment guidelines to help doctors to treat patients by treatment guidelines. Below diseases are included: Febrile Seizure, Asthma, Anaphylactic Reaction,Cardiac Arrest, Dyslipidemia, Bradyarrhythmia,Guillian Barre Syndrome."/>
    <AppTwo imgSrc="assets/images/comm.png" heading="Doctor's Community" paragraph="Doctaverse is planning to make the largest platform for doctors where they can post cases, paper, queries, vacancies, achievements. They can connect to other doctors."/>
    <TestimonialComponent/>
    <AppDownload />
    <Footer />
    </>
  )
}
