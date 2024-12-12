import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container mx-auto">
      {/* Header Content */}
      <div className="grid grid-cols-12 p-5 gap-4 items-center">
        {/* Logo */}
        <img src="images/headerpic.png" alt="Logo" className="col-span-3 md:col-span-2 pl-5" />

        {/* Navigation Links */}
        <div
          className={`col-span-8 md:col-span-8 ${
            showMenu ? "block" : "hidden"
          } md:block`}
        >
          <ul className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 font-bold">
            <li className="cursor-pointer hover:text-pink-600">RETAIL</li>
            <li className="cursor-pointer hover:text-pink-600">SME</li>
            <li className="cursor-pointer hover:text-pink-600">CORPORATE</li>
            <li className="cursor-pointer hover:text-pink-600">ABOUT US</li>
            <li className="cursor-pointer hover:text-pink-600">COVID 19</li>
            <li className="cursor-pointer hover:text-pink-600">CAMPAIGNS</li>
          </ul>
        </div>

        {/* Search Icon */}
        <div className="col-span-1 text-pink-600 text-3xl cursor-pointer flex justify-center">
          <FiSearch />
        </div>

        {/* iSERVICE Button */}
        <div className="col-span-3 md:col-span-1">
          <button className="w-full bg-pink-600 text-white p-2 rounded-xl hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600">
            iSERVICE
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-center">
        <button
          className="bg-pink-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? "Hide Menu" : "Show Menu"}
        </button>
      </div>
    </div>
  );
}

export default Header;
