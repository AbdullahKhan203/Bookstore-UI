import React from 'react'
import dynamic from 'next/dynamic';
const IoClose = dynamic(() => import('react-icons/io5').then(mod => mod.IoClose), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <IoClose className='text-[30px]' />
    </div>
  )
}
