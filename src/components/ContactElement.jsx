import { useRef, useEffect } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ButtonComponent } from "./ButtonComponent";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ContactElement = () => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });
   const isDesktop = useIsDesktop(800);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("button-show");
            } else {
               entry.target.classList.remove("button-show");
            }
         });
      });

      const ctaButton = document.getElementById("cta-button");
      if (ctaButton) {
         observer.observe(ctaButton);
      }

      return () => {
         if (ctaButton) {
            observer.unobserve(ctaButton);
         }
      };
   }, []);

   function handleClick() {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }

   return (
      <footer
         ref={container}
         id="contact"
         // className="border border-white h-[120dvh] lg:h-[160dvh] bg-sky-600 px-0 xs:px-10 text-xl font-[600] text-[#f1f1f1] z-50"
         className="h-[100vh] bg-sky-600 px-0 xs:px-10 text-xl font-[600] text-[#f1f1f1]"
      >
         <div className="w-full h-[90%] flex flex-col items-center justify-center">
            <ContactText progress={scrollYProgress} isDesktop={isDesktop} />
            <div className="h-[12%]" />
            <ButtonComponent
               href={"mailto:prempravinsapkale@gmail.com"}
               text="Drop me an Email!"
               width={!isDesktop ? 300 : 380}
               height={!isDesktop ? 70 : 78}
            />
         </div>
      </footer>
   );
};

const ContactText = ({ isDesktop }) => {
   return (
      <motion.div className="h-fit flex gap-10 flex-col items-center justify-center pointer-events-none drop-shadow-md ">
         <motion.div className="flex flex-col sm:flex-row gap-6 items-center">
            <motion.h1
               id="contact-text"
               className="text-[38px] xs:text-[40px] md:text-[58px] text-nowrap lg:text-[100px] text-[#f1f1f1] scale-y-[1.6] lg:scale-y-[1] font-[1000]"
            >
               Let's have a Coffee
            </motion.h1>
            <img
               src="/coffee-emoji.gif"
               alt="coffee-emoji"
               width={!isDesktop ? 80 : 120}
               height={!isDesktop ? 80 : 120}
            />
         </motion.div>
      </motion.div>
   );
};
