import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CardIct = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="services"
      className="justify-center flex items-center md:mt-12 mt-8  w-full md:flex-row "
    >
      <div className="lg:w-[90%] flex flex-wrap justify-center gap-12 items-center md:p-5 mb-5 md:justify-evenly">
        {/* First Card (ICT Section) */}
        <div className="bg-white rounded-lg shadow-lg w-[90%] md:max-w-md md:p-8 p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Revolutionizing Business with Innovative ICT Solutions
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            We specialize in forward-thinking strategies and expert design,
            empowering clients with transformative IT solutions. Our team
            delivers cutting-edge experiences from conceptualization to
            implementation, redefining possibilities in Extended Reality.
            Through innovative thinking, we navigate clients through IT
            transformation journeys, ensuring impactful outcomes.
          </p>
          <a
            href="https://reealtech.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 mx-auto md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-sky-300">
              Learn More
            </button>
          </a>
          {/* Follow Icons */}
          <div
            className={`flex ${
              windowWidth >= 405 && windowWidth > 764
                ? "justify-evenly gap-9"
                : "justify-between"
            } w-full items-center my-10 `}
          >
            {" "}
            <a
              href="https://twitter.com/reealtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.facebook.com/vamverse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/reealtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.instagram.com/reealtech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
          </div>
        </div>

        {/* Second Card (FMCG Section) */}
        <div className="bg-white rounded-lg shadow-lg md:p-8 p-4 w-[90%] md:max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Elevate Consumer Experiences with Premium FMCG Offerings
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            Experience excellence in fast-moving consumer goods (FMCG) with
            Uprising's premium product offerings. We specialize in providing
            high-quality packaged foods, beverages, candies, clothing, and more
            to consumers around the globe. With a commitment to quality and
            competitive pricing, we ensure that our FMCG products exceed
            expectations, delighting customers worldwide and ensuring premium
            quality.
          </p>
          <a href="/order" rel="noopener noreferrer">
            <button className="mt-8 mx-auto md:mx-0 bg-sky-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-sky-300">
              Learn More
            </button>
          </a>
          {/* Follow Icons */}
          <div
            className={`flex ${
              windowWidth >= 405 && windowWidth > 764
                ? "justify-evenly gap-9"
                : "justify-between"
            } w-full items-center my-10`}
          >
            <a
              href="https://twitter.com/uprisingtradex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.facebook.com/uprisingtradexLLP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://in.linkedin.com/in/uprising-tradex-llp-2a94b411b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className=" transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
            <a
              href="https://www.indiamart.com/uprising-tradex-llp/aboutus.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="transition-colors duration-300 ease-in-out hover:text-gray-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIct;
