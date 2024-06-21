import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import { AboutSection } from "./AboutSection";
import { TechStackSection } from "./TechStackSection";

const poppins = {
   weight: "400",
   style: ["normal", "italic"],
   subsets: ["latin"],
};

const damion = {
   weight: "400",
   subsets: ["latin"],
};

gsap.registerPlugin(ScrollTrigger);

function ColorChangeOnScrollGsap() {
   useEffect(() => {
      const sectionColor = document.querySelectorAll("[data-bgcolor]");
      sectionColor.forEach((colorSection, i) => {
         const prevBgColor = i === 0 ? "" : sectionColor[i - 1].dataset.bgcolor;
         const prevTextColor =
            i === 0 ? "" : sectionColor[i - 1].dataset.textcolor;

         ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".techContainer",
            start: "top 50%",
            onEnter: () =>
               gsap.to(".techContainer", {
                  backgroundColor: colorSection.dataset.bgcolor,
                  color: colorSection.dataset.textcolor,
                  overwrite: "auto",
               }),
            onLeaveBack: () =>
               gsap.to(".techContainer", {
                  backgroundColor: prevBgColor,
                  color: prevTextColor,
                  overwrite: "auto",
               }),
         });
      });

      return () => {};
   }, []);

   return (
      <div className="techContainer h-screen w-full flex flex-col overflow-auto">
         <section
            className="min-h-screen w-screen relative flex items-center justify-center px-32"
            data-bgcolor="#f1f1f1"
            data-textcolor="#111111"
         >
            <AboutSection />
         </section>
         <section
            className="min-h-screen w-screen relative flex items-center justify-center px-32"
            data-bgcolor="#111111"
            data-textcolor="#f1f1f1"
         >
            <TechStackSection />
         </section>
      </div>
   );
}

export default ColorChangeOnScrollGsap;
