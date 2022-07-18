import AppOne from "../Components/AppOne"
import AppTwo from "../Components/AppTwo"
import Feature from "../Components/Feature"
import HeroComponent from "../Components/HeroComponent"
import TestimonialComponent from "../Components/TestimonialComponent"

export default function Home() {
  return (<>
    <HeroComponent />
    <Feature/>
    <AppOne />
    <AppTwo />
    <TestimonialComponent/>
    </>
  )
}
