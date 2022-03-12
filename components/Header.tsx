import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {

  const { data: session } = useSession()
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <div onClick={() => router.push('/')} className="relative hidden w-24 lg:inline-grid cursor-pointer">
          <Image
            src="/instagram-text-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div onClick={() => router.push('/')} className="relative w-10 flex-shrink-0 lg:hidden cursor-pointer">
          <Image
            src="/instagram-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="border-gray block w-full rounded-md bg-gray-50 
              pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative">
              <PaperAirplaneIcon className="navBtn rotate-45" />
              <div
                className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse 
             items-center justify-center rounded-full bg-red-500 text-xs text-white"
              >
                7
              </div>
            </div>
            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
            <UserGroupIcon className="navBtn" />
            <HeartIcon className="navBtn" />
  
            <img
              onClick={signOut}
              className="imgD"
              src={session.user.image}
              alt="profile photo"
            />
            </>
          ) : (
           <button onClick={signIn}>Sign In</button>
          )}
        
        </div>
      </div>
    </div>
  )
}

export default Header
