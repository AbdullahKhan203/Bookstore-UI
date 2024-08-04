import React from 'react'
import dynamic from 'next/dynamic';
const IoIosSearch = dynamic(() => import('react-icons/io').then(mod => mod.IoIosSearch), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <IoIosSearch className='text-[30px]' />
    </div>
  )
}
