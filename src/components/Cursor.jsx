import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Cursor = ({ showCursor, appbarRef }) => {
   const [isHovered, setIsHovered] = useState(false);
   const cursorSize = isHovered ? 60 : 20;
   const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
   };

   const smoothMouse = {
      x: useSpring(mouse.x, { damping: 100, stiffness: 2000, mass: 0.5 }),
      y: useSpring(mouse.y, { damping: 100, stiffness: 2000, mass: 0.5 }),
   };

   const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
   };

   const manageMouseOver = () => {
      setIsHovered(true);
   };

   const manageMouseLeave = () => {
      setIsHovered(false);
   };

   useEffect(() => {
      // window.addEventListener("mousemove", manageMouseMove);
      document.addEventListener("mousemove", manageMouseMove);
      appbarRef.current.addEventListener("mouseover", manageMouseOver);
      appbarRef.current.addEventListener("mouseleave", manageMouseLeave);
      return () => {
         // window.removeEventListener("mousemove", manageMouseMove);
         document.removeEventListener("mousemove", manageMouseMove);
         appbarRef.current.removeEventListener("mouseover", manageMouseOver);
         appbarRef.current.removeEventListener("mouseleave", manageMouseLeave);
      };
   }, [cursorSize]);

   return (
      showCursor && (
         <motion.div
            className={`w-[20px] h-[20px] fixed top-0 left-0 rounded-full ${
               isHovered
                  ? "bg-[#727171] opacity-[10%]"
                  : "bg-[#b5b5b5] bg-[] opacity-[30%]"
            } z-10`}
            style={{
               left: smoothMouse.x,
               top: smoothMouse.y,
            }}
            animate={{
               width: cursorSize,
               height: cursorSize,
            }}
         ></motion.div>
      )
   );
};
