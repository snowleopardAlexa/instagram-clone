import Image from "next/image";
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";


const Header = () => {
  return (
    <div className="shadow-sm"> 
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24">
        <Image 
          src="/instagram-text-logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
        <Image 
          src="/instagram-logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
        </div>
        <div className="max-w-xs">
        <div className="relative mt-1 p-3 rounded-md"> 
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input 
              className="bg-gray-50 block w-full pl-10 sm:text-sm 
              border-gray focus:ring-black focus:border-black rounded-md" 
              type="text"
              placeholder="Search" 
            />
        </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
           <PaperAirplaneIcon className="navBtn rotate-45" />
           <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 
           rounded-full flex items-center justify-center animate-pulse text-white">7</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <Image 
            className="imgD"
            src="/alexa.jpeg"
            alt="profile photo"
            width="35"
            height="40"
          />
        </div>
      </div>
    </div> 
  )
}

export default Header