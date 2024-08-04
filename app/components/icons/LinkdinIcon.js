import React from 'react'
import dynamic from 'next/dynamic';
const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <FaLinkedin className='text-[30px]' />
    </div>
  )
}