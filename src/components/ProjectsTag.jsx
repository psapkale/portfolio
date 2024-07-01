import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsTag = ({ invert }) => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   useEffect(() => {
      // Revert background to #f1f1f1
      gsap.fromTo(
         ".skillsSection",
         {
            background: "black",
         },
         {
            background: "#f1f1f1",
            scrollTrigger: {
               trigger: ".projectsTag",
               start: "top center",
               end: "bottom center",
               scrub: true,
            },
         }
      );
   }, []);

   return (
      <div
         ref={container}
         className="projectsTag h-[32vh] flex items-center justify-center overflow-x-hidden"
      >
         <Slider progress={scrollYProgress} invert={invert} />
      </div>
   );
};

const Slider = ({ progress, invert }) => {
   let dif = invert ? -1 : 1;
   const x = useTransform(progress, [0, 1], [-2500 * dif, 2500 * dif]);
   const y = useTransform(progress, [0, 1], [-140, 140]);

   return (
      <motion.div className="flex gap-10" style={{ x }}>
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
         <Tag />
      </motion.div>
   );
};

const Tag = () => {
   return (
      <h1 className="hollowText text-[80px] md:text-[100px] lg:text-[120px] text-transparent drop-shadow-md font-[1000]">
         Projects
      </h1>
   );
};
