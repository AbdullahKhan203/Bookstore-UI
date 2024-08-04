// "use client"
// import React from 'react'
// import Image from 'next/image';
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

// export default function ListedPublishItems() {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//        nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
    
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 768,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     // ],
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
//       catagory: "thriller",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: TheGoodGuyBook,
//       catagory: "thriller",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: EvanesceBook,
//       catagory: "thriller",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: QueenBeeBook,
//       catagory: "scienceFiction",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: SinEaterBook,
//       catagory: "scienceFiction",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: IndependentWomanBook,
//       catagory: "scienceFiction",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//     {
//       name: `Moon Dance`,
//       author: "authorX",
//       img: RedPlanetBook,
//       catagory: "history",
//       rating: 4,
//       price: 50,
//       reviews: 120,
//     },
//   ];
//   return (
//     <div className='w-[95%] h-[500px] m-auto p-4 border-[4px]'>
//       <div className="top flex justify-around">
//         <div className="heading text-[32px]">
//         Latest Published items
//         </div>
//         <div className="buttons ">
//           <button className='w-auto h-[40px] bg-orange-500 rounded-[50px] px-4 border-[1px] border-black mx-2'>All</button>
//           <button className='w-auto h-[40px]  rounded-[50px] px-4 border-[1px] border-black mx-2'>Thriller</button>
//           <button className='w-auto h-[40px]  rounded-[50px] text-nowrap px-4 border-[1px] border-black mx-2'>Science fiction</button>
//           <button className='w-auto h-[40px]  rounded-[50px] px-4 border-[1px] border-black mx-2'>History</button>
//         </div>
//       </div>
//       <div className="second flex overflow-x-auto">
//       {data.map((d, index) => (
//          <div className="book mx-1 ">
//            <div className="image h-[295px] w-[196px] border-[2px]">
//             <Image src={d.img} className='h-[100%] w-[100%]' />
//            </div>
//            <div className="content  h-auto w-[196px]  border-[2px]">
//             <div className="name ml-[20px]">{d.name}</div>
//             <div className="author  ml-[20px]">{d.author}</div>
//             <div className='flex items-center justify-around'>
//             <div className="rating-reviews ">
//               <div className="rating">
//                 {d.rating}
//               </div>
//               <div className="reviews">
//                 {d.reviews}
//               </div>
//             </div>
//             <div className="price">
//                {d.price}
//             </div>
//             </div>
//            </div>
//          </div>
//            ))}
          

//       </div>
    
//     </div>
//   )
// }




"use client";
import React, { useState } from "react";
import Image from "next/image";
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

export default function ListedPublishItems() {
  const [selectedCategory, setSelectedCategory] = useState("all");

 

  const data = [
    {
      name: `Moon Dance`,
      author: "authorX",
      img: MoonDanceBook,
      category: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Very Nice`,
      author: "authorY",
      img: VeryNiceBook,
      category: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Rece Of Dragons`,
      author: "authorZ",
      img: ReceOfDragonsBook,
      category: "horror",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Dark Space`,
      author: "authorA",
      img: DarkSpaceBook,
      category: "thriller",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `The Good Guy`,
      author: "authorB",
      img: TheGoodGuyBook,
      category: "thriller",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Evanesce`,
      author: "authorC",
      img: EvanesceBook,
      category: "thriller",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Queen Bee`,
      author: "authorD",
      img: QueenBeeBook,
      category: "scienceFiction",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Sin Eater`,
      author: "authorE",
      img: SinEaterBook,
      category: "scienceFiction",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Independent Woman`,
      author: "authorF",
      img: IndependentWomanBook,
      category: "scienceFiction",
      rating: 4,
      price: 50,
      reviews: 120,
    },
    {
      name: `Red Planet`,
      author: "authorG",
      img: RedPlanetBook,
      category: "history",
      rating: 4,
      price: 50,
      reviews: 120,
    },
  ];

  const filteredData =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-[95%] h-[580px] sm:h-[500px] m-auto p-4  my-2">
      <div className="top flex justify-around">
        <div className="heading text-[16px] md:text-[24px] lg:text-[32px]">Latest Published Items</div>
        <div className="buttons">
          <button
           className={`w-auto h-[40px] rounded-[50px] px-4 border-[1px] border-black mx-2 ${
            selectedCategory === "all" ? "bg-orange-500" : ""
          }`}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
          <button
            className={`w-auto h-[40px] rounded-[50px] px-4 border-[1px] border-black mx-2 ${
              selectedCategory === "thriller" ? "bg-orange-500" : ""
            }`}
            onClick={() => setSelectedCategory("thriller")}
          >
            Thriller
          </button>
          <button
             className={`w-auto h-[40px] rounded-[50px] px-4 border-[1px] border-black mx-2 ${
              selectedCategory === "horror" ? "bg-orange-500" : ""
            }`}
            onClick={() => setSelectedCategory("horror")}
          >
            Horror
          </button>
          <button
            className={`w-auto h-[40px] rounded-[50px] px-4 border-[1px] border-black mx-2 ${
              selectedCategory === "scienceFiction" ? "bg-orange-500" : ""
            }`}
            onClick={() => setSelectedCategory("scienceFiction")}
          >
            Science Fiction
          </button>
          <button
            className={`w-auto h-[40px] rounded-[50px] px-4 border-[1px] border-black mx-2 ${
              selectedCategory === "history" ? "bg-orange-500" : ""
            }`}
            onClick={() => setSelectedCategory("history")}
          >
            History
          </button>
        </div>
      </div>
      <div className="second flex overflow-x-auto">
        {filteredData.map((d, index) => (
          <div key={index} className="book mx-1">
            <div className="image h-[295px] w-[196px] border-[2px]">
              <Image src={d.img} alt="image" className="h-[100%] w-[100%]" />
            </div>
            <div className="content h-auto w-[196px] border-[2px]">
              <div className="name ml-[20px]">{d.name}</div>
              <div className="author ml-[20px]">{d.author}</div>
              <div className="flex items-center justify-around">
                <div className="rating-reviews">
                  <div className="rating">{d.rating}</div>
                  <div className="reviews">{d.reviews}</div>
                </div>
                <div className="price">{d.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






















{/* <div className="book">
<div className="image h-[295px] w-[196px] border-[2px]">
 <Image src={MoonDanceBook} className='h-[100%] w-[100%]' />
</div>
<div className="content  h-auto w-[196px]  border-[2px]">
 <div className="name ml-[20px]">name</div>
 <div className="author  ml-[20px]">author</div>
 <div className='flex items-center justify-around'>
 <div className="rating-reviews ">
   <div className="rating">
     rating
   </div>
   <div className="reviews">
     reviews
   </div>
 </div>
 <div className="price">
    price
 </div>
 </div>
</div>
</div> */}