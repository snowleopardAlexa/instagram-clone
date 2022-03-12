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
        <div className="flex-1 mx-4">
            <h2 className="font-bold">alexaalexa</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  )
}

export default MiniProfile