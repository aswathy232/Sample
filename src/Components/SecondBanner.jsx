import React from "react";
import { IoImage } from "react-icons/io5";
import { BiShapeSquare } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { FaRocket } from "react-icons/fa6";
import { PiBagFill } from "react-icons/pi";
import { BsFillBoxFill } from "react-icons/bs";
import { FaShapes } from "react-icons/fa";

function SecondBanner() {
  return (
    <div className="p-5 md:p-10">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-2xl md:text-4xl">
          Creating Extraordinary Customer Experience
        </h1>
        <br />
        <p className="text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit
          voluptatem corporis quos rem laboriosam et delectus corrupti beatae
          autem, atque, alias laborum officiis reiciendis molestias adipisci
          itaque eum sequi!
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 mx-auto max-w-7xl">
        {/* Card 1 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <FaShapes />
          </h1>
          <h1 className="font-bold text-lg">Integrity</h1>
          <p className="text-gray-600 text-sm">
            Displaying the highest level of integrity in the way we conduct our
            business.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <IoImage />
          </h1>
          <h1 className="font-bold text-lg">Demonstrate</h1>
          <p className="text-gray-600 text-sm">
            Demonstrating a strong will to win in the marketplace.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <BiShapeSquare />
          </h1>
          <h1 className="font-bold text-lg">Diversity</h1>
          <p className="text-gray-600 text-sm">
            Promoting diversity in the workplace and community.
          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <GiTeamIdea />
          </h1>
          <h1 className="font-bold text-lg">Teamwork</h1>
          <p className="text-gray-600 text-sm">A good teamwork can achieve the goal.</p>
        </div>

        {/* Card 5 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <FaShapes />
          </h1>
          <h1 className="font-bold text-lg">Collaboration</h1>
          <p className="text-gray-600 text-sm">
            Displaying the highest level of integrity in the way we conduct our
            business.
          </p>
        </div>

        {/* Card 6 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <FaRocket />
          </h1>
          <h1 className="font-bold text-lg">Technology</h1>
          <p className="text-gray-600 text-sm">
            Harness the power of technology to deliver better customer
            experiences.
          </p>
        </div>

        {/* Card 7 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <PiBagFill />
          </h1>
          <h1 className="font-bold text-lg">Corporate</h1>
          <p className="text-gray-600 text-sm">
            Setting the standard for the best corporate citizenship in the
            community we work in.
          </p>
        </div>

        {/* Card 8 */}
        <div className="text-center p-4 border rounded-lg hover:shadow-lg">
          <h1 className="text-pink-600 text-3xl mb-3">
            <BsFillBoxFill />
          </h1>
          <h1 className="font-bold text-lg">Digital</h1>
          <p className="text-gray-600 text-sm">
            Setting the standard for the best corporate citizenship in the
            community we work in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
