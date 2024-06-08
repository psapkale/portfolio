import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import logo from "/logo.svg";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const Appbar = forwardRef((props, ref) => {
   const appbarRef = useRef(null);
   let scroll = window.scrollY;
   const isDesktop = useIsDesktop(800);

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

   function handleContact() {
      const contact = document.getElementById("contact");
      contact.scrollIntoView({
         behavior: "smooth",
      });
   }

   useEffect(() => {
      window?.addEventListener("scroll", handleScroll);

      return () => {
         window?.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <nav
         className="appbar text-[#0E100F] flex items-center font-['Mulish'] justify-between p-4 sm:p-6 z-50 fixed top-0 left-0 w-[100dvw] transition-colors duration-300"
         ref={appbarRef}
      >
         <div className="text-lg font-[600] py-3 px-4 sm:px-6 rounded-full flex">
            <a href="/" className="uppercase">
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
                  <a href="/projects" className="uppercase">
                     Projects
                  </a>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-[16px] lg:text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000]">
                  <div
                     onClick={handleContact}
                     className="uppercase cursor-pointer"
                  >
                     Contact
                  </div>
               </div>
            </GsapMagnetic>
            <GsapMagnetic>
               <div className="text-[16px] lg:text-lg font-[600] py-3 px-6 rounded-full hover:text-[#000]">
                  <a
                     href="https://drive.google.com/file/d/1o7M34_D3PApT21mFHlWQ_Uw7eKlrw5lI/view?usp=sharing"
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
