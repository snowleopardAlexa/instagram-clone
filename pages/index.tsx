import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
      </Head>
       <Modal />
       <Header />
       <Feed />
      

    </div>
  )
}

export default Home
