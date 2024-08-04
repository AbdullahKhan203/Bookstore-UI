// "use client";
// // components/Carousel.js
// import { useState } from 'react';
// import Image from 'next/image';
// import FirstCourselImg from '../../../public/assets/bookstore/asset16.jpeg';
// import SecondCourselImg from '../../../public/assets/bookstore/asset17.jpeg';

// const Carousel = () => {
//   const [index, setIndex] = useState(0);
//   const images = [
//     FirstCourselImg,
//     SecondCourselImg,
//   ];

//   const showSlide = (i) => {
//     setIndex(i < 0 ? images.length - 1 : i % images.length);
//   };

//   return (
//     <div className="relative overflow-hidden w-full h-[500px] mx-auto py-8">
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(${-index * 100}%)`,
//           width: `${images.length * 100}%`,
//         }}
//       >
//         {images.map((src, idx) => (
//           <div key={idx} className="w-full flex-shrink-0 h-[500px] relative">
//             <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" />
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
//               <button className="bg-blue-500 text-white px-4 py-2 mb-4">Click Me</button>
//               <h2 className="text-2xl font-bold">The History of Phipino</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => showSlide(index - 1)}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
//       >
//         Prev
//       </button>
//       <button
//         onClick={() => showSlide(index + 1)}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;





















"use client";
// components/Carousel.js
import { useState } from 'react';
import Image from 'next/image';
import FirstCourselImg from '../../../public/assets/bookstore/asset16.jpeg';
import SecondCourselImg from '../../../public/assets/bookstore/asset17.jpeg';
import ThirdCourselImg from '../../../public/assets/bookstore/asset 15.jpeg';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    FirstCourselImg,
    SecondCourselImg,
    ThirdCourselImg
  ];

  const showSlide = (i) => {
    setIndex(i < 0 ? images.length - 1 : i % images.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-[500px] mx-auto py-1">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(${-index * 100}%)`,
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="w-full flex-shrink-0 h-[500px] relative">
            <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <button className="bg-orange-500 text-white px-4 py-2 mb-4 rounded-[50px]">Browse Store</button>
              <h2 className="text-2xl font-bold">The History of Phipino</h2>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => showSlide(index - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={() => showSlide(index + 1)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
