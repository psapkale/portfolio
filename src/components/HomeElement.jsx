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
import Projects from "./Projects";
import { StackProjects } from "./StackProjects";

const HomeElement = forwardRef(({ socialRef, projectsRef }, ref) => {
   const id = "projectsElement";
   const isDesktop = useIsDesktop(800);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("show");
            }
         });
      });

      const projectsElement = document.querySelectorAll(`#${id}`);
      projectsElement.forEach((el) => observer.observe(el));

      return () => {
         projectsElement.forEach((el) => observer.unobserve(el));
      };
   }, [id]);

   return (
      <div>
         <NameElement />
         <AboutSection />
         <TechStackSection />
         {/* <ColorChangeOnScrollGsap /> */}
         {isDesktop && (
            <div id="projectsMiniElement">
               <ProjectsTag />
               {/* <ProjectsMini id="projectsMiniElement" /> */}
               {/* <ProjectsTag invert /> */}
            </div>
         )}
         <StackProjects />
         {/* <Projects id="" /> */}
         <ContactElement ref={socialRef} />
      </div>
   );
});

export default HomeElement;
