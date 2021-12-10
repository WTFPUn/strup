import SearchBar from "./SearchBar";
import Image from 'next/image'
import ChatIcon from "./icons/ChatIcon";
import NotiIcon from "./icons/NotiIcon";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return( 
    <div className="shadow-md h-24 w-auto big-device::w-full sticky top-0 z-50 flex flex-row items-center font-semibold text-xl xl:text-xl bg-white " >
        <div className="big-device:mx-2">
         <LogoIcon/>
        </div>
        <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">Self Learning</div>
        <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">Oppotunity</div>
        <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">Extra Class</div>
        <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">FAQ</div>
        <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">UHOI</div>
        <div className="gap-x-3 items-center mx-3 big-device:ml-auto flex flex-row">
          <SearchBar/>
          <ChatIcon/>
          <NotiIcon/>               
        </div>
    </div>  
  );
}
//self learning, oppotunity, extra class, FAQ, UHOI