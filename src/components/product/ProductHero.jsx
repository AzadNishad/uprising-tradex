import React from "react";
import BgVideo from "../../assets/video/productHeroVideo.mp4";
import { FaArrowRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

export default function ProductHero() {
  function playBack(e) {
    e.target.playbackRate = 0.75;
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Delay the URL update to allow smooth scroll to finish
      setTimeout(() => {
        window.history.replaceState(null, null, window.location.pathname);
      }, 50); // Adjust the delay time as needed
    }
  };

  const { pathname } = useLocation();

  return (
    <div className="h-screen ">
      <section className="flex justify-center items-center h-[100vh] ">
        <video
          className="w-full z-[-10px] h-full absolute object-cover  blur-[1px]"
          src={BgVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
          onPlaying={playBack}
        ></video>
        <div className="z-[-5px] w-full h-full bg-black opacity-20 absolute"></div>
        <div className="z-20 flex flex-col justify-center items-center mt-5 p-5">
          <h1
            className="text-center text-white text-3xl md:text-7xl px-4 mx-auto"
            style={{ fontFamily: "Bebas Neue" }}
          >
            YOU ORDER WE DELIVER
          </h1>
          <a
          href={`${pathname}#products`}
          onClick={(e) => scrollToSection("products", e)}
            className="group border px-3 py-2 mt-5 active:border-2  font-semibold tracking-wider scroll-smooth  text-white"
          >
            Order Now
            <FaArrowRight className="hidden ml-2 group-hover:inline-block " />
          </a>
        </div>
      </section>
    </div>
  );
}
