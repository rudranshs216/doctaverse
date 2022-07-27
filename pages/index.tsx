import type { NextPage } from 'next'
import Head from 'next/head'
import HeroComponent from "../Components/HeroComponent"


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DoctaVerse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className='text-5xl underline'>Hello</h1>
      </div>

    </>
  )
}

export default Home
