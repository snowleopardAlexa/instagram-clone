import Image from "next/image";

const Header = () => {
  return (
    <div>
        <Image 
          src="/instagram-logo.png"
          alt="logo"
          layout="fill"
        />
    </div>
  )
}

export default Header