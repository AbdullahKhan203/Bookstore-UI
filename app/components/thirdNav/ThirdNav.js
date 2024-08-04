// "use client";
// import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';
// import MenuIcon from "@/app/components/icons/MenuIcon";
// import CloseIcon from "@/app/components/icons/CloseIcon";

// export default function ThirdNav() {
//   const toggleBtnRef = useRef(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const toggleBtn = toggleBtnRef.current;
//     const dropdown = dropdownRef.current;

//     const handleClick = () => {
//       if (dropdown) {
//         dropdown.classList.toggle("top-16");
//         dropdown.classList.toggle("-top-full");
//       }
//     };

//     if (toggleBtn) {
//       toggleBtn.addEventListener("click", handleClick);
//     }

//     // Cleanup event listener on unmount
//     return () => {
//       if (toggleBtn) {
//         toggleBtn.removeEventListener("click", handleClick);
//       }
//     };
//   }, []);

//   return (
//     <div className='bg-yellow-300 border-4'>
//       <nav className='flex items-center justify-between px-12 h-14 lg:gap-8'>
//         <Link href='#' className='text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap'>
//           Tailwind
//         </Link>

//         <div ref={dropdownRef} className='dropdown-menu absolute -top-full left-0 max-lg:bg-yellow-300 w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between z-10'>
//           <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
//             <li className='hover:text-orange-400'>Home</li>
//             <li className='hover:text-orange-400'>Categories</li>
//             <li className='hover:text-orange-400'>About</li>
//             <li className='hover:text-orange-400'>Pages</li>
//             <li className='hover:text-orange-400'>Blog</li>
//             <li className='hover:text-orange-400'>Contact</li>
//           </ul>
//           <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
//             <button className='hover:text-orange-400'>Login</button>
//             <button className='bg-orange-400 rounded-lg px-2 py-1'>Signup</button>
//           </div>
//         </div>

//         <div ref={toggleBtnRef} className='toggle-button lg:hidden z-20'>
//           <MenuIcon />
//         </div>
//       </nav>
//     </div>
//   );
// }
























"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import MenuIcon from "@/app/components/icons/MenuIcon";
import CloseIcon from "@/app/components/icons/CloseIcon";

export default function ThirdNav() {
  const toggleBtnRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const toggleBtn = toggleBtnRef.current;

    const handleClick = () => {
      setDropdownVisible((prev) => !prev);
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", handleClick);
    }

    // Cleanup event listener on unmount
    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className='bg-yellow-300 border-4'>
      <nav className='flex items-center justify-between px-12 h-14 lg:gap-8 relative'>
        <Link href='#' className='text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap'>
          Tailwind
        </Link>

        <div
          ref={dropdownRef}
          className={`dropdown-menu ${isDropdownVisible ? 'block' : 'hidden'} lg:flex lg:items-center lg:gap-8 lg:static lg:h-auto absolute top-full left-0 w-full bg-yellow-300 flex flex-col items-center py-2 text-lg font-bold z-10`}
        >
          <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
            <li className='hover:text-orange-400'>Home</li>
            <li className='hover:text-orange-400'>Categories</li>
            <li className='hover:text-orange-400'>About</li>
            <li className='hover:text-orange-400'>Pages</li>
            <li className='hover:text-orange-400'>Blog</li>
            <li className='hover:text-orange-400'>Contact</li>
          </ul>
           </div>

        <div ref={toggleBtnRef} className='toggle-button lg:hidden z-20'>
          {isDropdownVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
    </div>
  );
}








// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';
// import MenuIcon from "@/app/components/icons/MenuIcon";
// import CloseIcon from "@/app/components/icons/CloseIcon";

// export default function ThirdNav() {
//   const toggleBtnRef = useRef(null);
//   const dropdownRef = useRef(null);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);

//   useEffect(() => {
//     const toggleBtn = toggleBtnRef.current;

//     const handleClick = () => {
//       setDropdownVisible((prev) => !prev);
//     };

//     if (toggleBtn) {
//       toggleBtn.addEventListener("click", handleClick);
//     }

//     // Cleanup event listener on unmount
//     return () => {
//       if (toggleBtn) {
//         toggleBtn.removeEventListener("click", handleClick);
//       }
//     };
//   }, []);

//   return (
//     <div className='bg-yellow-300 border-4'>
//       <nav className='flex items-center justify-between px-12 h-14 lg:gap-8 relative'>
//         <Link href='#' className='text-2xl font-bold border-2 px-2 py-1 whitespace-nowrap'>
//           Tailwind
//         </Link>

//         <div
//           ref={dropdownRef}
//           className={`dropdown-menu transition-all duration-300 ease-in-out ${isDropdownVisible ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} lg:flex lg:items-center lg:gap-8 lg:static lg:h-auto absolute left-0 w-full bg-yellow-300 flex flex-col items-center py-2 text-lg font-bold z-10 overflow-hidden`}
//           style={{ top: '56px' }}
//         >
//           <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
//             <li className='hover:text-orange-400'>Home</li>
//             <li className='hover:text-orange-400'>Categories</li>
//             <li className='hover:text-orange-400'>About</li>
//             <li className='hover:text-orange-400'>Pages</li>
//             <li className='hover:text-orange-400'>Blog</li>
//             <li className='hover:text-orange-400'>Contact</li>
//           </ul>
//           <div className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8'>
//             <button className='hover:text-orange-400'>Login</button>
//             <button className='bg-orange-400 rounded-lg px-2 py-1'>Signup</button>
//           </div>
//         </div>

//         <div ref={toggleBtnRef} className='toggle-button lg:hidden z-20'>
//           {isDropdownVisible ? <CloseIcon /> : <MenuIcon />}
//         </div>
//       </nav>
//     </div>
//   );
// }
