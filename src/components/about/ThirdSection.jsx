import React from "react";
import WhyUs from "../../assets/why-us.png";
import WhyUsMobile from "../../assets/whyus-mobile.png";

export default function ThirdSection() {

  return (
    <>
      <div className="justify-items-center py-4 flex justify-center bg-[#f8f9fb]">
        <div className="p-5 md:w-[90%] w-full bg-[#f8f9fb]">
          <div className="">
            <h1 className="text-3xl lg:text-5xl mb-5 md:mb-10 text-center font-serif">
              MEET OUR DYNAMIC TEAM
            </h1>

            <p className="text-lg text-justify">
              At Uprising, our success is driven by our dedicated team of
              professionals who are passionate about delivering excellence in
              everything they do. We pride ourselves on having a diverse and
              talented team that drives innovation and excellence in everything
              we do. From machine learning engineers who harness the power of AI
              to cloud engineers who ensure the reliability and scalability of
              our infrastructure, each member brings a unique set of skills and
              expertise to the table. Our extended reality developers push the
              boundaries of technology, creating immersive experiences that
              captivate and inspire. Meanwhile, our 3D modelers bring creativity
              and precision to every project, crafting lifelike visuals that
              leave a lasting impression.
              <br />
              <br />
              In addition, our AR filter developers create engaging experiences
              for social media platforms, while our web developers and UI/UX
              designers work tirelessly to deliver seamless and intuitive
              digital experiences for our customers. Together, our team
              collaborates seamlessly to deliver innovative solutions that
              exceed expectations and drive business growth.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-items-center md:py-10 flex justify-center bg-[#f8f9fb]">
        <img
          src={WhyUs}
          alt=""
          className="w-full md:w-[80%]  hidden sm:block"
        />
        <img src={WhyUsMobile} alt="" className="w-full py-5 sm:hidden" />
      </div>
    </>
  );
}
