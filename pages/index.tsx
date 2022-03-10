import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram Clone</title>
      </Head>
       <Header />
       <Feed />
    </div>
  )
}

export default Home
