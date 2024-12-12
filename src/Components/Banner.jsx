import React from 'react';
import { LiaCarSideSolid } from "react-icons/lia";

function Banner() {
  return (
    <div>
      <div className="p-10 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Content */}
        <div className="md:col-span-5 text-center md:text-left">
          <h1 className="font-black text-4xl md:text-6xl">Chase Your Dreams with us</h1>
          <br />
          <p className="text-gray-500 text-lg md:text-2xl font-light">
            The harder you work for something, the greater you will feel when you achieve it.
          </p>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-pink-600 text-white p-4 rounded-md hover:border hover:border-pink-600">
              APPLY ONLINE
            </button>
            <button className="text-pink-600 p-4 border border-pink-600 rounded-md hover:bg-pink-600 hover:text-white">
              LOAN CALCULATOR
            </button>
          </div>
        </div>

        {/* Middle Icon Box */}
        <div className="hidden md:block md:col-span-2">
          <div className="grid grid-cols-4 w-3/4 md:w-[13vw] gap-2 p-3 border rounded-3xl mx-auto md:mx-0">
            <div className="col-span-1 flex items-center justify-center">
              <LiaCarSideSolid className="text-3xl text-pink-600 font-bold" />
            </div>
            <div className="col-span-3 flex items-center">
              <h1 className="font-bold">Car Loans</h1>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:col-span-5">
          <img className="w-full mx-auto md:w-auto" src="images/bannerpic.png" alt="Banner" />
        </div>
      </div>

      {/* Mobile Icon Box */}
      <div className="block md:hidden mt-4 text-center">
        <div className="grid grid-cols-4 w-3/4 mx-auto gap-2 p-3 border rounded-3xl">
          <div className="col-span-1 flex items-center justify-center">
            <LiaCarSideSolid className="text-3xl text-pink-600 font-bold" />
          </div>
          <div className="col-span-3 flex items-center">
            <h1 className="font-bold">Car Loans</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
