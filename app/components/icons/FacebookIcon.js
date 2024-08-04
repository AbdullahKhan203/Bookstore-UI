import React from 'react'
import dynamic from 'next/dynamic';
const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <FaFacebook className='text-[30px]' />
    </div>
  )
}