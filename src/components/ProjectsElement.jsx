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
      <div className="mt-[101px]">
         <div className="h-[90dvh] grid place-content-center gap-10 text-center text-6xl">
            <h1 className="font-[1000] scale-y-[2.2] scale-x-[0.8] uppercase drop-shadow-lg">
               Recent Projects
            </h1>
            <h2 className="text-xl text-slate-800 mt-10">
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
