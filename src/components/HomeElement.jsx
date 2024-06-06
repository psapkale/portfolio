import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";
import { forwardRef, useEffect } from "react";
import { ProjectsTag } from "./ProjectsTag";
import ColorChangeOnScrollGsap from "./ColorChangeOnScroll";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { ProjectsSection } from "./ProjectsSection";
import { projects } from "./ProjectsElement";

const HomeElement = forwardRef(({ socialRef, projectsRef }, ref) => {
   const id = "projectsElement";
   const isDesktop = useIsDesktop(800);
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("show");
         } else {
            entry.target.classList.remove("show");
         }
      });
   });

   useEffect(() => {
      const projectsElement = document.querySelectorAll(`#${id}`);
      projectsElement.forEach((el) => observer.observe(el));
   }, []);

   return (
      <div>
         <NameElement />
         <AboutSection />
         <TechStackSection />
         {/* <ColorChangeOnScrollGsap /> */}
         <ProjectsTag />
         {!isDesktop ? (
            <>
               <ProjectsSection projects={projects} id={id} ref={projectsRef} />
            </>
         ) : (
            <>
               <ProjectsMini id="projectsMiniElement" />
            </>
         )}
         <ProjectsTag invert />
         <ContactElement ref={socialRef} />
      </div>
   );
});

export default HomeElement;
