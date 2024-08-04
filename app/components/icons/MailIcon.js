import React from 'react'
import dynamic from 'next/dynamic';
const MdOutlineMailOutline = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlineMailOutline), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <MdOutlineMailOutline className='text-[30px]' />
    </div>
  )
}