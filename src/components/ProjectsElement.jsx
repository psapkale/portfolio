import { useEffect, useRef } from "react";
import { ProjectsSection } from "./ProjectsSection";
import { projects } from "../common/projects";
import { SliceThrough } from "./SliceThrough";

const ProjectsElement = ({ id, socialRef, projectsRef }, ref) => {
   const observer = useRef(null);

   useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("show");
            } else {
               entry.target.classList.remove("show");
            }
         });
      });

      const projectsElement = document.querySelectorAll(`#${id}`);
      projectsElement.forEach((el) => observer.current.observe(el));

      return () => {
         if (observer.current) {
            observer.current.disconnect();
         }
      };
   }, [id]);

   return (
      <div className="mt-[80px] lg:mt-[101px]">
         <div className="h-[60dvh] lg:h-[90dvh] flex flex-col items-center justify-center gap-10 text-center text-6xl">
            <h1 className="font-[1000] scale-y-[2.2] scale-x-[0.48] lg:scale-x-[0.8] uppercase drop-shadow-lg text-nowrap">
               Recent Projects
            </h1>
            <h2 className="text-lg lg:text-xl px-6 lg:px-0 text-slate-800 lg:mt-10">
               Check out some of the most recent projects I've had the <br />{" "}
               pleasure of working on.
            </h2>
         </div>
         <ProjectsSection projects={projects} id={id} ref={projectsRef} />
         <SliceThrough />
      </div>
   );
};

export default ProjectsElement;
