import SearchBar from "./SearchBar";
import Image from "next/image";
import ChatIcon from "../icons/ChatIcon";
import LogoIcon from "../icons/LogoIcon";
import PersonIcon from "../icons/PersonIcon";
import { Fragment } from 'react'
import { Menu, Transition} from "@headlessui/react";
import PopUpBox from "./PopUpBox";
import GearIcon from "../icons/GearIcon";
import LoginBox from "./LoginBox";

export default function Header() {
  const notiOut = () => {
    
  }
  return (
    <header className="shadow-md h-24 w-auto sticky z-50 flex flex-row items-center font-medium text-xl   bg-white px-32">
      <div>
        <LogoIcon />
      </div>
      <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">
        Self Learning
      </div>
      <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">
        Oppotunity
      </div>
      <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">
        Extra Class
      </div>
      <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">
        FAQ
      </div>
      <div className="mobile:hidden medium-tablet:hidden mx-3 big-device:mx-5">
        UHOI
      </div>
      <div className="gap-x-3 items-center mx-3 big-device:ml-auto flex flex-row">
        <SearchBar />
        <ChatIcon />
        <Menu as="div" className="relative">
          <div>
          <Menu.Button>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.79167C0 3.52084 0.504835 2.30206 1.40345 1.40345C2.30206 0.504835 3.52084 0 4.79167 0H18.2083C19.4792 0 20.6979 0.504835 21.5966 1.40345C22.4952 2.30206 23 3.52084 23 4.79167V18.2083C23 19.4792 22.4952 20.6979 21.5966 21.5966C20.6979 22.4952 19.4792 23 18.2083 23H4.79167C3.52084 23 2.30206 22.4952 1.40345 21.5966C0.504835 20.6979 0 19.4792 0 18.2083V4.79167ZM21.0833 11.5V4.79167C21.0833 4.02917 20.7804 3.2979 20.2413 2.75873C19.7021 2.21957 18.9708 1.91667 18.2083 1.91667H4.79167C4.02917 1.91667 3.2979 2.21957 2.75873 2.75873C2.21957 3.2979 1.91667 4.02917 1.91667 4.79167V11.5H6.70833C6.9625 11.5 7.20625 11.601 7.38598 11.7807C7.5657 11.9604 7.66667 12.2042 7.66667 12.4583C7.66667 12.558 7.682 12.7688 7.728 13.0487C7.80658 13.5221 7.94842 13.9936 8.165 14.4248C8.75533 15.6093 9.78075 16.2917 11.5 16.2917C13.2192 16.2917 14.2447 15.6093 14.835 14.4248C15.0516 13.9936 15.1934 13.524 15.272 13.0487C15.318 12.7688 15.3333 12.558 15.3333 12.4583C15.3333 12.234 15.4119 12.0168 15.5555 11.8445C15.699 11.6722 15.8985 11.5557 16.1192 11.5153L16.2917 11.5H21.0833Z"
                fill="#151515"
              />
            </svg>
          </Menu.Button>
          </div>
          <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bg-white px-6 py-2 right-0 w-max rounded-md border-2 border-[#AEAEAE] h-72 ">
            <Menu.Item>
              <div className="flex flex-row gap-10">
              <div className="mr-3 text-3xl font-normal">การแจ้งเตือน</div>
              <button className="ml-3 border-[#AEAEAE] border-2 flex flex-row h-max mt-2 font-normal px-5 rounded-md text-lg">
                <GearIcon/>
                <div>
                  ตั้งค่า
                </div>
              </button>
              </div>
            </Menu.Item>
            <Menu.Item>
              <PopUpBox text={"Kuay1"} name="Somsri" readed={0} timestamp={"3000"} type={0}/>
            </Menu.Item>
            <Menu.Item>
              <PopUpBox text={"Kuay2"}/>
            </Menu.Item>
          </Menu.Items>
          </Transition>
        </Menu>
        <LoginBox login={1}/>
      </div>
    </header>
  );
}
//self learning, oppotunity, extra class, FAQ, UHOI
