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
    <Link href="https://threads.net/100daysofnextjs" className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#000] text-white flex gap-1">
    <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
    <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z"/>
    </svg>
    <span>Sign in</span>
    </span>
    </Link>
    </div>
    {/* <hr className="mt-2" /> */}
  </div>
  </>
   )
}

export default Nav;