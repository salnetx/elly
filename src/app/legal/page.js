import Link from "next/link"
import Footer from "../Footer"

const Home = ()=>{
    return(
        <>
        <section className="sm:px-20 sm:pt-12 pt-6 bg-[#FAFAFA]">
        <h1 className="sm:mx-32 mx-8 text-left text-neutral-800 text-2xl sm:text-5xl py-20 font-medium">✍🏻 Legal</h1>
        
        
        <div className="grid sm:grid-cols-3 px-8 sm:px-32 bg-transparent gap-y-8 sm:gap-x-8">

           {/* INSIDE */}
           <div className=" backdrop-blur-sm bg-white/5 transition duration-700 ease-in-out hover:-skew-x-3 hover:skew-y-3 hover:-translate-y-6 shadow-lg hover:shadow-2xl hover:scale-125 scale-100 font-semibold text-center rounded-3xl hover:border border-neutral-200 p-10 max-w-xs">
            <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white'>
           📜 
           </div>
           <span className='text-base text-xl text-neutral-600 font-medium'>Privacy Policy</span>
            </div>
            {/* <div className="text-neutral-100 "> 
            This is our privacy and policy.
            </div> */}
            <div className='flex justify-between items-center'>
            <button  className='flex items-center justify-center transition duration-700 ease-in-out text-sm hover:font-medium font-medium rounded-xl mt-5 space-x-1 text-neutral-600'>
           <span>Learn more</span>
           </button>
           </div>
           </div>
           {/* INSIDE */}


           {/* INSIDE */}
           <div className=" backdrop-blur-sm bg-white/5 transition duration-700 ease-in-out hover:-skew-x-3 hover:skew-y-3 hover:-translate-y-6 shadow-lg hover:shadow-2xl hover:scale-125 scale-100 font-semibold text-center rounded-3xl hover:border border-neutral-200 p-10 max-w-xs">
            <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white'>
           📜 
           </div>
           <span className='text-base text-xl text-neutral-600 font-medium'>Terms</span>
            </div>
            <div className='flex justify-between items-center'>
            <button  className='flex items-center justify-center transition duration-700 ease-in-out text-sm hover:font-medium font-medium rounded-xl mt-5 space-x-1 text-neutral-600'>
           <span>Learn more</span>
           </button>
           </div>
           </div>
           {/* INSIDE */}


           {/* INSIDE */}
           <div className=" backdrop-blur-sm bg-white/5 transition duration-700 ease-in-out hover:-skew-x-3 hover:skew-y-3 hover:-translate-y-6 shadow-lg hover:shadow-2xl hover:scale-125 scale-100 font-semibold text-center rounded-3xl hover:border border-neutral-200 p-10 max-w-xs">
            <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white'>
           📜 
           </div>
           <span className='text-base text-xl text-neutral-600 font-medium'>Ads policy</span>
            </div>
            <div className='flex justify-between items-center'>
            <button  className='flex items-center justify-center transition duration-700 ease-in-out text-sm hover:font-medium font-medium rounded-xl mt-5 space-x-1 text-neutral-600'>
           <span>Learn more</span>
           </button>
           </div>
           </div>
           {/* INSIDE */}


           {/* INSIDE */}
           <div className=" backdrop-blur-sm bg-white/5 transition duration-700 ease-in-out hover:-skew-x-3 hover:skew-y-3 hover:-translate-y-6 shadow-lg hover:shadow-2xl hover:scale-125 scale-100 font-semibold text-center rounded-3xl hover:border border-neutral-200 p-10 max-w-xs">
            <div className='flex flex-row items-center space-x-3'>
           <div className='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white'>
           📜 
           </div>
           <span className='text-base text-xl text-neutral-600 font-medium'>Refund Policy</span>
            </div>
            <div className='flex justify-between items-center'>
            <button  className='flex items-center justify-center transition duration-700 ease-in-out text-sm hover:font-medium font-medium rounded-xl mt-5 space-x-1 text-neutral-600'>
           <span>Learn more</span>
           </button>
           </div>
           </div>
           {/* INSIDE */}


        </div>

        <Link href="/">
        <div className="mx-8 sm:mx-32 py-12 mb-32">
            <span className="backdrop-blur-sm bg-white/5 transition duration-700 ease-in-out border border-neutral-300 hover:bg-neutral-200 border-b-2 text-neutral-700 rounded-3xl px-16 py-4">{`⬅ `}Back</span>
        </div>
        </Link> 
        </section>

        {/* Footer */}
            <Footer />
        {/* Footer */}
        </>
    )
}

export default Home;