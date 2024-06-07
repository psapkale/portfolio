import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Cursor = ({ showCursor, appbarRef, socialRef, projectsRef }) => {
   const [isHovered, setIsHovered] = useState(false);
   const [isProjectHovered, setIsProjectHovered] = useState(false);
   const cursorSize = isHovered ? 60 : isProjectHovered ? 100 : 20;
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

   function manageProjectMouseOver() {
      setIsProjectHovered(true);
   }

   function manageProjectMouseLeave() {
      setIsProjectHovered(false);
   }

   useEffect(() => {
      // window.addEventListener("mousemove", manageMouseMove);
      document.addEventListener("mousemove", manageMouseMove);
      appbarRef.current.addEventListener("mouseover", manageMouseOver);
      appbarRef.current.addEventListener("mouseleave", manageMouseLeave);

      socialRef.current.addEventListener("mouseover", manageMouseOver);
      socialRef.current.addEventListener("mouseleave", manageMouseLeave);

      // if (projectsRef.current) {
      //    projectsRef.current.addEventListener(
      //       "mouseover",
      //       manageProjectMouseOver
      //    );
      //    projectsRef.current.addEventListener(
      //       "mouseleave",
      //       manageProjectMouseLeave
      //    );
      // }
      return () => {
         document.removeEventListener("mousemove", manageMouseMove);
         appbarRef.current.removeEventListener("mouseover", manageMouseOver);
         appbarRef.current.removeEventListener("mouseleave", manageMouseLeave);

         socialRef.current.removeEventListener("mouseover", manageMouseOver);
         socialRef.current.removeEventListener("mouseleave", manageMouseLeave);

         // if (projectsRef.current) {
         //    projectsRef.current.removeEventListener(
         //       "mouseover",
         //       manageProjectMouseOver
         //    );
         //    projectsRef.current.removeEventListener(
         //       "mouseleave",
         //       manageProjectMouseLeave
         //    );
         // }
      };
   }, [cursorSize]);

   return showCursor ? (
      !isProjectHovered ? (
         <motion.div
            className={`hidden md:block w-[20px] h-[20px] fixed top-0 left-0 rounded-full bg-[#111] ${
               isHovered ? "opacity-[10%]" : "opacity-[30%]"
            }`}
            style={{
               left: smoothMouse.x,
               top: smoothMouse.y,
            }}
            animate={{
               width: cursorSize,
               height: cursorSize,
            }}
         ></motion.div>
      ) : (
         <>
            {/* <motion.div
               className={`fixed top-0 left-0 rounded-full bg-[#111]`}
               style={{
                  left: smoothMouse.x,
                  top: smoothMouse.y,
               }}
               animate={{
                  width: cursorSize,
                  height: cursorSize,
               }}
            >
               <div className="w-full h-full rounded-full flex items-center justify-center shadow-lg uppercase">
                  <h1 className="text-[18px] text-[#f1f1f1] font-[400]">
                     Live
                  </h1>
               </div>
            </motion.div> */}
         </>
      )
   ) : (
      <></>
   );
};
