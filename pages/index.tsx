import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
      </Head>
       <Header />
       <Feed />
    </div>
  )
}

export default Home
