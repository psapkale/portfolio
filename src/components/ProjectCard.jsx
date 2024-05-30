import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const ProjectCard = ({ projectData, serial, isInverted, id }) => {
   if (serial < 10) {
      serial = "0" + serial;
   }

   const leftContent = (
      <div className="w-[40%] h-full grid place-content-center relative">
         <h1
            className={`text-6xl text-sky-500 font-bold absolute ${
               isInverted ? "-right-6" : "-left-6"
            } top-2 -z-10 group-hover:text-orange-500 transition-colors duration-300`}
         >
            {serial}
         </h1>
         <div className="rounded-lg">
            <img
               src={projectData.imgSrc}
               alt={projectData.title}
               className="w-[600px] h-[300px] object-cover rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-400"
            />
            <div className="fadeBottom h-[5rem] relative bottom-[80px] right-0 rounded-b-3xl" />
         </div>
         <div
            className={`text-[60px] scale-y-110 scale-x-110 text-sky-500 font-bold absolute ${
               isInverted ? "-left-10" : "-right-10"
            } bottom-[90px] group-hover:text-orange-500 transition-colors duration-200 ease-in-out font-extrabold custom-text group-hover:custom-text-unset`}
         >
            {projectData.title}
         </div>
      </div>
   );

   const rightContent = (
      <div
         className={`w-[60%] h-full grid place-content-center px-[100px] ${
            isInverted ? "text-left" : "text-right"
         } text-xl text-[#111]`}
      >
         {projectData.description}
      </div>
   );

   return (
      <>
         <div
            id={id}
            className="w-full h-[90vh] flex items-center justify-between p-[80px] group"
         >
            {isInverted ? (
               <>
                  {rightContent}
                  {leftContent}
               </>
            ) : (
               <>
                  {leftContent}
                  {rightContent}
               </>
            )}
         </div>
         <hr className="w-[80vw] mx-auto" />
      </>
   );
};

const styledCursor = function () {
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

   useEffect(() => {});

   return (
      <motion.div
         className={`w-[20px] h-[20px] fixed top-0 left-0 rounded-full bg-red-500`}
         style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
         }}
         animate={{
            width: cursorSize,
            height: cursorSize,
         }}
      ></motion.div>
   );
};
