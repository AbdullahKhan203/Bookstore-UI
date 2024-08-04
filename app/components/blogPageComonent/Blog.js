import Image from "next/image";
import React from "react";
import firstCardImg from "../../../public/assets/blog-assets/firstCardImg.jpeg";
import secondCardImg from "../../../public/assets/blog-assets/secondCardImg.jpeg";
import thirdCardImg from "../../../public/assets/blog-assets/thirdCardImg.jpeg";
import forthCardImg from "../../../public/assets/blog-assets/forthCardImg.jpeg";
import fifthCardImg from "../../../public/assets/blog-assets/fifthCardImg.jpeg";
import Identification from "../../components/icons/Identification";
import postImage1 from "../../../public/assets/blog-assets/postImage1.jpeg";
import postImage2 from "../../../public/assets/blog-assets/postImage2.jpeg";
import postImage3 from "../../../public/assets/blog-assets/postImage3.jpeg";
import postImage4 from "../../../public/assets/blog-assets/postImage4.jpeg";
// import postImage1 from '../../../public/assets/blog-assets/postImage1.jpeg'
import Comments from "../icons/Comments";

export default function Content() {
  return (
    <div class="w-[85%] h-auto m-auto  flex flex-col lg:flex-row ">
      <div className="left w-[100%] lg:w-[70%]  ">
        <div className="first-card w-[100%] h-auto shadow-md relative my-8">
          <div className="img w-[100%] h-[350px] sm:h-[428px] ">
            <Image
              src={firstCardImg}
              alt="first-img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="data-card w-[89px] h-[91px] bg-orange-500 text-white flex flex-col justify-center items-center  absolute top-[270px] sm:top-[360px] left-8 rounded-[10px]">
            <div className="date text-[22px]">15</div>
            <div className="month text-[12px]">jan</div>
          </div>
          <div className="content h-auto md:h-[156px] w-[100%] p-1 sm:p-4 my-2">
            <div className="heading text-[22px] font-bold">
              Google inks pact for new 35-storey office
            </div>
            <div className="para">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </div>
            <div className="catagory-comment flex my-2 sm:my-4">
              <div className="flex items-center mx-1 sm:mx-2">
                <Identification />
                <p>Travel,Lifestyle</p>
              </div>
              {" "}
              <div className="flex items-center mx-1 sm:mx-2">
                <Comments />
                <p className="sm:ml-2">Travel,Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="first-card w-[100%] h-auto shadow-md relative my-8">
          <div className="img w-[100%] h-[350px] sm:h-[428px] ">
            <Image
              src={secondCardImg}
              alt="first-img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="data-card w-[89px] h-[91px] bg-orange-500 text-white flex flex-col justify-center items-center  absolute top-[270px] sm:top-[360px] left-8 rounded-[10px]">
            <div className="date text-[22px]">15</div>
            <div className="month text-[12px]">jan</div>
          </div>
          <div className="content h-auto md:h-[156px] w-[100%]  p-1 sm:p-4 my-2">
            <div className="heading text-[22px] font-bold">
              Google inks pact for new 35-storey office
            </div>
            <div className="para">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </div>
            <div className="catagory-comment flex my-2 sm:my-4">
            <div className="flex items-center mx-1 sm:mx-2">
                <Identification />
                <p>Travel,Lifestyle</p>
              </div>{" "}
              <div className="flex items-center mx-1 sm:mx-2">
                <Comments />
                <p className="sm:ml-2">Travel,Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="first-card w-[100%] h-auto shadow-md relative my-8">
          <div className="img w-[100%] h-[350px] sm:h-[428px] ">
            <Image
              src={thirdCardImg}
              alt="first-img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="data-card w-[89px] h-[91px] bg-orange-500 text-white flex flex-col justify-center items-center  absolute top-[270px] sm:top-[360px] left-8 rounded-[10px]">
            <div className="date text-[22px]">15</div>
            <div className="month text-[12px]">jan</div>
          </div>
          <div className="content h-auto md:h-[156px] w-[100%]  p-1 sm:p-4 my-2">
            <div className="heading text-[22px] font-bold">
              Google inks pact for new 35-storey office
            </div>
            <div className="para">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </div>
            <div className="catagory-comment flex my-2 sm:my-4">
            <div className="flex items-center mx-1 sm:mx-2">
                <Identification />
                <p>Travel,Lifestyle</p>
              </div>{" "}
              <div className="flex items-center mx-1 sm:mx-2">
                <Comments />
                <p className="sm:ml-2">Travel,Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="first-card w-[100%] h-auto shadow-md relative my-8">
          <div className="img w-[100%] h-[350px] sm:h-[428px] ">
            <Image
              src={forthCardImg}
              alt="first-img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="data-card w-[89px] h-[91px] bg-orange-500 text-white flex flex-col justify-center items-center  absolute top-[270px] sm:top-[360px] left-8 rounded-[10px]">
            <div className="date text-[22px]">15</div>
            <div className="month text-[12px]">jan</div>
          </div>
          <div className="content h-auto md:h-[156px] w-[100%]  p-1 sm:p-4 my-2">
            <div className="heading text-[22px] font-bold">
              Google inks pact for new 35-storey office
            </div>
            <div className="para">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </div>
            <div className="catagory-comment flex my-2 sm:my-4">
              <div className="flex items-center mx-1 sm:mx-2">
                <Identification />
                <p>Travel,Lifestyle</p>
              </div>{" "}
              <div className="flex items-center mx-1 sm:mx-2">
                <Comments />
                <p className="sm:ml-2">Travel,Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="first-card w-[100%] h-auto shadow-md relative my-8">
          <div className="img w-[100%] h-[350px] sm:h-[428px] ">
            <Image
              src={fifthCardImg}
              alt="first-img"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="data-card w-[89px] h-[91px] bg-orange-500 text-white flex flex-col justify-center items-center absolute top-[270px] sm:top-[360px] left-8 rounded-[10px]">
            <div className="date text-[22px]">15</div>
            <div className="month text-[12px]">jan</div>
          </div>
          <div className="content h-auto md:h-[156px] w-[100%]  p-1 sm:p-4 my-2">
            <div className="heading text-[22px] font-bold">
              Google inks pact for new 35-storey office
            </div>
            <div className="para">
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </div>
            <div className="catagory-comment flex my-2 sm:my-4">
            <div className="flex items-center mx-1 sm:mx-2">
                <Identification />
                <p>Travel,Lifestyle</p>
              </div>{" "}
              <div className="flex items-center mx-1 sm:mx-2">
                <Comments />
                <p className="sm:ml-2">Travel,Lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[100%] lg:w-[30%]    my-8">
        <div className="searchbar h-[110px] bg-[#fbf9ff] flex items-center justify-center">
          <input
            type="text"
            name=""
            id=""
            className="h-[40px] w-[180px] xl:w-[200px] px-2"
            placeholder="search keyword"
          />
          <button className="h-[40px] w-[70px]  xl:w-[90px] bg-[#ff1616]">Search</button>
        </div>
        <div className="catagory bg-[#fbf9ff] my-6">
          <div className="heading h-[40px] flex items-center ml-8">
            Catagory
          </div>
          <hr className="w-[80%] mx-auto" />
          <div className="px-8">
            <ul className="flex flex-col gap-4 my-4 font-extralight ">
              <li className="border-b">Resturant Food</li>
              <li className="border-b">Travel News</li>
              <li className="border-b">Modern Technology</li>
              <li className="border-b">Product</li>
              <li className="border-b">Inspiration</li>
              <li className="">Health Care</li>
            </ul>
          </div>
        </div>
        <div className="recent-post bg-[#fbf9ff] my-6">
          <div className="heading h-[40px] flex items-center ml-8">
            Recent Posts
          </div>
          <hr className="w-[80%] mx-auto" />
          <div className="px-8">
            <ul className="flex flex-col gap-4 my-4 font-extralight ">
              <li className="">
                <div className="h-[47px] flex">
                  {" "}
                  <div className="img">
                    <Image src={postImage1} className="h-[47px] w-[48px]" />
                  </div>{" "}
                  <div className="content flex flex-col ml-4">
                    <div className="heading">From List Fish</div>
                    <div className="date">date</div>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="h-[47px] flex">
                  {" "}
                  <div className="img">
                    <Image src={postImage1} className="h-[47px] w-[48px]" />
                  </div>{" "}
                  <div className="content flex flex-col ml-4">
                    <div className="heading">From List Fish</div>
                    <div className="date">date</div>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="h-[47px] flex">
                  {" "}
                  <div className="img">
                    <Image src={postImage1} className="h-[47px] w-[48px]" />
                  </div>{" "}
                  <div className="content flex flex-col ml-4">
                    <div className="heading">From List Fish</div>
                    <div className="date">date</div>
                  </div>
                </div>
              </li>
              <li className="">
                <div className="h-[47px] flex">
                  {" "}
                  <div className="img">
                    <Image src={postImage1} className="h-[47px] w-[48px]" />
                  </div>{" "}
                  <div className="content flex flex-col ml-4">
                    <div className="heading">From List Fish</div>
                    <div className="date">date</div>
                  </div>
                </div>
              </li>
             
            </ul>
          </div>
        </div>



        <div className="recent-post bg-[#fbf9ff] my-6">
          <div className="heading h-[40px] flex items-center ml-8">
            Tag Cloud
          </div>
          <hr className="w-[80%] mx-auto" />
          <div className="px-8 flex flex-wrap">
           <button className="w-auto h-[25px] bg-white m-1 px-1">project</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">love</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">technology</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">travel</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">resturant</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">life style</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">design</button>
           <button className="w-auto h-[25px] bg-white m-1  px-1">illustration</button>
          </div>

        </div>

        <div className="instagram-feed bg-[#fbf9ff] my-6">
          <div className="heading h-[40px] flex items-center ml-8">
            Tag Cloud
          </div>
          <hr className="w-[80%] mx-auto" />
          <div className="px-8 flex flex-wrap my-6">
           <Image src={firstCardImg} className="h-[70px] w-[70px] m-1"/>
           <Image src={secondCardImg} className="h-[70px] w-[70px] m-1"/>
           <Image src={thirdCardImg} className="h-[70px] w-[70px] m-1"/>
           <Image src={forthCardImg} className="h-[70px] w-[70px] m-1"/>
           <Image src={fifthCardImg} className="h-[70px] w-[70px] m-1"/>
           <Image src={fifthCardImg} className="h-[70px] w-[70px] m-1"/>
          </div>
        </div>

        <div className="news-letter bg-[#fbf9ff] my-6">
          <div className="heading h-[40px] flex items-center ml-8">
            Newsletter
          </div>
          <hr className="w-[80%] mx-auto" />
          <div className="px-1 h-auto  flex flex-col mt-6  mb-8">
            <div className="input h-[35px] w-[250px]  bg-transparent flex  justify-center items-center  bg-white m-auto my-1">
          <input type="search" name="" id="" className="h-[30px] w-[220px] px-1 outline-none" placeholder="enter email" />
          </div>
          <button className="h-[40px]  w-[250px] bg-white hover:bg-[#ff1616]  m-auto border my-1  mb-6">Subcribe</button>
          </div>
        </div>

      </div>
    </div>
  );
}
