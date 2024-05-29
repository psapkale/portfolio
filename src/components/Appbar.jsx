import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";

export const Appbar = forwardRef((props, ref) => {
   const appbarRef = useRef(null);
   let scroll = window.scrollY;

   const handleScroll = () => {
      const newScroll = window.scrollY;

      if (newScroll > scroll) {
         gsap.to(".appbar", {
            y: "-100%",
            transitionDuration: "150ms",
            ease: "power3.out",
         });
      } else if (newScroll <= scroll) {
         // appbarRef.current.style.boxShadow =
         //    "rgba(17,_17,_26,_0.1)_0px_0px_16px";

         gsap.to(".appbar", {
            y: "0%",
            transitionDuration: "100ms",
            ease: "power3.out",
         });
      }

      // if (scroll === 0) {
      //    appbarRef.current.style.boxShadow = "none";
      // }

      scroll = newScroll;
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   return (
      <nav
         className="appbar text-[#0E100F] flex items-center font-['Mulish'] justify-between p-6 z-[999] fixed top-0 left-0 w-full transition-colors duration-300"
         ref={appbarRef}
      >
         <div className="text-lg font-[600] py-3 px-6 rounded-full flex hover:z-[9999]">
            <a href="/" className="uppercase">
               FPKPXTF
            </a>
         </div>

         <div className="flex items-center justify-between w-1/3" ref={ref}>
            <GsapMagnetic>
               <div className="text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000] hover:z-[9999]">
                  <a href="/projects" className="uppercase">
                     Projects
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000] hover:z-[9999]">
                  <a href="#contact" className="uppercase">
                     Contact
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000] hover:z-[9999]">
                  <a href="#" className="uppercase">
                     Resume
                  </a>
               </div>
            </GsapMagnetic>
         </div>
      </nav>
   );
});
