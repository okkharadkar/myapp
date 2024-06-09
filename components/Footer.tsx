import React from 'react';
import Image from 'next/image';
import f1 from "../Images/Frame (3).png";
import f2 from "../Images/Frame (4).png";
import f3 from "../Images/Frame (5).png";
const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-2">
              <Image src={f1} alt="uifry logo" className="w-5 h-5 mr-2" />
              <h2 className="text-2xl font-bold">uifry</h2>
            </div>
            <div className="flex items-center mb-2">
              <Image src={f2} alt="Email icon" className="w-5 h-5 mr-2" />
              <p>Help@Frybix.com</p>
            </div>
            <div className="flex items-center">
              <Image src={f3} alt="Phone icon" className="w-5 h-5 mr-2" />
              <p>+1 234 456 678 89</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Links</h3>
            <ul className="mt-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Booking</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Legal</h3>
            <ul className="mt-2">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Product</h3>
            <ul className="mt-2">
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 border border-gray-300 rounded-l-md"
              />
              <button className="p-2 bg-black text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

        </div>
        <div className="mt-8 text-center">
          <p>Copyright 2022 Uifry.com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;