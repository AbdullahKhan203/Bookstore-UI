import Image from 'next/image'
import React from 'react'
import bookLogo from '@/public/assets/images/bookLogoThird.png'
import SearchIcon from '../../components/icons/SearchIcon';
import CartIcon from '../../components/icons/CartIcon';



export default function FirstNav() {
  return (
    // <header>
   <nav  className="bg-transparent">
    <div className='w-[100%]  flex justify-between h-auto lg:h-[40px] lg:flex-row flex-col p-1 lg:p-0'>
      <div className='first w-[100%] md:w-[20%]  border-2 flex items-center order-2 lg:order-1 '>
        <Image src={bookLogo} height={35} width={35} alt='booklogo'/>
        <span className='font-bold'>ABC</span>
        <span className='font-thin'>Book</span>
      </div>
      <div className='flex md:flex-row flex-col items-center  md:w-[100%] lg:w-[80%] border-2 md:justify-around order-1 lg:order-2'>
      <div className='second  m-auto md:w-[50%] '>
        <div className='searchbar border-2 rounded-[50px] flex justify-end w-[300px] md:w-[350px]  lg:w-[400px] h-[35px]'>
          <input type='text'  placeholder='search book by author or publisher' className=' w-[250px] md:w-[300px] lg:w-[350px] outline:none focus:outline-none ' />
          <SearchIcon/>
        </div>
      </div>
      <div className='third w-[100%] md:w-[50%] flex items-center justify-between'>
        <p>FAQ</p>
        <p>Tract order</p>
        <CartIcon/>
        <button className='h-[35px] bg-orange-400 rounded-[50px] w-[70px]'>Login</button>
      </div>
      </div>
    </div>
   </nav>
  //  </header>

      )
}







// import Image from 'next/image';
// import React from 'react';
// import bookLogo from '@/public/assets/images/bookLogoThird.png';
// import SearchIcon from '../../components/icons/SearchIcon';
// import CartIcon from '../../components/icons/CartIcon';

// export default function FirstNav() {
//   return (
//     <header>
//       <nav className="bg-transparent p-1">
//         <div className='w-full flex justify-between h-40 lg:flex-row flex-col'>
//           <div className='flex w-full md:w-1/5 items-center order-2 lg:order-1'>
//             <Image src={bookLogo} height={35} width={35} />
//             <span className='font-bold'>ABC</span>
//             <span className='font-thin'>Book</span>
//           </div>
//           <div className='flex md:flex-row flex-col items-center w-full lg:w-4/5 md:justify-around order-1 lg:order-2'>
//             <div className='m-auto md:w-1/2'>
//               <div className='searchbar border-2 rounded-full flex justify-end w-72 md:w-80 lg:w-96 h-9'>
//                 <input
//                   type='text'
//                   placeholder='search book by author or publisher'
//                   className='w-64 md:w-72 lg:w-80 outline-none'
//                 />
//                 <SearchIcon />
//               </div>
//             </div>
//             <div className='flex items-center justify-between w-full md:w-1/2'>
//               <p>FAQ</p>
//               <p>Track Order</p>
//               <CartIcon />
//               <button className='h-9 bg-orange-400 rounded-full w-16'>Login</button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
