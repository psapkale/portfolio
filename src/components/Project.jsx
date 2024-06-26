import React from "react";
import { useIsDesktop } from "../hooks/useIsDesktop";

export default function Project({
   index,
   title,
   link,
   description,
   imgSrc,
   techStack,
   manageModal,
}) {
   const isDesktop = useIsDesktop(800);

   return (
      <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         onMouseEnter={(e) => {
            manageModal(true, index, e.clientX, e.clientY);
         }}
         onMouseLeave={(e) => {
            manageModal(false, index, e.clientX, e.clientY);
         }}
         className="w-full h-fit md:h-48 flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-between group my-10 md:my-0"
      >
         <h2 className="text-6xl text-[#111] font-bold transition-all duration-300 md:group-hover:-translate-x-4 md:group-hover:text-[#aaa] text-nowrap">
            {title}
         </h2>
         <p className="flex flex-col items-center gap-6 transition-all duration-300 md:group-hover:translate-x-4 md:group-hover:text-[#aaa]">
            <div className="flex gap-8">
               {techStack?.map((used) => (
                  <img
                     src={`/${used}`}
                     alt={used}
                     width={isDesktop ? 24 : 36}
                     height={isDesktop ? 24 : 36}
                  />
               ))}
            </div>
            {/* <h1>Design & Development</h1> */}
            <h1>{description}</h1>
         </p>
         {!isDesktop && (
            <>
               <img src={imgSrc} alt={title} className="w-full h-fit mt-6" />
            </>
         )}
      </a>
   );
}
