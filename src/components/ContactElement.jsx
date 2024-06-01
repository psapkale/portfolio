import { forwardRef } from "react";
import { GsapMagnetic } from "./GSAPMagnetic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ContactElement = forwardRef((props, ref) => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   function handleClick() {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }

   return (
      <div
         ref={container}
         id="contact"
         className="h-[160vh] bg-sky-600 px-10 text-xl font-[600] text-[#f1f1f1]"
      >
         <ContactText progress={scrollYProgress} />
         <div className="h-[15%] flex items-center justify-between">
            <a href="/" className="uppercase z-10">
               Prem
            </a>
            <div
               className="w-1/3 flex items-center justify-center group gap-10 z-10"
               ref={ref}
            >
               <GsapMagnetic>
                  <a
                     target="_blank"
                     href="https://www.instagram.com/prem.thxi"
                     className="hover:text-[#f1f1f1] flex gap-10 peer-hover:opacity-50"
                  >
                     Instagram
                  </a>
               </GsapMagnetic>
               <span className="group-hover:opacity-60">/</span>
               <GsapMagnetic>
                  <a
                     target="_blank"
                     href="http://github.com/psapkale"
                     className="hover:text-[#f1f1f1] flex gap-10 peer-hover:opacity-50"
                  >
                     Github
                  </a>
               </GsapMagnetic>
               <span className="group-hover:opacity-60">/</span>
               <GsapMagnetic>
                  <a
                     target="_blank"
                     href="https://twitter.com/premstw"
                     className="hover:text-[#f1f1f1] flex gap-10 peer-hover:opacity-50"
                  >
                     Twitter
                  </a>
               </GsapMagnetic>
               <span className="group-hover:opacity-60">/</span>
               <GsapMagnetic>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/premsapkale"
                     className="hover:text-[#f1f1f1] flex gap-10 peer peer-hover:opacity-50"
                  >
                     Linkedin
                  </a>
               </GsapMagnetic>
            </div>
            <div className="text-lg cursor-pointer z-10" onClick={handleClick}>
               Back in time
            </div>
         </div>
      </div>
   );
});

const ContactText = ({ progress }) => {
   const y = useTransform(progress, [0, 1], [-200, 200]);

   return (
      <motion.div
         className="h-[85%] flex items-center justify-center pointer-events-none drop-shadow-md"
         style={{ y }}
      >
         <h1
            id="contact-text"
            className="text-[100px] text-[#f1f1f1] font-[1000]"
         >
            Let's have a Coffee
         </h1>
      </motion.div>
   );
};
