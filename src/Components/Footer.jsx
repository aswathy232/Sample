import React from 'react';
import { FaFacebookF, FaLinkedin, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className="p-5 md:p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* About the Company Section */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-4">About the Company</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus neque
            excepturi veniam! Saepe deleniti quia quaerat adipisci.
          </p>
          <div className="flex mt-4 space-x-4">
            <FaFacebookF className="text-blue-500 text-xl cursor-pointer hover:opacity-75" />
            <FaInstagramSquare className="text-pink-600 text-xl cursor-pointer hover:opacity-75" />
            <FaYoutube className="text-red-600 text-xl cursor-pointer hover:opacity-75" />
            <FaLinkedin className="text-blue-500 text-xl cursor-pointer hover:opacity-75" />
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-4">Product</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus neque
            excepturi veniam! Saepe deleniti quia quaerat adipisci.
          </p>
        </div>

        {/* Get Started Section */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-4">Get Started</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus neque
            excepturi veniam! Saepe deleniti quia quaerat adipisci.
          </p>
        </div>

        {/* About Section */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-4">About</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus neque
            excepturi veniam! Saepe deleniti quia quaerat adipisci.
          </p>
        </div>

        {/* Additional About Section */}
        <div>
          <h1 className="font-bold text-lg md:text-xl mb-4">Additional Info</h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta necessitatibus neque
            excepturi veniam! Saepe deleniti quia quaerat adipisci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
