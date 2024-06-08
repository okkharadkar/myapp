import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">uifry</h2>
            <p className="mt-2">Help@Frybix.com</p>
            <p className="mt-2">+1 234 456 678 89</p>
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
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="mt-2">Stay Upto Date</p>
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