import React from "react";
import CoverImg from "../assets/CoverImage.png"; // Ensure the correct path to your image

export default function Services() {
  return (
    <div
      className="w-full xl:w-[80%] mx-auto mt-10  py-8 xl:py-0 px-5 xl:px-40 xl:my-[78px] z-20 relative"
      style={{
        backgroundImage: `url(${CoverImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Right Section */}
      <div className="p-8 xl:p-12 top-10 xl:relative bg-white/70 backdrop-blur-sm  w-full xl:w-[70%]  lg:shadow-[-2px_-2px_10px_1px_#ffffff,2px_2px_10px_1px_#33333350] drop-shadow-[5px] xl:ml-[300px]">
        <h1 className="text-3xl xl:text-4xl font-bold mb-8 xl:mb-12 font-serif">
          Fast moving consumer goods
        </h1>
        <ul className="list-disc pl-5 mb-4 xl:mb-1 text-lg text-gray-800 text-justify">
          <li>
            <b>Export of Packaged Foods:</b> We specialize in exporting a
            variety of packaged foods, including Indian sweets, namkeens,
            wafers, and other commodities, showcasing the rich flavors and
            diverse culinary traditions of India to global markets.
          </li>
          <li>
            <b>Export of Dry Fruits, Raisins, and Peanuts:</b> Our import and
            export services extend to dry fruits, raisins, and peanuts,
            providing access to high-quality products sourced from around the
            world to meet the demands of our clients.
          </li>
          <li>
            <b>Export of Suits and Sarees:</b> We also cater to the fashion
            industry by exporting traditional Indian attire, including suits and
            sarees, renowned for their craftsmanship, quality, and elegance,
            making a style statement globally.
          </li>
        </ul>
      </div>
    </div>
  );
}
