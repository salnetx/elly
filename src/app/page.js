import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
const Home = ()=>{
    return(
      <>
          <Nav />

          <section className="sm:px-52 sm:pt-12 pt-6 bg-[#FAFAFA]">
              <header>

              <div
     className="max-w-lg px-4 pt-8 sm:pb-4 mx-auto text-left md:max-w-none md:text-center"
    >
    <div className='text-center py-4'>
    <Link href={"https://twitter.com/salnetxyz"}>
    <button class="bg-white border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-bold py-2.5 px-4 rounded-full inline-flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill='#00acee' width="16" height="16" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
    </svg>
    &nbsp; &nbsp;<span> Follow on Twitter </span>
    </button>
    </Link>
    </div>
    </div>

                  <div className="flex justify-center">
                  <Image
                  alt="logo"
                    src="/logger.png"
                    width="100"
                    height="100"
                  />
                  </div>

                  <p className="sm:text-5xl text-3xl font-medium text-center pt-6">Simplify App Sharing</p>
                  <p className="sm:text-lg text-neutral-400 text-center sm:px-80 px-12 pt-6">Simplify app downloads with a single link, to all app stores. And explore cool Mobile & Desktop Apps.</p>

                  <div
     className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center"
    >
    <div className='text-center py-4 space-x-4'>
    <button class="bg-white border border-b-2 border-l-2 border-[#16161d] translate-y-1 text-neutral-800 hover:bg-neutral-200 text-sm font-bold py-2.5 px-10 rounded-xl inline-flex items-center">
    <svg fill="#16161d" clip-rule="evenodd" fill-rule="evenodd" width={20} height={20} stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18v3c0 .621.52 1 1 1h14c.478 0 1-.379 1-1v-14c0-.478-.379-1-1-1h-3v-3c0-.478-.379-1-1-1h-14c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1zm10.5-12h-9.5c-.62 0-1 .519-1 1v9.5h-2.5v-13h13z" fill-rule="nonzero"/></svg>
    &nbsp; &nbsp;<span> Explore Apps</span>
    </button>
    </div>

    <div className='text-center space-x-4'>
    <button class="translate-y-1 text-center text-black hover:animate-pulse text-sm font-bold py-2.5 px-6 inline-flex items-center">
    <span> List your app</span>&nbsp; &nbsp;
    <svg clip-rule="evenodd" fill-rule="evenodd" width={20} height={20} stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg>
    </button>
    </div>

    </div>
    

              </header>








    <div className="px-12">

    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
      <Image alt="logo" width="320" height="320" src="/mobiimg.png" />


        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            Single link
            </h2>
            <p class="text-black text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
        </div>
      </div>
    </div>





    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
             List your app
            </h2>
            <p class="text-black text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.
            
            </p>
          </div>
          <div class="flex items-center space-x-3">
        
          </div>
        </div>
        <Image alt="logo" width="320" height="320" src="/mobiimg.png" />
      </div>
    </div>




    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
      <Image alt="logo" width="320" height="320" src="/mobiimg.png" />


        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            Explore Apps
            </h2>
            <p class="text-black text-base md:text-lg">Lorem Ipsum is so cool and awesome to act and so cool to think. And very awesome to eat and talk.

            </p>
          </div>
        </div>
      </div>
    </div>



              </div>
          </section>

          <Footer />
      </>
    )
}

export default Home;