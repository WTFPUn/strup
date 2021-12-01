import SearchBar from "./SearchBar";
import Logo from "./icons/logo";

export default function Header() {
  return( 
    <div className="shadow-md h-24 sm:w-screen xl:w-full sticky top-0 z-50 flex flex-row items-center font-semibold text-xl xl:text-xl bg-white opacity-80 " >
        <div className="fill-current text-blue-400"><Logo/></div>
        <div className="mx-3 xl:mx-5">Self Learning</div>
        <div className="mx-3 xl:mx-5">Oppotunity</div>
        <div className="mx-3 xl:mx-5">Extra Class</div>
        <div className="mx-3 xl:mx-5">FAQ</div>
        <div className="mx-3 xl:mx-5">UHOI</div>
        <div className="mx-3 xl:ml-auto flex flex-row">
          <SearchBar/>      
          <div className="mx-5">DM</div>      
          <div className="mx-5">DropBox</div>               
          <div className="mx-5">Photo</div>
        </div>
    </div>  
  );
}
//self learning, oppotunity, extra class, FAQ, UHOI