import React from 'react'
import dynamic from 'next/dynamic';
const CiMobile4 = dynamic(() => import('react-icons/ci').then(mod => mod.CiMobile4), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <CiMobile4 className='text-[30px]' />
    </div>
  )
}