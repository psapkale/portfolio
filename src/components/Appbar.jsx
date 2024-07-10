import { forwardRef, useRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import logo from "/logo.svg";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const Appbar = forwardRef((props, ref) => {
   const appbarRef = useRef(null);
   const isDesktop = useIsDesktop(800);

   function handleContact() {
      const main = document.getElementById("main");
      main.scrollIntoView({
         behavior: "smooth",
      });
   }

   return (
      <nav
         className="appbar text-[#0E100F] flex items-center font-['Mulish'] justify-between p-4 sm:p-6 z-20 absolute top-0 left-0 w-[100dvw] transition-colors duration-300"
         ref={appbarRef}
      >
         <div className="text-lg font-[600] py-3 px-4 sm:px-6 rounded-full flex ">
            <a href="/" className="uppercase cursor-pointer">
               <img
                  src={logo}
                  alt="Prem Sapkale"
                  width={!isDesktop ? 24 : 40}
                  height={!isDesktop ? 24 : 40}
                  className="hover:fill-white"
               />
            </a>
         </div>

         <div
            className="flex items-center justify-between sm:w-1/3 md:w-fit"
            ref={ref}
         >
            <GsapMagnetic>
               <div
                  className={`hidden lg:inline text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000]`}
               >
                  <a href="/projects" className="uppercase cursor-pointer">
                     Projects
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-[14px] md:text-[16px] lg:text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000]">
                  <div
                     onClick={handleContact}
                     className="uppercase cursor-pointer"
                  >
                     Contact
                  </div>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-[14px] md:text-[16px] lg:text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000]">
                  <a
                     href="https://drive.google.com/file/d/1zhfJUCPIhzacavQHfp9tFRJ45b94cRgK/view"
                     target="_blank"
                     className="uppercase"
                  >
                     Resume
                  </a>
               </div>
            </GsapMagnetic>
         </div>
      </nav>
   );
});
