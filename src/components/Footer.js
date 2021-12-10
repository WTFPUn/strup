import FacebookIcon from "./icons/FacebookIcon";
import InstragramIcon from "./icons/InstragramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Link from 'next/link'

function Footer() {
  return(
    <div className="z-1 shadow-md h-auto big-device:w-full flex flex-col items-center big-device:font-semibold mobile:text-xs big-device:text-base bg-black mt-auto">
      <div className="flex flex-row py-2 xl:w-full border-b-2 w-full justify-center">
        <div className="grid grid-cols-3 big-device:gap-x-6 text-white big-device:font-normal mobile:text-xss">
          <Link href="/about">
            <a>about us</a>
          </Link>
          <Link href="/selflearn">
            <a>self learning</a>
          </Link>
          <Link href="/FAQ">
            <a>FAQ</a>
          </Link>
          <Link href="/contract">
            <a>contract us</a>
          </Link>
          <Link href="/opportunity">
            <a>opportunity</a>
          </Link>
          <Link href="/UHOI">
            <a>UHOI</a>
          </Link>
          <Link href="report">
            <a>report problem</a>
          </Link>
          <Link href="extraclass">
            <a>extra class</a>
          </Link>
        </div>
        <div className="flex flex-row">
          <FacebookIcon/>
          <TwitterIcon/>
          <InstragramIcon/>
        </div>        
      </div>
      <div className="flex flex-row my-2 mobile:text-xss big-device:font-medium">
        <div className="text-gray-400 mx-5">Copyright © 2021 www.inmymind.com, All rights reserved</div>
        <div className="flex flex-row text-white">
          <div className="px-5">Term of Use</div>
          <div className="border-l-2 px-5">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;