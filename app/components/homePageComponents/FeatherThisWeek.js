"use client"
// import React from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { NextArrow, PrevArrow } from "../arrowComponents/SlickerArrows";

// import MoonDanceBook from "../../../public/assets/bookstore/MoonDanceBook.jpeg";
// import VeryNiceBook from "../../../public/assets/bookstore/VeryNiceBook.jpeg";
// import ReceOfDragonsBook from "../../../public/assets/bookstore/ReceOfDragonsBook.jpeg";
// import DarkSpaceBook from "../../../public/assets/bookstore/DarkSpaceBook.jpeg";
// import TheGoodGuyBook from "../../../public/assets/bookstore/TheGoodGuyBook.jpeg";
// import EvanesceBook from "../../../public/assets/bookstore/EvanesceBook.jpeg";
// import QueenBeeBook from "../../../public/assets/bookstore/QueenBeeBook.jpeg";
// import SinEaterBook from "../../../public/assets/bookstore/SinEaterBook.jpeg";
// import IndependentWomanBook from "../../../public/assets/bookstore/IndependentWomanBook.jpeg";
// import RedPlanetBook from "../../../public/assets/bookstore/RedPlanetBook.jpeg";

// export default function FeatherThisWeek() {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // arrows: true,
//     // nextArrow: <NextArrow />,
//     // prevArrow: <PrevArrow />,
//     // responsive: [
//     //     {
//     //         breakpoint: 1024, // Tablet and above
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2,
//     //             infinite: true,
//     //             dots: true
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 768, // Mobile and below
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2,
//     //             infinite: true,
//     //             dots: true
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 640, // Mobile and below
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2,
//     //             infinite: true,
//     //             dots: true
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 480, // Mobile and below
//     //         settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1,
//     //             infinite: true,
//     //             dots: true
//     //         }
//     //     },
//     // ]
//   };
//   const data = [
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: MoonDanceBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: VeryNiceBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: ReceOfDragonsBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: DarkSpaceBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: TheGoodGuyBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: EvanesceBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: QueenBeeBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: SinEaterBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: IndependentWomanBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: RedPlanetBook,
//       catagory: "horror",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//   ];

//   return (
//     <div className="h-[500px] w-[90%] m-auto border-2 border-orange-500">
//       <div className="w-[70%] h-[100%]  border-2 border-green-500 p-4">
//         <div className="h-[10%]">
//           <h1 className="text-[32px]">Feather this week</h1>
//         </div>
//  <Slider {...settings}>
//           {data.map((d) => (
//            <div className="w-[800px] h-[600px]  boreer-2 border-red-500 p-4 bg-red-600" style={{display:"flex"}}>
//             <div className="image col-span-6"> 
//              <Image src={d.img} height={300} className=""/>   
//              </div>
//              <div className="content ">
//                 <div className="name text-black">name</div>
//                 <div className="author text-black">author</div>
//              </div>
//                      </div>
//             ))}
//                 </Slider>
//       </div>

//       <div className="w-[30%]"></div>
//     </div>
//   );
// }

{
  /* <div className='h-[500px] w-[90%] m-auto border-2 border-orange-500'>
<div className='w-[70%] h-[100%]  border-2 border-green-500 p-4'>
 <div className='h-[10%]'>
 <h1 className='text-[32px]'>Feather this week</h1>
 </div>
 

  <div className='slider w-[100%] h-[80%] my-auto flex justify-around border-2   bg-[#ff1616]'>
<div className='p-4 flex justify-center w-[30%] border-cyan-500 border-2 '>
<Image src={MoonDanceBook} alt="" className='h-[100%] w-full'/>
</div>
<div className="content w-[50%] h-[100%] border-yellow-500 border-2  flex flex-col justify-center gap-3 pl-6 text-white">
<div className="name">The rage of Dragons</div>
<div className="author">By Evan Winter</div>
<div className="price">50.00</div>
<div className="start-reviews flex  w-[200px]">
 <div className="start">start</div>
 <div className="reviews ml-[20px]">reviews</div>
</div>
<button className='h-[50px] w-[150px] bg-[#ff1616] border-2 rounded-[50px]'>View Details</button>

</div>
  </div>
 

</div>





 
<div className='w-[30%]'></div>
</div> */
}





// "use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "../arrowComponents/SlickerArrows";

import MoonDanceBook from "../../../public/assets/bookstore/MoonDanceBook.jpeg";
import VeryNiceBook from "../../../public/assets/bookstore/VeryNiceBook.jpeg";
import ReceOfDragonsBook from "../../../public/assets/bookstore/ReceOfDragonsBook.jpeg";
import DarkSpaceBook from "../../../public/assets/bookstore/DarkSpaceBook.jpeg";
import TheGoodGuyBook from "../../../public/assets/bookstore/TheGoodGuyBook.jpeg";
import EvanesceBook from "../../../public/assets/bookstore/EvanesceBook.jpeg";
import QueenBeeBook from "../../../public/assets/bookstore/QueenBeeBook.jpeg";
import SinEaterBook from "../../../public/assets/bookstore/SinEaterBook.jpeg";
import IndependentWomanBook from "../../../public/assets/bookstore/IndependentWomanBook.jpeg";
import RedPlanetBook from "../../../public/assets/bookstore/RedPlanetBook.jpeg";
import joker from "../../../public/assets/bookstore/joker.jpeg";

export default function FeatherThisWeek() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
       nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

   const data = [
    {
      name: `Moon Dance`,
      author: "authorX",
      img: MoonDanceBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: VeryNiceBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: ReceOfDragonsBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: DarkSpaceBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: TheGoodGuyBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: EvanesceBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: QueenBeeBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: SinEaterBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: IndependentWomanBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Moon Dance`,
      author: "authorX",
      img: RedPlanetBook,
      catagory: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
  ];

  return (
    <div className="h-auto md:h-[550px] flex md:flex-row flex-col  w-[90%] m-auto ">
      <div className="md:w-[70%] w-[100%] h-[100%]  p-4">
        <div className="h-[10%]">
          <h1 className="text-[16px] sm:text-[32px]">Feather this week</h1>
        </div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="w-[450px] h-[450px] flex gap-4  p-1 md:p-4 bg-red-600"
            >
              <div className="image flex flex-col lg:flex-row justify-around">
                <Image src={d.img} className=" h-[200px] w-[150px] lg:h-[350px] lg:w-[250px]" alt={d.name} />
                <div className="text-white flex flex-col  lg:gap-2 justify-center items-start">
                <div className="name">{d.name}</div>
                <div className="author">{d.author}</div>
                <div className="author">{d.price}</div>
                <div className="author">{d.rating}</div>
                <div className="author">{d.reviews}</div>
                <div className="author">{d.reviews}</div>
                <button className="bg-red-600 h-[60px] w-[160px] border-white border-2 rounded-[50px]">View Details</button>
                </div>
              </div>
           </div>
          ))}
        </Slider>
       
     
                
      </div>
      <div className="w-[100%] md:w-[30%]  flex border-teal-500 border-2">
        <Image src={joker} alt="joker" className="md:h-[100%] h-[50%] w-[70%] md:w-[100%] flex  m-auto md:m-0  md:block "/>
      </div>
    </div>
  );
}

















