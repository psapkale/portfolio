import {
   motion,
   useMotionValue,
   useSpring,
   useScroll,
   useTransform,
} from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import styles from "../animations/projects.module.scss";
import { ProjectCard } from "./ProjectCard";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { Link } from "lucide-react";

const StyledCursor = ({ visible }) => {
   const cursorSize = 100;
   const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
   };

   const smoothMouse = {
      x: useSpring(mouse.x, { damping: 100, stiffness: 2000, mass: 0.5 }),
      y: useSpring(mouse.y, { damping: 100, stiffness: 2000, mass: 0.5 }),
   };

   const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
   };

   useEffect(() => {
      if (visible) {
         document.addEventListener("mousemove", manageMouseMove);
      } else {
         document.removeEventListener("mousemove", manageMouseMove);
      }

      return () => {
         document.removeEventListener("mousemove", manageMouseMove);
      };
   }, [visible]);

   if (!visible) return null;

   return (
      <motion.div
         className="w-[20px] h-[20px] fixed top-0 left-0 rounded-full bg-[#111] pointer-events-none flex gap-1 items-center justify-center"
         style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
         }}
         animate={{
            width: cursorSize,
            height: cursorSize,
         }}
      >
         <Link color="#f1f1f1" width={20} height={20} strokeWidth={1} />
      </motion.div>
   );
};

export const ProjectsSection = forwardRef(({ projects, id }, ref) => {
   const isDesktop = useIsDesktop(800);
   const [cursorVisible, setCursorVisible] = useState(false);

   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   const height = useTransform(scrollYProgress, [0, 1], [50, 8]);

   const handleMouseEnter = () => {
      setCursorVisible(true);
   };

   const handleMouseLeave = () => {
      setCursorVisible(false);
   };

   return (
      <motion.div ref={container}>
         <div
            className="mt-20 md:mt-0 py-20 md:py-0 flex gap-28 md:gap-0 flex-col"
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            {projects.map((project, idx) => {
               return (
                  <ProjectCard
                     key={project.title}
                     projectData={project}
                     serial={idx + 1}
                     isInverted={idx % 2}
                     id={id}
                  />
               );
            })}
         </div>
         <StyledCursor visible={cursorVisible} />
         {isDesktop && (
            <motion.div style={{ height }} className={styles.circleContainer}>
               <div className={styles.circle}></div>
            </motion.div>
         )}
      </motion.div>
   );
});
