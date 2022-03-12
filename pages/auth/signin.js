import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";

// runs in the browser 
function signIn({ providers }) {
  return (
   <>
   <Header />

   <div className="flex flex-col items-center justify-center 
   min-h-screen py-2 -mt-56 px-14 text-center">
   <div>
   <Image src="/instagram-text-logo.png" alt="instagram logo" width="250px" height="100px" /> 
   <p className="font-xs italic">
     This is not a real app, it is built for educational purposes only. 
   </p> 
   <div className="mt-40">
     {Object.values(providers).map((provider) => (
         <div key={provider.name}>
             <button 
               className="p-3 bg-blue-500 rounded-lg text-white"
               onClick={() => SignIntoProvider(provider.id)}
             >
                 Sign in with {provider.name}
             </button>
         </div>
       ))}
     </div>
   </div>
   </div>
   </>
  )
}

// runs on middle server - server side rendering 
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
      props: {
          providers,
      },
   }
}

export default signIn