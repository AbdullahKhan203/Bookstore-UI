import React from 'react'
import dynamic from 'next/dynamic';
const IoMdMenu = dynamic(() => import('react-icons/io').then(mod => mod.IoMdMenu), { ssr: false });

export default function SearchIcon() {
   
  return (
    <div>
      <IoMdMenu className='text-[30px] text-gray-600 '  />
    </div>
  )
}
