import { useState } from "react";
import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";

export default function SearchBar() {
  const [textSearch, setTextSearch] = useState("");
    return(
      <div className=" cursor-help mobile:hidden medium-tablet:hidden">
        <form>
          <div className="rounded-full bg-gray-300 flex flex-row items-center shadow-sm">
            <div className=" mx-1 xl:mx-3">
              <MagnifyingGlassIcon/>
            </div>
            <input className="bg-transparent  focus:outline-none" type="text" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} placeholder="Search"/>
          </div>
        </form>
      </div>
    );
}