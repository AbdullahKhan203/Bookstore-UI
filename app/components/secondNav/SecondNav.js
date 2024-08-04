"use client";
import React, { useState, useRef } from "react";
import MenuIcon from "@/app/components/icons/MenuIcon";
import CloseIcon from "@/app/components/icons/CloseIcon";
import Link from "next/link";

export default function SecondNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navDialogRef = useRef(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navDialogRef.current) {
      navDialogRef.current.classList.toggle('hidden');
    }
  };

  return (
    <nav className="p-2 flex bg-yellow-400 justify-between items-center ">
      <Link href="" id="brand" className="flex  items-center">
        Nothing
      </Link>
      <div id="nav-menu" className="hidden md:flex gap-12">
        <Link href="/pages/index" className="font-medium hover:text-[#ee0181]">Home</Link>
        <Link href="/pages/catagories" className="font-medium hover:text-[#ee0181]">Catagories</Link>
        <Link href="/pages/about" className="font-medium hover:text-[#ee0181]">About</Link>
        <Link href="/pages/pages" className="font-medium hover:text-[#ee0181]">Pages</Link>
        <Link href="/pages/blog" className="font-medium hover:text-[#ee0181]">Blog</Link>
        <Link href="/pages/contact" className="font-medium hover:text-[#ee0181]">Content</Link>
      </div>
      <div className="hidden md:block"> </div>
      <button className="p-2 md:hidden" onClick={handleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div ref={navDialogRef} id="nav-dialog" className={`fixed h-[300px] bg-red-500 inset-0 p-3 ${isMenuOpen ? '' : 'hidden'} z-10 md:hidden`}>
        <div id="nav-bar" className="flex justify-between">
          <Link href="/" id="brand" className="flex gap-2 items-center">
            {/* Nothing<span>to do</span> */}
          </Link>
          <button className="p-2 md:hidden" onClick={handleMenu}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col">
          <Link href="/" className="font-medium hover:bg-[#ee0181] py-2">Home</Link>
          <Link href="/pages/catagories" className="font-medium hover:bg-[#ee0181] py-2">Catagories</Link>
          <Link href="/pages/about" className="font-medium hover:bg-[#ee0181] py-2">About</Link>
          {/* <Link href="/pages" className="font-medium hover:bg-[#ee0181] py-2">Pages</Link> */}
          <Link href="/pages/blog" className="font-medium hover:bg-[#ee0181] py-2">Blog</Link>
          <Link href="/pages/contact" className="font-medium hover:bg-[#ee0181] py-2">Content</Link>
        </div>
      </div>
    </nav>
  );
}
