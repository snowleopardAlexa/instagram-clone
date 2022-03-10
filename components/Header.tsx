import Image from "next/image";

const Header = () => {
  return (
    <div> 
      <div className="flex justify-between max-w-6xl">
        <div className="relative hidden lg:inline-grid h-24 w-24">
        <Image 
          src="/instagram-text-logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
        <Image 
          src="/instagram-logo.png"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
        </div>
      </div>
    </div> 
  )
}

export default Header