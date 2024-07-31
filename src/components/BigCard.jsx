import React from "react";
import Img1 from "../assets/svg/image11.png";
import Img21 from "../assets/Image 1.jpg";
import Img22 from "../assets/Image 2.png";
import Img23 from "../assets/Image 3.png";
import Img24 from "../assets/Image 4.png";

export default function BigCard() {
  return (
    <div className="px-5 bg-[#f8f9fb] z-20 relative md:mt-12 mt-12">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row lg:justify-around items-center justify-center max-w-[1280px] mx-auto z-10">
        <img src={Img1} alt="" className="w-full max-w-[500px] bg-[#f8f9fb]" />
        <div className="w-full max-w-[90%] lg:max-w-[600px] p-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center font-serif">
            ICT Services
          </h1>
          <ul className="list-disc lg:ml-8 text-justify text-lg text-gray-600 ">
            <li>
              <b>Web Development Services:</b> Designing and developing websites
              that are visually appealing, user-friendly, and optimized for
              performance across devices.
            </li>
            <li>
              <b>Cloud Deployment & Automation Services:</b> Implementing and
              managing cloud solutions on AWS, Azure, and GCP, including
              automation of deployment processes for increased efficiency and
              scalability.
            </li>
            <li>
              <b>3D Modeling:</b> Creating detailed and realistic 3D models for
              various applications, including product visualization,
              architectural design, and animation.
            </li>
            <li>
              <b>AR Filters for Social Media:</b> Developing custom Augmented
              Reality (AR) filters for social media platforms, allowing brands
              to engage with their audience in a fun and interactive way.
            </li>
          </ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center justify-center max-w-[1280px] mx-auto mt-12 md:mt-[60px] mb-5 z-10">
        <div className="w-full max-w-[90%] lg:max-w-[600px] p-4">
          <h1 className="text-3xl lg:text-4xl mt-6 font-bold mb-8 text-center font-serif">
            Our Advantages
          </h1>
          <ul className="list-disc lg:ml-8 text-justify text-lg text-gray-600">
            <li>
              <b>Cross-Industry Expertise:</b> Our team's extensive experience
              spans various sectors, allowing us to understand diverse business
              needs and deliver tailored solutions.
            </li>
            <li>
              <b>Client-Centric Approach:</b> With a focus on building strong
              relationships, we go beyond providing solutions by offering
              personalized services and support, ensuring client satisfaction
              and success.
            </li>
            <li>
              <b>Efficiency and Automation:</b> Our solutions include automatic
              target profiling capabilities, streamlining processes and
              enhancing efficiency in target identification and engagement.
            </li>
            <li>
              <b>Quality Assurance:</b> We prioritize quality in all our
              services, ensuring that our solutions meet the highest standards
              and exceed client expectations.
            </li>
            <li>
              <b>Agile Methodology:</b> We follow agile principles and
              practices, allowing us to adapt quickly to changing requirements
              and deliver solutions that are responsive to our clients' evolving
              needs.
            </li>
          </ul>
        </div>
        <div className="bg-[#f8f9fb] max-w-[600px] flex flex-col items-center justify-center md:justify-between overflow-hidden">
          <div className="flex gap-4 mb-4 items-end">
            <img src={Img21} alt="" className="w-1/2 bg-[#fbf9f9] md:w-auto" />
            <img src={Img22} alt="" className="w-1/2 md:w-auto" />
          </div>
          <div className="flex gap-4   items-start">
            <img src={Img23} alt="" className="w-1/2 md:w-auto" />
            <img src={Img24} alt="" className="w-1/2 md:w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
