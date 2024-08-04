import Map from '@/app/components/contactPageComponent/Map'
import GetInTouch from '@/app/components/contactPageComponent/GetInTouch'
import React from 'react'

export default function page() {
  return (
    <div className='w-[100%] h-auto'>
    <div className="h-[300px] md:h-[350px] w-[95%]  bg-[url('/about-hero.jpg')] bg-custom-size  m-auto bg-[100%] flex justify-center items-center">
       <h1 className='md:text-[32px] text-[25px] text-white'>Contact</h1>
    </div>
    <Map/>
    <GetInTouch/>
    




    </div>
  )
}
