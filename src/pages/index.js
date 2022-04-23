import Footer from '../components/template/Footer'
import Header from '../components/template/Header'
import OSRank from '../components/home/OSRank'
import TrendCardTab from '../components/home/TrendCardTab'
import WhatOutSource from '../components/home/WhatOutSource'
import IndexBanner from '../components/home/IndexBanner'

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
