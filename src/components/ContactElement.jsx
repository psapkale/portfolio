import { forwardRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { useEffect } from "react";

export const ContactElement = forwardRef((props, ref) => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });
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
         className="h-[120vh] sm:h-[160vh] bg-sky-600 px-10 text-xl font-[600] text-[#f1f1f1]"
      >
         <div className="w-full h-[90%] relative">
            <ContactText progress={scrollYProgress} />
            <ButtonComponent
               id="cta-button"
               onClick={(e) => mailHandler(e, "prempravinsapkale@gmail.com")}
               text="Drop me an Email!"
               width={380}
               height={78}
               classname="absolute bottom-[28%] left-[36%]"
            />
         </div>
         <div className="text-lg sm:text-xl h-[10%] flex items-center justify-between">
            <div
               style={{
                  display: `${window.innerWidth < 600 ? "none" : "block"}`,
               }}
               className="sm:w-[10%] flex items-center justify-center uppercase z-10"
            >
               <p className="inline">N 19° 51' 1.288''</p>
               <p className="inline ml-2">E 75° 19' 0.053''</p>
            </div>
            <div
               className="w-full sm:w-1/3 flex items-center justify-center group gap-6 sm:gap-10 z-10"
               ref={ref}
            >
               {window.innerWidth > 600 && (
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
               )}
               {window.innerWidth < 600 && (
                  <>
                     <div>git</div>
                     <div>twi</div>
                     <div>lin</div>
                     <div>ins</div>
                  </>
               )}
            </div>
            <div
               className="sm:text-lg cursor-pointer z-10"
               style={{
                  display: `${window.innerWidth < 600 ? "none" : "block"}`,
               }}
               onClick={handleClick}
            >
               Back in time
            </div>
         </div>
      </div>
   );
});

const ContactText = ({ progress }) => {
   const y = useTransform(progress, [0, 1], [-180, 180]);

   return (
      <motion.div
         whileHover={() => {
            console.log("asd");
         }}
         className="h-[85%] flex gap-10 flex-col items-center justify-center pointer-events-none drop-shadow-md z-10"
         style={{ y }}
      >
         <motion.div className="flex flex-col sm:flex-row gap-6 items-center">
            <motion.h1
               id="contact-text"
               className="text-[58px] text-nowrap sm:text-[100px] text-[#f1f1f1] font-[1000]"
            >
               Let's have a Coffee
            </motion.h1>
            <img
               src="/coffee-emoji.gif"
               alt="coffee-emoji"
               width={window.innerWidth < 600 ? 80 : 120}
               height={window.innerWidth < 600 ? 80 : 120}
            />
         </motion.div>
      </motion.div>
   );
};
