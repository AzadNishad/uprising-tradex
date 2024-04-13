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
    }, 10) // Adjust the throttle delay as needed for smoothness
  ).current;

  useEffect(() => {
    const currentRef = containerRef.current; // Store the current value of ref inside the effect
    currentRef.addEventListener("mousemove", throttledUpdateMousePosition);
    return () => {
      if (currentRef) {
        currentRef.removeEventListener(
          "mousemove",
          throttledUpdateMousePosition
        );
      }
    };
  }, [throttledUpdateMousePosition]);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      animate={{
        backgroundColor: isHovered ? "#f8f9fb" : "",
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
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="full mx-auto text-center text-white  text-4xl font-bold relative z-1"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
