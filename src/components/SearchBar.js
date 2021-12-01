import { useState } from "react";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";

export default function SearchBar(){
  const [textSearch, setTextSearch] = useState("");
    return(
      <div>
        <form>
          <div className="rounded-full bg-gray-300 flex flex-row items-center shadow-lg">
            <div className=" mx-1 xl:mx-3">
              <MagnifyingGlassIcon/>
            </div>
            <input className="bg-transparent" type="text" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} placeholder="Search"/>
          </div>
        </form>
      </div>
    );
}