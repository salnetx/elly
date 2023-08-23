import Image from "next/image";
import Link from "next/link";
const Nav = ()=>{
   return(
    <>
    <div className="flex backdrop-blur-3xl bg-white/30  sm:px-16 px-5 sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
    <div className="flex-1">
   <Image className="sm:translate-x-6" alt="Logo" priority width={137} height={137} src="/logoelly.png" />
    </div>


    {/* <div className="flex-none hover:opacity-90 rounded-full mt-.5">
    <Link href="/" className="text-lg font-semibold text-zinc-400 flex gap-1">
    <svg className="w-12 h-12 bg-transparent p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
    </Link>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

    <div className="flex-none">
    <Link href="https://threads.net/100daysofnextjs" className="text-xs font-medium px-4 py-2.5 rounded-xl hover:shadow-sm bg-[#EFD2FF] border border-b-4 border-r-2 border-neutral-700 text-neutral-800 flex gap-1">
    <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition">
    <svg className="animate-pulse" fill="#7850FF" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
    <span className="font-bold">Explore Apps</span>
    </span>
    </Link>
    
    </div>
    {/* <hr className="mt-2" /> */}
  </div>
  </>
   )
}

export default Nav;