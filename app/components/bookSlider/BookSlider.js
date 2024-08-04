"use client"

// import React from 'react'
// import Image from 'next/image'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import MoonDanceBook from '../../../public/assets/bookstore/MoonDanceBook.jpeg'
// import VeryNiceBook from '../../../public/assets/bookstore/VeryNiceBook.jpeg'
// import ReceOfDragonsBook from '../../../public/assets/bookstore/ReceOfDragonsBook.jpeg'
// import DarkSpaceBook from '../../../public/assets/bookstore/DarkSpaceBook.jpeg'
// import TheGoodGuyBook from '../../../public/assets/bookstore/TheGoodGuyBook.jpeg'
// import EvanesceBook from '../../../public/assets/bookstore/EvanesceBook.jpeg'
// import QueenBeeBook from '../../../public/assets/bookstore/QueenBeeBook.jpeg'
// import SinEaterBook from '../../../public/assets/bookstore/SinEaterBook.jpeg'
// import IndependentWomanBook from '../../../public/assets/bookstore/IndependentWomanBook.jpeg'
// import RedPlanetBook from '../../../public/assets/bookstore/RedPlanetBook.jpeg'
// export default function BookSlider() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       };
//     const data=[
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:MoonDanceBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:VeryNiceBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:ReceOfDragonsBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:DarkSpaceBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:TheGoodGuyBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:EvanesceBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:QueenBeeBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:SinEaterBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:IndependentWomanBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
//         {
//         name:`Moon Dance`,
//         author:"authorX",
//         img:RedPlanetBook,
//         catagory:"horror",
//         rating:4,
//         price:50,
//         reviews:120,
//     },
       
// ]



//   return (
//     <div className='w-[80%] m-auto'>
//    <div className='mt-2'>
//    <Slider {...settings}>
//       {data.map((d)=>(
//         <div className='w-[300px] h-[500px] border-4 border-red-600 flex flex-col'>
//     <div className='h-[65%] border-blue-600'>
//         <Image src={d.img} className='w-full h-[100%]'  />
//         </div>
//         <div className='flex flex-col justify-center gap-2 pl-4 border-green-500 border-2 h-[35%]'>
//     <div className="name text-[32px]">{d.name}</div>
//     <div className="author text-[20px]">{d.author}</div>
//     <div className='flex'>
//         <div>
//         <div className="star">{d.rating}</div>
//         <div className="reviews">{d.reviews}</div>
//         </div>
//         <div className='price ml-4  text-[32px]'>{d.price}</div>
//     </div>
//     </div>

// </div>
// ))}
// </Slider>
//    </div>
//     </div>

//   )
// }


{/* <div className='w-[300px] h-[500px] border-4 border-red-600 flex flex-col'>
    <div className='h-[65%] border-blue-600'>
        <Image src={MoonDanceBook} className='w-full h-[100%]'  />
        </div>
        <div className='flex flex-col justify-center gap-4 pl-4 border-green-500 border-2 h-[35%]'>
    <div className="name text-[32px]">name</div>
    <div className="author text-[20px]">author</div>
    <div className='flex'>
        <div>
        <div className="star">4 star</div>
        <div className="reviews">120 K</div>
        </div>
        <div className='price ml-4  text-[32px]'>50$</div>
    </div>
    </div>

</div> */}



import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../arrowComponents/SlickerArrows'


import MoonDanceBook from '../../../public/assets/bookstore/MoonDanceBook.jpeg';
import VeryNiceBook from '../../../public/assets/bookstore/VeryNiceBook.jpeg';
import ReceOfDragonsBook from '../../../public/assets/bookstore/ReceOfDragonsBook.jpeg';
import DarkSpaceBook from '../../../public/assets/bookstore/DarkSpaceBook.jpeg';
import TheGoodGuyBook from '../../../public/assets/bookstore/TheGoodGuyBook.jpeg';
import EvanesceBook from '../../../public/assets/bookstore/EvanesceBook.jpeg';
import QueenBeeBook from '../../../public/assets/bookstore/QueenBeeBook.jpeg';
import SinEaterBook from '../../../public/assets/bookstore/SinEaterBook.jpeg';
import IndependentWomanBook from '../../../public/assets/bookstore/IndependentWomanBook.jpeg';
import RedPlanetBook from '../../../public/assets/bookstore/RedPlanetBook.jpeg';

export default function BookSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablet and above
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Mobile and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 640, // Mobile and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, // Mobile and below
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    };

    const data = [
        {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:MoonDanceBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:VeryNiceBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:ReceOfDragonsBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:DarkSpaceBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:TheGoodGuyBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:EvanesceBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:QueenBeeBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:SinEaterBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:IndependentWomanBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                    {
                    name:`Moon Dance`,
                    author:"authorX",
                    img:RedPlanetBook,
                    catagory:"horror",
                    rating:4,
                    price:50,
                    reviews:120,
                },
                      
    ];

    return (
        <div className='w-[80%] m-auto my-5'>
            <div className='slider-container mt-5 '>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div  className={`w-[300px] h-[500px] border-4  flex flex-col`}>
                            <div className='h-[65%] border-blue-600'>
                                <Image
                                    src={d.img}
                                    alt={d.name}
                                    width={300}
                                    height={400}
                                    className='w-full h-[100%]'
                                />
                            </div>
                            <div className='flex flex-col justify-center gap-2 pl-4   h-[35%]'>
                                <div className="name text-[32px]">{d.name}</div>
                                <div className="author text-[20px]">{d.author}</div>
                                <div className='flex'>
                                    <div>
                                        <div className="star">{d.rating}</div>
                                        <div className="reviews">{d.reviews}</div>
                                    </div>
                                    <div className='price ml-4 text-[32px]'>${d.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
