import React from 'react'
import dynamic from 'next/dynamic';
const MdHouse = dynamic(() => import('react-icons/md').then(mod => mod.MdHouse), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <MdHouse className='text-[30px]' />
    </div>
  )
}