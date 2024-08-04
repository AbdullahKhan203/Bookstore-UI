import React from 'react'
import dynamic from 'next/dynamic';
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <FaInstagram className='text-[30px]' />
    </div>
  )
}