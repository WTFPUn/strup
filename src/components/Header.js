import SearchBar from "./SearchBar";
import Image from 'next/image'
import ChatIcon from "./icons/ChatIcon";
import NotiIcon from "./icons/NotiIcon";
import LogoIcon from "./icons/LogoIcon";
import PersonIcon from "./icons/PersonIcon";

export default function Header() {
  return( 
    <header className="shadow-md h-24 w-auto sticky z-50 flex flex-row items-center font-medium text-xl   bg-white px-32" >
        <div>
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
          <PersonIcon/>               
        </div>
    </header>  
  );
}
//self learning, oppotunity, extra class, FAQ, UHOI