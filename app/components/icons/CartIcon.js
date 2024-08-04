import React from 'react'
import dynamic from 'next/dynamic';
const IoCartOutline = dynamic(() => import('react-icons/io5').then(mod => mod.IoCartOutline), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <IoCartOutline className='text-[30px]' />
    </div>
  )
}
