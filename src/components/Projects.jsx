import React, { useState, useEffect, useRef } from "react";
import Project from "./Project";
import styles from "../animations/projects.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useIsDesktop } from "../hooks/useIsDesktop";

const projects = [
   {
      title: "Conception",
      src: "conception.jpg",
      color: "#000000",
      link: "https://theconception.vercel.app",
      description: "Productivity at peak",
      techStackLink: ["next.jpg", "react.svg", "tailwind.svg"],
   },
   {
      title: "Homely",
      src: "homely.jpg",
      color: "#8C8C8C",
      link: "https://homely-jet.vercel.app",
      description: "Immersive Booking Experience",
      techStackLink: ["next.jpg", "react.svg", "tailwind.svg"],
   },
   {
      title: "Intercord",
      src: "intercord.jpg",
      color: "#EFE8D3",
      link: "https://intercord.vercel.app",
      description: "MCQ Examination System",
      techStackLink: [
         "react.svg",
         "tailwind.svg",
         "expressjs.svg",
         "nodejs.svg",
      ],
   },
   {
      title: "Hunger Bites",
      src: "hunger-bites.jpg",
      color: "#706D63",
      link: "https://hunger-bites.vercel.app",
      description: "Lightening Fast",
      techStackLink: ["react.svg", "tailwind.svg", "redux.svg"],
   },
];

const scaleAnimation = {
   initial: { scale: 0, x: "-50%", y: "-50%" },
   enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
   },
   closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
   },
};

export default function Projects({ id }) {
   const [modal, setModal] = useState({ active: false, index: 0 });
   const { active, index } = modal;
   const modalContainer = useRef(null);
   const cursor = useRef(null);
   const cursorLabel = useRef(null);
   const isDesktop = useIsDesktop(800);

   let xMoveContainer = useRef(null);
   let yMoveContainer = useRef(null);
   let xMoveCursor = useRef(null);
   let yMoveCursor = useRef(null);
   let xMoveCursorLabel = useRef(null);
   let yMoveCursorLabel = useRef(null);

   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start end", "end start"],
   });

   const height = useTransform(scrollYProgress, [0, 1], [50, 8]);

   useEffect(() => {
      console.log(container.current);
      // Move Container
      xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
         duration: 0.8,
         ease: "power3",
      });
      yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
         duration: 0.8,
         ease: "power3",
      });
      // Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
         duration: 0.5,
         ease: "power3",
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
         duration: 0.5,
         ease: "power3",
      });
      // Move cursor label
      xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
         duration: 0.45,
         ease: "power3",
      });
      yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
         duration: 0.45,
         ease: "power3",
      });
   }, []);

   const moveItems = (x, y) => {
      xMoveContainer.current(x);
      yMoveContainer.current(y);
      xMoveCursor.current(x);
      yMoveCursor.current(y);
      xMoveCursorLabel.current(x);
      yMoveCursorLabel.current(y);
   };

   const manageModal = (active, index, x, y) => {
      moveItems(x, y);
      setModal({ active, index });
   };

   return (
      <main
         ref={container}
         onMouseMove={(e) => {
            moveItems(e.clientX, e.clientY);
         }}
         id={id}
         className="flex flex-col items-center justify-center px-8"
      >
         <motion.div className="max-w-6xl w-full my-24">
            {projects.map((project, index) => {
               return (
                  <div
                     key={index}
                     className="flex gap-10 md:gap-0 flex-col items-center justify-center"
                  >
                     {index === 0 && <div className="w-[110%] border" />}
                     <Project
                        index={index}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        img={project.src}
                        techStack={project.techStackLink}
                        manageModal={manageModal}
                     />
                     <div className="w-[110%] border" />
                  </div>
               );
            })}
            {isDesktop && (
               <motion.div
                  style={{ height }}
                  className={styles.circleContainer}
               >
                  <div className={styles.circle}></div>
               </motion.div>
            )}
         </motion.div>

         {/* Remove or convert this Link component as per your project's needs */}
         {/* <Rounded>
            <p>More work</p>
         </Rounded> */}

         {isDesktop && (
            <>
               <motion.div
                  ref={modalContainer}
                  variants={scaleAnimation}
                  initial="initial"
                  animate={active ? "enter" : "closed"}
                  className="fixed w-96 h-96 bg-white pointer-events-none overflow-hidden"
                  style={{ top: "50%", left: "50%" }}
               >
                  <div
                     style={{ top: index * -100 + "%" }}
                     className="relative w-full h-full transition-top duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
                  >
                     {projects.map((project, index) => (
                        <div
                           key={`modal_${index}`}
                           className="flex items-center justify-center w-full h-full"
                           style={{ backgroundColor: project.color }}
                        >
                           <img
                              src={`/${project.src}`}
                              width={300}
                              height={300}
                              alt={project.title}
                           />
                        </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div
                  ref={cursor}
                  className="fixed w-20 h-20 text-white bg-blue-600 rounded-full pointer-events-none flex items-center justify-center"
                  variants={scaleAnimation}
                  initial="initial"
                  animate={active ? "enter" : "closed"}
               ></motion.div>

               <motion.div
                  ref={cursorLabel}
                  className="fixed w-20 h-20 text-white bg-transparent rounded-full pointer-events-none flex items-center justify-center"
                  variants={scaleAnimation}
                  initial="initial"
                  animate={active ? "enter" : "closed"}
               >
                  View
               </motion.div>
            </>
         )}
      </main>
   );
}
