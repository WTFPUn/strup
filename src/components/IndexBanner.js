import Image from 'next/image'
import Link from 'next/link'

function IndexBanner() {
  return(
    <div className=" mobile:h-50 mobile:w-screen medium-tablet:h-screen medium-tablet:w-screen big-device:h-screen big-device:w-full relative">
      <Image src={"/homeimage/mainbg.png"} width="50" height="22" layout="responsive" alt="mainbg"/>
      <div className="absolute mobile:top-8 mobile:left-2 medium-tablet:top-16 medium-tablet:left-8 big-device:top-32  big-device:left-16 flex flex-col font-body place-items-center">
        <div className="text-left text-noiceyellow big-device:text-8xl big-device:font-base mobile:mb-8 mb-16">{"Self Learning"}</div>
        <div className="text-left text-white big-device:text-3xl mobile:text-xss font-light mb-2 w-full">พื้นที่สำหรับการเรียนออนไลน์</div>
        <div className="text-left text-white big-device:text-3xl mobile:text-xss font-light mb-2 w-full">ที่มอบให้แก่ผู้ที่ต้องการศึกษาหาความรู้ด้วยตนเอง</div>
        <div className="text-left text-white big-device:text-3xl mobile:text-xss font-light mb-2 w-full">หรือจะเรียกได้ว่าเป็นพื้นที่สำหรับคนที่ต้องการ</div>
        <div className="text-left text-white big-device:text-3xl mobile:text-xss font-light mb-2 w-full">“เรียนด้วยตัวเอง” นั่นเอง</div>
        <button className={`font-thin  bg-buttonblue rounded-full justify-center medium-tablet:p-2 medium-tablet:px-2 big-device:p-2 big-device:px-10 mt-2 text-white`}>
      <Link className="font-body medium-tablet:text-xl big-device:text-3xl mobile:text-lg" href='/about'>
        เลือกวิชา
      </Link>
    </button>     
      </div>
    </div>
  )
};

export default IndexBanner;