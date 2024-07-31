import React from "react";
import HeroImg from "../assets/Rectangle38.png";
import Person from "../assets/svg/Working Businessman on laptop.svg";

export default function Misson() {
  return (
    <div className="z-20 relative bg-[#fbf9f9] xl:mt-[110px] md:mt-[40px] mt-10">
      <div className="min-[930px]:block hidden">
        <div className="w-full h-full ">
          <img
            src={HeroImg}
            alt=""
            className="w-full h-[400px] p-5 object-cover absolute "
          />
        </div>
        <div className="h-[400px] relative p-10 justify-between flex flex-wrap">
          <div className="p-2 xl:p-5 w-[45%] xl:mt-5">
            <h1 className="text-4xl text-white font-bold tracking-wider font-serif">
              Our Misson
            </h1>
            <ul className="list-disc w-[90%] text-white ml-5 mt-2 text-lg">
              <li>
                Assist customers in achieving their goals through differentiated
                products and services.{" "}
              </li>
              <li>
                {" "}
                Help real estate and hospitality businesses enhance customer
                experiences with compelling virtual reality solutions.
              </li>
              <li>
                {" "}
                Drive innovation and excellence in the ICT industry through
                continuous improvement and collaboration.
              </li>
            </ul>
          </div>
          <div className="w-[20%]">
            <img
              src={Person}
              alt=""
              className="absolute h-full top-0 right-0 xl:right-12"
            />
          </div>
        </div>
      </div>
      <div className="min-[930px]:hidden bg-[#fcc9c4] w-full  mb-5">
        <div className="p-10">
          <h1 className="text-3xl text-white font-bold tracking-wider font-serif">
            Our Misson
          </h1>
          <ul className="list-disc text-white ml-5 mt-5 text-lg">
            <li>
              Assist customers in achieving their goals through differentiated
              products and services.{" "}
            </li>
            <li>
              {" "}
              Help real estate and hospitality businesses enhance customer
              experiences with compelling virtual reality solutions.
            </li>
            <li>
              {" "}
              Drive innovation and excellence in the ICT industry through
              continuous improvement and collaboration.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
