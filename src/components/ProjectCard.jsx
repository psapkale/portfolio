import { forwardRef } from "react";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ProjectCard = forwardRef(
   ({ projectData, serial, isInverted, id }, ref) => {
      const isDesktop = useIsDesktop(800);
      if (serial < 10) {
         serial = "0" + serial;
      }

      const leftContent = (
         <div className="w-[90%] md:w-full lg:w-[40%] h-fit flex flex-col relative">
            <h1
               className={`text-6xl text-sky-500 font-bold flex items-center ${
                  isDesktop
                     ? isInverted
                        ? "justify-end"
                        : "justify-start"
                     : "justify-start"
               } group-hover:text-orange-500 transition-colors duration-300 lg:custom-text group-hover:custom-text-unset drop-shadow-lg -z-10`}
            >
               {serial}
            </h1>
            <div className="h-[240px] lg:h-[230px]" />
            <div className="w-full h-[300px] rounded-lg absolute top-auto left-auto right-auto bottom-auto translate-y-[14%]">
               <img
                  src={projectData.imgSrc}
                  alt={projectData.title}
                  className="w-full h-full object-cover rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-400"
               />
               <div className="fadeBottom h-[5rem] relative bottom-[80px] right-0 rounded-b-3xl" />
            </div>
            <div
               className={`text-[50px] text-nowrap md:text-[60px] scale-y-110 scale-x-110 text-sky-500 font-bold flex items-center ${
                  isDesktop
                     ? isInverted
                        ? "justify-start"
                        : "justify-end"
                     : "justify-end"
               } group-hover:text-orange-500 transition-colors duration-200 ease-in-out font-extrabold lg:custom-text group-hover:custom-text-unset drop-shadow-lg`}
            >
               {projectData.title}
            </div>
         </div>
      );

      const rightContent = (
         <div
            className={`w-full lg:w-[60%] h-fit lg:h-full grid place-content-center px-[12px] lg:px-[100px] ${
               isDesktop
                  ? isInverted
                     ? "text-left"
                     : "text-right"
                  : "text-center"
            } text-2xl lg:text-xl text-[#111]`}
         >
            {projectData.description}
         </div>
      );

      return (
         <>
            <a
               href={projectData.link}
               target="_blank"
               ref={ref}
               id={id}
               className={`w-full h-fit lg:h-[90dvh] flex ${
                  isDesktop ? "flex-row" : "flex-col"
               } items-center justify-between p-[10px] sm:p-[80px] group ${
                  !isDesktop
                     ? "custom-hidden"
                     : isInverted
                     ? "custom-invert-desktop-hidden"
                     : "custom-desktop-hidden"
               }`}
            >
               {isDesktop ? (
                  isInverted ? (
                     <>
                        {rightContent}
                        {leftContent}
                     </>
                  ) : (
                     <>
                        {leftContent}
                        {rightContent}
                     </>
                  )
               ) : (
                  <>
                     {leftContent}
                     {rightContent}
                  </>
               )}
            </a>
         </>
      );
   }
);
