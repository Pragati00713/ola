import React from 'react'

const Home = () => {
  return (
   <>
   
   <div className='bg-[url("https://cdn.olaelectric.com/ev-discovery-platform/lead-gen/lead_gen_web_banner.webp")] bg-cover h-screen w-full'>
   <div className='flex  h-screen w-full justify-start flex-wrap pl-10 items-center  '>
     <div className=''>
          <h1 className='lg:text-6xl sm:text-3xl text-justify text-red-900 font-bold'>Ready to take a closer
          <br /> look at S1 Pro?</h1>
     </div>
     <div className=''>
          <form className='flex flex-col h-auto w-auto  ml-10 sm:flex-col sm:h-auto border-solid border-2 border-black  rounded-lg '>
               <h1 className='h-auto w-80 flex p-6 text-3xl'>Get in touch</h1>

<input type="number" placeholder='Enter your number'className='h-auto w-80 sm:h-auto sm-w-60 flex  m-3 p-2 text-xl border-solid border-2 border-black  rounded-lg ' />
<input type="text" placeholder='enter your name'className='h-auto w-80 flex  m-3 p-2 text-xl border-solid border-2 border-black  rounded-lg'    />
<input type="text" placeholder='enter your city' className='h-auto w-80 flex  m-3 p-2 text-xl border-solid border-2 border-black  rounded-lg'  />
<button placeholder='' className='h-auto w-36 flex items-center justify-center ml-20  text-xl border-solid border-2 border-black  rounded-lg'  >i am not abroat</button>
<button className='h-auto w-80 flex  m-3 p-2 text-xl border-solid  text-white font-bold border-2 justify-center  border-black  bg-slate-300 rounded-sm'  >Confirm booking</button>
          </form>
     </div>
   </div>
   </div>
   </>
  )
}

export default Home