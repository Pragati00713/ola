import React from 'react'

const Design = () => {
  return (
    <>
    <div className='flex h-auto w-full bg-slate-200 justify-center items-start p-10  flex-col'>
     
    <h1 className='text-blue-900 font-bold text-5xl'> Design</h1>
     
    <div className='flex h-auto flex-wrap w-full justify-center gap-3 items-center'>

    <div className='h-[600px] w-[450px]  text-white font-bold justify-center  items-center flex flex-col flex-wrap  '>
     <div  className='flex  '>
          <img src="https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/s1_tab_design_tab_img_1.webp" alt="" className='h-[400px]' />
          
     </div>
     <div className='flex flex-col text-gray-700 '>
          <h1 className='text-3xl'>Iconic headlamp</h1>
          <h1 className='text-slate-400'>Like the moon. But better</h1>
     </div>
     </div>

     <div className='h-[600px] w-[450px]  text-white font-bold justify-center  items-center flex flex-col flex-wrap  '>
     <div  className='flex  '>
          <img src="https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/s1_tab_design_tab_img_3.webp" alt="" className='h-[400px]' />
          
     </div>
     <div className='flex flex-col text-gray-700 '>
          <h1 className='text-3xl'>12 stunning colours</h1>
          <h1 className='text-slate-400'>Love attention? Great. Our colours tend to make heads turn.</h1>
     </div>
     </div>
     <div className='h-[600px] w-[450px]  text-white font-bold justify-center  items-center flex flex-col flex-wrap  '>
     <div  className='flex  '>
          <img src="https://cdn.olaelectric.com/ev-discovery-platform/New-Homepage/s1_tab_design_tab_img_2.webp" alt="" className='h-[400px]' />
          
     </div>
     <div className='flex flex-col text-gray-700 '>
          <h1 className='text-3xl'>36L bootspace</h1>
          <h1 className='text-slate-400'>rom groceries to gym clothes. Fit your world. Under your seat.</h1>
     </div>
     </div>
     </div>
     
     
     </div> 
    
    
    </>
  )
}

export default Design