import React from "react";
// import Image from "next/image";

// const FlowerImg = "/assets/home/description.webp";

const PicturesGrid = () => {
  return (
    <div className="grid min-h-screen grid-cols-4 grid-rows-8 gap-1 pb-1 pt-8 text-white sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      <div className="flex items-center justify-center bg-red-500">1</div>
      <div className="flex items-center justify-center bg-blue-500">2</div>
      <div className="flex items-center justify-center bg-green-500">3</div>
      <div className="flex items-center justify-center bg-yellow-500">4</div>
      <div className="flex items-center justify-center bg-purple-500">5</div>
      <div className="flex items-center justify-center bg-pink-500">6</div>
      <div className="flex items-center justify-center bg-indigo-500">7</div>
      <div className="flex items-center justify-center bg-leap-dark-green">
        8
      </div>
      <div className="flex items-center justify-center bg-leap-grey lg:col-span-2">
        9
      </div>
      <div className="flex items-center justify-center bg-leap-light-green lg:col-span-2">
        10
      </div>
      <div className="flex items-center justify-center bg-red-700 lg:col-span-2">
        11
      </div>
      <div className="flex items-center justify-center bg-leap-yellow lg:col-span-2">
        12
      </div>
      <div className="flex items-center justify-center bg-blue-800 md:col-span-2 lg:col-span-3 lg:row-span-2">
        13
      </div>
      <div className="col-span-2 flex items-center justify-center bg-teal-400 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2">
        14
      </div>
      <div className="flex items-center justify-center bg-purple-700 md:col-span-2 lg:col-span-3 lg:row-span-2">
        15
      </div>
      <div className="col-span-4 row-span-2 flex items-center justify-center bg-leap-mid-green md:col-span-3 lg:col-span-4 lg:row-span-3">
        16
      </div>
      <div className="col-span-4 row-span-2 flex items-center justify-center bg-leap-dark-green md:col-span-3 lg:col-span-4 lg:row-span-3">
        17
      </div>
    </div>
  );
};

export default PicturesGrid;
