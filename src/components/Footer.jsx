import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="contact"
      className="px-4 sm:px-8 md:px-16 mt-10 w-full bg-gray-800 justify-center flex flex-col items-center text-white"
    >
      <div
        className={`flex flex-wrap xl:w-[90%] w-full gap-5 justify-center ${
          window.innerWidth > 1087 ? "justify-between" : ""
        } px-5`}
      >
        {/* Upper Section */}
        <div className="w-full md:w-[450px] mt-12 text-center md:text-left sm:mb-1">
          <div className="mb-4">
            <h1 className="sm:text-[44px] text-[30px] font-bold">
              Uprising Tradex LLP
            </h1>
          </div>
          <div className="mb-4 sm:mb-0">
            <h1 className="sm:text-[18px] text-[16px] ml-1 font-semibold">
              Let's take your business to the next level
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-8 ml-1 md:w-[400px]">
            <div className="flex items-center mb-2 sm:mb-0">
              <FaPhone size={22} className="mr-2" />
              <span className="text-[16px] mr-4">+91 9265893860</span>
            </div>
            <div className="flex items-center mb-2 sm:mb-0">
              <MdEmail size={25} className="mr-2" />
              <span className="text-[16px]  mr-4">info@uprisingtradex.com</span>
            </div>
            <div className="flex items-center sm:mb-0">
              <FaLocationDot
                className="mr-3"
                style={{ width: 25, height: 25, flex: "0 0 auto" }}
              />
              <span className="text-[16px] text-left">
                Office No. 18, Ashirwad Shopping, Ashirwad Township 1, Udhna,
                Surat, Gujarat 394210, INDIA
              </span>
            </div>
          </div>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/panvnyza"
          className={`w-full md:w-[450px] ${
            window.innerWidth > 1087 ? "mt-12" : "mb-2"
          }  text-center md:text-left`}
        >
          <div
            className={`w-full md:w-[450px] ${
              window.innerWidth > 1087 ? "" : "mb-2"
            }  text-center md:text-left`}
          >
            <div className="flex flex-col w-full mt-5 gap-6 md:w-auto">
              <input
                type="text"
                required
                name="Full Name"
                placeholder="Full Name"
                className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
              />
              <input
                type="email"
                required
                name="Email"
                placeholder="Email"
                className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
              />
              <input
                type="text"
                required
                name="Message"
                placeholder="How can I help you?"
                className="w-full mb-4 rounded bg-gray-800 text-white border-b-2 border-sky-300 outline-offset-2 focus:outline-none"
              />
              <button className="bg-blue-500 font-semibold w-full text-white py-2 px-4 rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="text-center w-full mb-9 mt-8">
        <h3 className="text-center text-[16px]">
          © Uprising Tradex LLP. 2015 All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
