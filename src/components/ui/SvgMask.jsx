import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn.js";
import MaskSvg from "./mask.svg";
import throttle from "lodash/throttle";

export const SvgMask = ({
  children,
  revealText,
  size = 10,
  revealSize = 300,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const throttledUpdateMousePosition = useRef(
    throttle((e) => {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, 50) // Adjust the throttle delay as needed for smoothness
  ).current;

  useEffect(() => {
    const currentRef = containerRef.current;
    currentRef.addEventListener("mousemove", throttledUpdateMousePosition);
  
    return () => {
      if (currentRef) {
        currentRef.removeEventListener(
          "mousemove",
          throttledUpdateMousePosition
        );
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once
  

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      animate={{
        backgroundColor: isHovered ? "#f8f9fb" : "#ffffff",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-size:40px] [mask-repeat:no-repeat]"
        style={{ maskImage: `url(${MaskSvg})` }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-2 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="w-full h-full flex text-white justify-center  items-center relative"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
