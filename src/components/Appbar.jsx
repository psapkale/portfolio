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
         appbarRef.current.style.borderBottom =
            "2px solid rgba(226,232,240,0.5)";

         gsap.to(".appbar", {
            y: "0%",
            transitionDuration: "100ms",
            ease: "power3.out",
         });
      }
      scroll = newScroll;

      if (scroll === 0) {
         appbarRef.current.style.borderBottom = "none";
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   });

   return (
      <nav
         className="appbar flex items-center font-['Mulish'] justify-between p-6 z-[999] fixed top-0 left-0 w-full transition-colors duration-300"
         ref={appbarRef}
      >
         <div className="text-slate-300 text-lg font-[600] py-3 px-6 rounded-full group  hover:z-50">
            <a href="#" className="uppercase">
               FPKPXTF
            </a>
         </div>

         <div className="flex items-center justify-between w-1/2" ref={ref}>
            <GsapMagnetic>
               <div className="text-slate-300 text-lg font-[600] py-3 px-6 rounded-full group hover:text-slate-100 hover:z-50">
                  <a href="#" className="uppercase">
                     Projects
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-slate-300 text-lg font-[600] py-3 px-6 rounded-full group hover:text-slate-100 hover:z-50">
                  <a href="#" className="uppercase">
                     About
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-slate-300 text-lg font-[600] py-3 px-6 rounded-full group hover:text-slate-100 hover:z-50">
                  <a href="#" className="uppercase">
                     Playground
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-slate-300 text-lg font-[600] py-3 px-6 rounded-full group hover:text-slate-100 hover:z-50">
                  <a href="#" className="uppercase">
                     Contact
                  </a>
               </div>
            </GsapMagnetic>
         </div>
      </nav>
   );
});
