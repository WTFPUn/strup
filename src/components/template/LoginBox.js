import { Menu, Transition} from "@headlessui/react";
import { Fragment } from 'react'

const LoginBox = ({login}) => {
  console.log(login)
  if (login) {
    return (
      <div>
        <Menu as="div" className="relative">
          <div>
          <Menu.Button>
          <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2143 6.55556C17.2143 9.6238 14.6559 12.1111 11.5 12.1111C8.34409 12.1111 5.78571 9.6238 5.78571 6.55556C5.78571 3.48731 8.34409 1 11.5 1C14.6559 1 17.2143 3.48731 17.2143 6.55556Z" fill="#151515"/>
<path d="M11.5 16.2778C5.97715 16.2778 1.5 20.6306 1.5 26H21.5C21.5 20.6306 17.0228 16.2778 11.5 16.2778Z" fill="#151515"/>
<path d="M17.2143 6.55556C17.2143 9.6238 14.6559 12.1111 11.5 12.1111C8.34409 12.1111 5.78571 9.6238 5.78571 6.55556C5.78571 3.48731 8.34409 1 11.5 1C14.6559 1 17.2143 3.48731 17.2143 6.55556Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 16.2778C5.97715 16.2778 1.5 20.6306 1.5 26H21.5C21.5 20.6306 17.0228 16.2778 11.5 16.2778Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <Menu.Item as="div">
              
            </Menu.Item>
          </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  else if (!login) {
  return (
    <div>
      <Menu as="div" className="relative">
          <div>
          <Menu.Button>
          <svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.2143 6.55556C17.2143 9.6238 14.6559 12.1111 11.5 12.1111C8.34409 12.1111 5.78571 9.6238 5.78571 6.55556C5.78571 3.48731 8.34409 1 11.5 1C14.6559 1 17.2143 3.48731 17.2143 6.55556Z" fill="#151515"/>
<path d="M11.5 16.2778C5.97715 16.2778 1.5 20.6306 1.5 26H21.5C21.5 20.6306 17.0228 16.2778 11.5 16.2778Z" fill="#151515"/>
<path d="M17.2143 6.55556C17.2143 9.6238 14.6559 12.1111 11.5 12.1111C8.34409 12.1111 5.78571 9.6238 5.78571 6.55556C5.78571 3.48731 8.34409 1 11.5 1C14.6559 1 17.2143 3.48731 17.2143 6.55556Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 16.2778C5.97715 16.2778 1.5 20.6306 1.5 26H21.5C21.5 20.6306 17.0228 16.2778 11.5 16.2778Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <Menu.Item as="div">
              
            </Menu.Item>
          </Menu.Items>
          </Transition>
        </Menu>
    </div>
  )
  }
  return (
    <></>
  )
}

export default LoginBox;