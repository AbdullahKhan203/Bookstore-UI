import React from "react";
import bookLogo from "@/public/assets/images/bookLogoThird.png";
import FacebookIcon from '../icons/FacebookIcon'
import LinkdinIcon from '../icons/LinkdinIcon'
import InstaIcon from '../icons/InstaIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="fristFooter grid grid-cols-1  sm:grid-cols-2   md:grid-cols-4 gap-4 mx-auto p-6 bg-yellow-300">
        <div className="social">
          <div className="logo flex items-center ">
            <Image src={bookLogo} height={35} width={35} />
            <span className="font-bold">ABC</span>
            <span className="font-thin">Book</span>
          </div>
          <p>
            Get the breathing space now, and we’ll extend your term at the other
            end year for go.
          </p>
          <div className="icons flex gap-x-6">
          <FacebookIcon/>
          <LinkdinIcon/>
          <InstaIcon/>
          <YoutubeIcon/>
            
          </div>
        </div>
        <div className="catagory">
            <h2 className="font-bold">Book Category</h2>
            <p>History</p>
            <p>Love Stories</p>
            <p>Science Finction</p>
            <p>Business</p>
        </div>
        <div className="types">
        <p>biography</p>
            <p>Astrology</p>
            <p>Digital Marketing</p>
            <p>Software Development</p>
            <p>Ecommerce</p>
        </div>
        <div className="Pages">
        <h2 className="font-bold">Site Maps</h2>
            <p>Home</p>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
      </div>
      <div className="secondFooter text-center bg-yellow-300">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
    </div>
  );
}









