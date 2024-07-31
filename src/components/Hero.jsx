import { SvgMask } from "./ui/SvgMask";
import { MdPlayCircleOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

export function Hero() {

  const { pathname } = useLocation();

  return (
    <div className="h-screen w-full bg-[#f8f9fb] items-center  justify-center overflow-hidden">
      <SvgMask
        revealText={
          <div className="flex flex-col text-slate-800 items-center  px-4 sm:px-6 lg:px-8 w-full">
            <h1
              className=" text-gray-800 text-3xl px-[20px] md:text-7xl text-center"
              style={{ fontFamily: "Bebas Neue" }}
            >
              WORKPLACE THAT INSPIRE
            </h1>
            <div className="mt-3  space-y-4 sm:space-y-5">
              <p className="text-gray-700 text-center text-[16px] md:text-xl px-[20px]">
                We work for people and make their dreams come true.
              </p>
            </div>
            <a
            href={`${pathname}#services`}
              rel="noopener noreferrer"
            >
              <button className="group border text-gray-800 border-black px-1 py-2 mt-6 font-semibold tracking-wider  text-base md:text-[20px] bg-white flex items-center">
                <MdPlayCircleOutline size={30} />
                <hr className="w-5 border-[1.68px] border-gray-800 mr-1" />
                Discover
              </button>
            </a>
          </div>
        }
        className=" bg-grid-black/[0.15]"
      >
        <div className="flex flex-col md:gap-0 items-center  px-4 sm:px-6 lg:px-8 w-full">
          <h1
            className=" text-white text-3xl px-[20px] md:text-7xl text-center"
            style={{ fontFamily: "Bebas Neue" }}
          >
            WORKPLACE THAT INSPIRE
          </h1>
          <div className="mt-3 space-y-4 sm:space-y-8">
            <p
              className="text-white text-center text-[16px] md:text-xl px-[20px]"
              style={{ lineHeight: "1.5em" }}
            >
              We work for people and make their dreams come true.
            </p>
          </div>
          <a
          href={`${pathname}#services`}
            rel="noopener noreferrer"
          >
            <button className="text-white border-white border px-1 py-2 mt-6 font-semibold tracking-wider mx-auto text-base md:text-[20px] bg-black flex items-center">
              <MdPlayCircleOutline size={30} />
              <hr className="w-5 border-[1.68px] border-white mr-1" />
              Discover
            </button>
          </a>
        </div>
      </SvgMask>
    </div>
  );
}
