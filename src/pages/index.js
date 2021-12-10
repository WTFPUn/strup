import Footer from '../components/Footer'
import Header from '../components/Header'
import IndexBanner from '../components/IndexBanner'

export default function Home() {
  return (
    <div className="w-full mobile:w-screen medium-tablet:w-screen  big-device:w-full">
      <Header/>
      <IndexBanner/>
      <Footer/>
    </div>
  )
}