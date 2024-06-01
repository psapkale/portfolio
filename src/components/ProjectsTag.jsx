import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProjectsTag = ({ invert }) => {
   const container = useRef();
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   return (
      <div
         ref={container}
         className="h-[80vh] flex items-center justify-center"
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
      <motion.div className="flex gap-10" style={{ x, y }}>
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
      <h1 className="text-[120px] text-slate-900 drop-shadow-md font-[1000]">
         Projects
      </h1>
   );
};
