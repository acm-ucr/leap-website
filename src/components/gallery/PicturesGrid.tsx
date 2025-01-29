import React from "react";
// import Image from "next/image";

// const FlowerImg = "/assets/home/description.webp";

const PicturesGrid = () => {
  return (
    <div className="grid min-h-screen grid-cols-4 grid-rows-3 gap-1 pb-1 pt-5 text-white">
      <div className="bg-red-500">1</div>
      <div className="bg-blue-500">2</div>
      <div className="bg-green-500">3</div>
      <div className="bg-yellow-500">4</div>
      <div className="bg-purple-500">5</div>
      <div className="bg-pink-500">6</div>
      <div className="bg-indigo-500">7</div>
      <div className="bg-leap-dark-green">8</div>
      <div className="bg-leap-grey">9</div>
      <div className="bg-leap-light-green">10</div>
      <div className="bg-leap-mid-green">11</div>
      <div className="bg-leap-yellow">12</div>
    </div>
  );
};

export default PicturesGrid;
