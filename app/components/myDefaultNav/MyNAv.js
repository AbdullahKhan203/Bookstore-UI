// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className='bg-gray-800'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='h-30 flex items-center justify-center lg:h-auto'>
//           <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8 lg:h-30'>
//             <li className='hover:text-orange-400 text-white'>Home</li>
//             <li className='hover:text-orange-400 text-white'>Categories</li>
//             <li className='hover:text-orange-400 text-white'>About</li>
//             <li className='hover:text-orange-400 text-white'>Pages</li>
//             <li className='hover:text-orange-400 text-white'>Blog</li>
//             <li className='hover:text-orange-400 text-white'>Contact</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// "use client";

// import React, { useState } from 'react';
// import MenuIcon from '../icons/MenuIcon';
// import CloseIcon from '../icons/CloseIcon';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className='bg-gray-800'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex items-center justify-between h-30 lg:h-auto'>
//           <div className='flex-shrink-0 text-white'>Logo</div>
//           <div className='lg:hidden'>
//             <button
//               onClick={toggleMenu}
//               className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
//             >
//               {!isOpen ? <MenuIcon /> : <CloseIcon />}
//             </button>
//           </div>
//           <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
//             <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8 lg:h-30'>
//               <li className='hover:text-orange-400 text-white'>Home</li>
//               <li className='hover:text-orange-400 text-white'>Categories</li>
//               <li className='hover:text-orange-400 text-white'>About</li>
//               <li className='hover:text-orange-400 text-white'>Pages</li>
//               <li className='hover:text-orange-400 text-white'>Blog</li>
//               <li className='hover:text-orange-400 text-white'>Contact</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













// "use client";

// import React, { useState } from 'react';
// import MenuIcon from '../icons/MenuIcon';
// import CloseIcon from '../icons/CloseIcon';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className='bg-gray-800'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex items-center justify-between h-30 lg:h-auto'>
          
//           <div className='lg:hidden flex-shrink-0'>
//             <button
//               onClick={toggleMenu}
//               className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
//             >
//               {!isOpen ? <MenuIcon /> : <CloseIcon />}
//             </button>
//           </div>
//           <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto `}>
//             <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8 lg:h-30'>
//               <li className='hover:text-orange-400 text-white'>Home</li>
//               <li className='hover:text-orange-400 text-white'>Categories</li>
//               <li className='hover:text-orange-400 text-white'>About</li>
//               <li className='hover:text-orange-400 text-white'>Pages</li>
//               <li className='hover:text-orange-400 text-white'>Blog</li>
//               <li className='hover:text-orange-400 text-white'>Contact</li>
//             </ul>
//           </div>
         
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









"use client";

import React, { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-30 lg:h-auto'>
          <div className='flex-shrink-0 text-white'></div>
          <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
            <ul className='flex flex-col items-center gap-6 lg:flex-row lg:gap-8 lg:h-30'>
              <li className='hover:text-orange-400 text-white'><Link href='/pages/index'>Home</Link></li>
              <li className='hover:text-orange-400 text-white'><Link href='/pages/catagories'>Catagories</Link></li>
              <li className='hover:text-orange-400 text-white'><Link href='/pages/about'>About</Link></li>
              <li className='hover:text-orange-400 text-white'>Pages</li>
              <li className='hover:text-orange-400 text-white'><Link href='/pages/blog'>Blog</Link></li>
              <li className='hover:text-orange-400 text-white'><Link href='/pages/contact'>Contact</Link></li>
            </ul>
          </div>
          <div className='lg:hidden flex-shrink-0'>
            <button
              onClick={toggleMenu}
              className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
            >
              {!isOpen ? <MenuIcon /> : <CloseIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



{/* <div className='flex-shrink-0 text-white'>Logo</div> */}









