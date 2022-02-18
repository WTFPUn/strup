import Footer from '../components/Footer'
import Header from '../components/Header'
import OSRank from '../components/home/OSRank'
import TrendCard from '../components/home/TrendCard'
import TrendCardTab from '../components/home/TrendCardTab'
import WhatOutSource from '../components/home/whatOutSource'
import IndexBanner from '../components/IndexBanner'

export default function Home() {
  return (
    <div className="font-body mobile:w-screen medium-tablet:w-screen  big-device:w-screen relative ">
      <Header/>
      <div className="absolute top-0 w-screen overflow-y-auto flex-1">
        <IndexBanner/>
        <OSRank/>
        <WhatOutSource/>
        <TrendCardTab/>
        <Footer/> 
      </div>
      
    </div>
  )
}
