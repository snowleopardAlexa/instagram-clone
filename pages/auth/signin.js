import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

// runs in the browser 
function signIn({ providers }) {
  return (
   <>
   <Header />
     {Object.values(providers).map((provider) => (
         <div key={provider.name}>
             <button onClick={() => SignIntoProvider(provider.id)}>
                 Sign in with {provider.name}
             </button>
         </div>
     ))}
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