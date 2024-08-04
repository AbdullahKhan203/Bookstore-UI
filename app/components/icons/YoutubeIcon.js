import React from 'react'
import dynamic from 'next/dynamic';
const AiOutlineYoutube = dynamic(() => import('react-icons/ai').then(mod => mod.AiOutlineYoutube), { ssr: false });
// import { AiOutlineYoutube } from "react-icons/ai";

export default function SearchIcon() {
  return (
    <div>
      <AiOutlineYoutube className='text-[30px]' />
    </div>
  )
}
