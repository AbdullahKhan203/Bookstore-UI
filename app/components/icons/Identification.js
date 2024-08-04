import React from 'react'
import dynamic from 'next/dynamic';
const MdOutlinePermIdentity = dynamic(() => import('react-icons/md').then(mod => mod.MdOutlinePermIdentity), { ssr: false });

export default function SearchIcon() {
  return (
    <div>
      <MdOutlinePermIdentity className='text-[24px]' />
    </div>
  )
}