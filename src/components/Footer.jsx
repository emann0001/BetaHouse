import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#035A33] text-white pt-10">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-white text-[#00472E] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-2 text-lg">
              BH
            </div>
            <span className="text-xl font-bold">BetaHouse</span>
          </div>
          <p className="text-sm mb-4">
            Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!
          </p>
          <div className="flex items-center text-sm mb-2">
            <FaMapMarkerAlt className="mr-2 text-lg" />
            <span>95 Tinubu Estate, Lekki, Lagos</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaPhoneAlt className="mr-2 text-lg" />
            <span>+234 875 8935 675</span>
          </div>
          <div className="flex items-center text-sm">
            <FaEnvelope className="mr-2 text-lg" />
            <span>support@rentbetahouse.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Home</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Properties</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Contact us</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* More (hidden on mobile) */}
        <div className="hidden sm:block">
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Agents</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Affordable Houses</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">FAQ's</a></li>
          </ul>
        </div>

        {/* Popular Search (hidden on mobile) */}
        <div className="hidden sm:block">
          <h4 className="text-lg font-semibold mb-4">Popular Search</h4>
          <ul>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Apartment for sale</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Apartment for rent</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">3 bedroom flat</a></li>
            <li className="mb-2"><a href="#" className="text-sm hover:underline">Bungalow</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#003825] py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-2 sm:mb-0 text-center sm:text-left">
            &copy; 2023 Betahouse | Designed by Adenuga Emmanuel
          </p>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
