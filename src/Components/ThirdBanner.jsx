import React from 'react';

function ThirdBanner() {
  return (
    <div className="p-5 md:p-10">
      {/* Heading Section */}
      <div className="mb-10">
        <h1 className="font-bold text-xl md:text-2xl text-center">
          BUSINESS PARTNERS
        </h1>
      </div>

      {/* Partner Logos Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
        <div className="flex justify-center">
          <img src="images/image 3.png" alt="Partner 1" className="max-w-[80%] md:max-w-full" />
        </div>
        <div className="flex justify-center">
          <img src="images/image 4.png" alt="Partner 2" className="max-w-[80%] md:max-w-full" />
        </div>
        <div className="flex justify-center">
          <img src="images/image 5.png" alt="Partner 3" className="max-w-[80%] md:max-w-full" />
        </div>
        <div className="flex justify-center">
          <img src="images/image 6.png" alt="Partner 4" className="max-w-[80%] md:max-w-full" />
        </div>
      </div>

      {/* IPCD Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img
            className="h-[50%] md:h-[80%] max-w-full object-contain"
            src="images/Picture.png"
            alt="IPCD"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left px-5">
          <h1 className="font-bold text-2xl md:text-3xl mb-4">
            IPCD AT A GLANCE
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo cumque doloribus velit
            saepe, nihil delectus corporis iusto voluptatum mollitia ratione. Dolorum, obcaecati
            quia. Voluptates magni, sapiente nemo fuga impedit voluptatem. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Illo cumque doloribus velit saepe, nihil delectus
            corporis iusto voluptatum mollitia ratione. Dolorum, obcaecati quia. Voluptates magni,
            sapiente nemo fuga impedit voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdBanner;
