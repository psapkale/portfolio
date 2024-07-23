import { useEffect, useRef } from "react";
import styles from "../animations/about.module.scss";
import { WaterDropGrid } from "./WaterDropGrid";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useInView } from "framer-motion";

export const AboutSection = () => {
   const isDesktop = useIsDesktop(800);
   const description = useRef(null);
   const isInView = useInView(description);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("about-show");
            } else {
               entry.target.classList.remove("about-show");
            }
         });
      });

      const aboutText = document.getElementById(`aboutText`);
      const aboutHeading = document.getElementById(`aboutHeading`);
      const aboutButton = document.getElementById(`aboutButton`);

      if (aboutText) observer.observe(aboutText);
      if (aboutHeading) observer.observe(aboutHeading);
      if (aboutButton) observer.observe(aboutButton);

      return () => {
         if (aboutText) observer.unobserve(aboutText);
         if (aboutHeading) observer.unobserve(aboutHeading);
         if (aboutButton) observer.unobserve(aboutButton);
      };
   }, []);

   function handleClick() {
      document.getElementById("contact").scrollIntoView({
         behavior: "smooth",
      });
   }

   return (
      <div
         ref={description}
         className="aboutSection w-full h-screen lg:h-[120dvh] flex items-center justify-center lg:my-10 lg:mb-40 lg:px-28 text-center lg:text-left relative"
      >
         <div>
            <h1
               id="aboutHeading"
               className="w-full text-center scale-y-[4] scale-x-[1.68] xs:scale-x-[2] md:scale-x-[2.2] lg:scale-x-[3.2] xl:scale-x-[4] 2xl:scale-x-[4.6] text-[50px] leading-tight md:text-[80px] font-[1000] drop-shadow-lg about-hidden text-nowrap fadeBottomText"
            >
               Namaste
            </h1>
            <p
               id="aboutText"
               className="text-slate-950 text-center py-2 text-xl md:text-2xl lg:text-4xl px-6 lg:px-0 scale-y-[1.2] lg:scale-y-[1] font-[600] mt-40 w-full about-hidden"
            >
               {/* 🙏  */}
               I'm Prem Sapkale, a{" "}
               <span className="text-slate-600 line-through">
                  notorious
               </span>{" "}
               curious FullStack Developer who enjoys creating immersive
               experience on the internet. I develop exceptional websites and
               web apps that provide intutive, pixel-perfect user interfaces.
            </p>
            <section className="absolute top-0 left-0 w-full h-3/4 shootingStarsSection">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </section>
         </div>
         {/* {isDesktop && (
            <div className="absolute top-0 sm:top-auto left-0 sm:left-auto bottom-0 sm:bottom-auto right-0 -z-10">
               <WaterDropGrid gridWidth={28} gridHeight={56} />
            </div>
         )} */}
      </div>
   );
};
