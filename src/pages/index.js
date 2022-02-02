import Footer from '../components/Footer'
import Header from '../components/Header'
import OSRank from '../components/home/OSRank'
import IndexBanner from '../components/IndexBanner'

export default function Home() {
  return (
    <div className="font-body w-full h- mobile:w-screen medium-tablet:w-screen  big-device:w-full relative ">
      <div className="sticky top-0 z-50">
      <Header/>
      </div>
      <div className="absolute top-0 w-screen">
       <IndexBanner/>
       <OSRank/>
        <Footer/> 
      </div>
      
    </div>
  )
}
