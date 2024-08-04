import React from 'react'
import dynamic from 'next/dynamic';
const FaRegComments = dynamic(() => import('react-icons/fa').then(mod => mod.FaRegComments), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <FaRegComments className='text-[24px]' />
    </div>
  )
}
