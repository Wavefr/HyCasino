import Head from 'next/head'
import Landing from "../components/Landing"
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Casino</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <div className="flex flex-col md:flex md:flex-row">
       <div className="">
       <SideBar/>
       </div>
       <div className="flex-col grow">
       <TopBar/>
       <Landing/>
       <Footer/>
       </div>
     </div>

     
    </div>
  )
}
