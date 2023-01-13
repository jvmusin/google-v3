import type {NextPage} from 'next'
import Head from 'next/head'
import React from "react";
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google v3</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/*Header*/}
      <Header/>
      {/*Body*/}
      {/*Footer*/}
    </div>
  )
}

export default Home
