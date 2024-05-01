import gsap from "gsap";
import { useEffect } from "react";

export const Herop = () => {
   let scroll = window.scrollY;

   function manageScroll() {
      scroll = window.scrollY;

      gsap.to(".herop", {
         scale: 100 + scroll + "%",
      });
   }

   useEffect(() => {
      window.addEventListener("scroll", manageScroll);
      return () => {
         window.removeEventListener("scroll", manageScroll);
      };
   }, []);

   return (
      <div className="herop w-screen h-screen flex items-center justify-center">
         <div
            className="uppercase font-[400] pointer-events-none"
            style={{
               display: "inline-block",
               margin: "35px",
               "-webkit-transform": "scale(10,29)",
               "-moz-transform": "scale(10,29)",
               "-o-transform": "scale(10,29)",
               transform: "scale(10,29)",
            }}
         >
            <h1 className="bg-gradient-to-t from-[#b7ccee] via-[#f5b39d] to-[#6ea0f0] inline-block text-transparent bg-clip-text mr-2">
               Prem
            </h1>
            <h1 className="bg-gradient-to-t from-[#b7ccee] via-[#f5b39d] to-[#6ea0f0] b7ccee inline-block text-transparent bg-clip-text">
               Sapkale
            </h1>
         </div>
      </div>
   );
};
