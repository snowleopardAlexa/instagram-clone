import Image from "next/image";

const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <Image 
          className="rounded-full border p-[2px]"
          src="/alexa.jpeg"
          alt="profile photo"
          width="50px"
          height="50px"
        />
        <div>
            <h2>alexaalexa</h2>
            <h3>Welcome to Instagram</h3>
        </div>
        <button>Sign out</button>
    </div>
  )
}

export default MiniProfile