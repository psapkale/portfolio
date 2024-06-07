import { forwardRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { useEffect } from "react";
import logoWhite from "/logo-white.svg";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const ContactElement = forwardRef((props, ref) => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });
   const isDesktop = useIsDesktop(800);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("button-show");
         } else {
            entry.target.classList.remove("button-show");
         }
      });
   });

   useEffect(() => {
      const ctaButton = document.getElementById("cta-button");
      observer.observe(ctaButton);

      return () => {
         observer.unobserve(ctaButton);
      };
   }, []);

   function handleClick() {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }

   function mailHandler(e, mail) {
      window.location.href = `mailto:${mail}`;
      e.preventDefault();
   }

   return (
      <div
         ref={container}
         id="contact"
         className="h-[120vh] lg:h-[160vh] bg-sky-600 px-10 text-xl font-[600] text-[#f1f1f1]"
      >
         <div className="w-full h-[90%] flex flex-col items-center justify-center">
            <ContactText progress={scrollYProgress} isDesktop={isDesktop} />
            <div className="h-[12%]" />
            <ButtonComponent
               id="cta-button"
               onClick={(e) => mailHandler(e, "prempravinsapkale@gmail.com")}
               text="Drop me an Email!"
               width={!isDesktop ? 300 : 380}
               height={!isDesktop ? 70 : 78}
               // classname="absolute translate-x-[50%] translate-y-[50%] bottom-[28%] left-auto xs:left-[10%] sm:left-[12%] md:left-[12%] md:bottom-[30%] lg:bottom-[28%] lg:left-[36%]"
            />
         </div>
         <div className="text-lg sm:text-xl h-[10%] flex items-center justify-between">
            {isDesktop && (
               <div className="sm:w-[10%] flex items-center justify-center uppercase z-10">
                  <img
                     src={logoWhite}
                     alt="Prem Sapkale"
                     width={30}
                     height={30}
                     className="fill-white"
                  />
               </div>
            )}
            <div
               className="w-full lg:w-1/3 flex items-center justify-center group gap-10 z-10"
               ref={ref}
            >
               {isDesktop ? (
                  <>
                     <GsapMagnetic>
                        <a
                           target="_blank"
                           href="https://github.com/psapkale"
                           className="hover:text-[#f1f1f1] flex gap-2 sm:gap-10"
                        >
                           Github
                        </a>
                     </GsapMagnetic>
                     <span className="group-hover:opacity-60">/</span>
                     <GsapMagnetic>
                        <a
                           target="_blank"
                           href="https://twitter.com/premstw"
                           className="hover:text-[#f1f1f1] flex gap-2 sm:gap-10"
                        >
                           Twitter
                        </a>
                     </GsapMagnetic>
                     <span className="group-hover:opacity-60">/</span>
                     <GsapMagnetic>
                        <a
                           target="_blank"
                           href="https://www.linkedin.com/in/premsapkale"
                           className="hover:text-[#f1f1f1] flex gap-2 sm:gap-10"
                        >
                           Linkedin
                        </a>
                     </GsapMagnetic>
                     <span className="group-hover:opacity-60">/</span>
                     <GsapMagnetic>
                        <a
                           target="_blank"
                           href="https://www.instagram.com/prem__thxi"
                           className="hover:text-[#f1f1f1] flex gap-2 sm:gap-10"
                        >
                           Instagram
                        </a>
                     </GsapMagnetic>
                  </>
               ) : (
                  <>
                     <a
                        target="_blank"
                        href="https://github.com/psapkale"
                        className=""
                     >
                        <img
                           src="/github.jpg"
                           alt="github.com/psapkale"
                           width={28}
                           height={28}
                        />
                     </a>
                     <a
                        target="_blank"
                        href="https://twitter.com/premstw"
                        className=""
                     >
                        <img
                           src="/x.jpg"
                           alt="twitter.com/premstw"
                           width={28}
                           height={28}
                        />
                     </a>
                     <a
                        target="_blank"
                        href="https://www.linkedin.com/in/premsapkale"
                        className=""
                     >
                        <img
                           src="/linkedin.svg"
                           alt="linkedin.com/in/premsapkale"
                           width={28}
                           height={28}
                        />
                     </a>
                     <a
                        target="_blank"
                        href="https://www.instagram.com/prem__thxi"
                        className=""
                     >
                        <img
                           src="/instagram.jpg"
                           alt="instagram.com/prem__thxi"
                           width={28}
                           height={28}
                        />
                     </a>
                  </>
               )}
            </div>
            {isDesktop && (
               <div
                  className="sm:text-lg text-nowrap cursor-pointer z-10"
                  onClick={handleClick}
               >
                  Back in time
               </div>
            )}
         </div>
      </div>
   );
});

const ContactText = ({ progress, isDesktop }) => {
   const y = useTransform(progress, [0, 1], [-180, 180]);

   return (
      <motion.div
         className="h-[85%] h-fit flex gap-10 flex-col items-center justify-center pointer-events-none drop-shadow-md z-10"
         style={{ y }}
      >
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
