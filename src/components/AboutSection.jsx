import { useEffect, useRef } from "react";
import styles from "../animations/about.module.scss";
import { WaterDropGrid } from "./WaterDropGrid";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
   const isDesktop = useIsDesktop(800);
   const description = useRef(null);
   const isInView = useInView(description);

   useEffect(() => {
      // Change background to #111
      gsap.fromTo(
         ".skillsSection",
         {
            background: "#f1f1f1",
         },
         {
            background: "black",
            scrollTrigger: {
               trigger: ".aboutSection",
               start: isDesktop ? "90% center" : "75% center",
               end: isDesktop ? "125% center" : "bottom center",
               scrub: true,
            },
         }
      );

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
         className="aboutSection w-full h-screen flex items-center justify-center lg:my-10 lg:mb-40 lg:px-28 text-center lg:text-left relative"
      >
         <div className="z-10">
            <h1
               id="aboutHeading"
               className="w-full lg:w-fit scale-y-[1.2] md:scale-y-[1] text-[50px] md:text-[80px] font-[1000] text-slate-950 drop-shadow-lg about-hidden text-nowrap"
            >
               Namaste🙏
            </h1>
            <p
               id="aboutText"
               className="lg:bg-[#f1f1f1] lg:rounded-e-full py-2 text-xl md:text-2xl px-6 lg:px-0 scale-y-[1.2] lg:scale-y-[1] font-[600] mt-16 md:mt-12 xl:mt-8 w-full lg:w-2/3 about-hidden"
            >
               Hellow, I'm Prem Sapkale, a{" "}
               <span className="text-slate-600 line-through">notorious</span>{" "}
               curious FullStack Developer who enjoys creating immersive
               experience on the internet. I develop exceptional websites and
               web apps that provide intutive, pixel-perfect user interfaces.
            </p>
         </div>
         {isDesktop && (
            <div className="absolute top-0 sm:top-auto left-0 sm:left-auto bottom-0 sm:bottom-auto right-0">
               <WaterDropGrid gridWidth={28} gridHeight={56} />
            </div>
         )}
      </div>
   );
};
