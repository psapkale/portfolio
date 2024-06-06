import { useEffect } from "react";
import { WaterDropGrid } from "./WaterDropGrid";
import { ButtonComponent } from "./ButtonComponent";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const AboutSection = () => {
   const isDesktop = useIsDesktop(800);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("about-show");
         } else {
            entry.target.classList.remove("about-show");
         }
      });
   });

   function handleClick() {
      document.getElementById("contact").scrollIntoView({
         behavior: "smooth",
      });
   }

   useEffect(() => {
      const aboutText = document.getElementById(`aboutText`);
      const aboutHeading = document.getElementById(`aboutHeading`);
      const aboutButton = document.getElementById(`aboutButton`);
      observer.observe(aboutText);
      observer.observe(aboutHeading);
      observer.observe(aboutButton);

      return () => {
         observer.unobserve(aboutText);
         observer.unobserve(aboutHeading);
         observer.unobserve(aboutButton);
      };
   }, []);

   return (
      <div className="w-full h-screen flex items-center justify-center lg:my-10 lg:mb-40 lg:px-28 text-center lg:text-left relative">
         <div className="z-10">
            <h1
               id="aboutHeading"
               className="w-full lg:w-fit scale-y-[1.2] md:scale-y-[1] text-[50px] md:text-[80px] font-[1000] text-slate-950 drop-shadow-lg about-hidden text-nowrap"
            >
               Namaste🙏
            </h1>
            <p
               id="aboutText"
               className="text-xl md:text-2xl px-6 lg:px-0 scale-y-[1.2] lg:scale-y-[1] font-[600] mt-16 md:mt-12 xl:mt-8 w-full lg:w-2/3 about-hidden"
            >
               Hellow, I'm Prem Sapkale, a{" "}
               <span className="text-slate-600 line-through">notorious</span>{" "}
               curious FullStack Developer who enjoys creating immersive
               experience on the internet. I develop exceptional websites and
               web apps that provide intutive, pixel-perfect user interfaces.
            </p>
            <div id="aboutButton" className="mt-10 about-hidden">
               <ButtonComponent
                  classname=""
                  id="aboutButton"
                  onClick={handleClick}
                  text="More About Me"
                  width={300}
                  height={80}
               />
            </div>
         </div>
         {isDesktop && (
            <div className="absolute top-0 sm:top-auto left-0 sm:left-auto bottom-0 sm:bottom-auto right-0">
               <WaterDropGrid gridWidth={28} gridHeight={56} />
            </div>
         )}
      </div>
   );
};
