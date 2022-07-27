import type { NextPage } from 'next'
import Head from 'next/head'
import HeroComponent from "../Components/HeroComponent"
import Nav from '../Components/Nav'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DoctaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='text-5xl underline'>Hello</h1>
        <Nav />
      </div>

    </>
  )
}

export default Home
