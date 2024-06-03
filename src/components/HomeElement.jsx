import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";
import { forwardRef } from "react";
import { ProjectsTag } from "./ProjectsTag";
import ColorChangeOnScrollGsap from "./ColorChangeOnScroll";
import { projects } from "./ProjectsElement";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";

export const HomeElement = forwardRef((props, ref) => {
   const projectsRef = useRef();

   return (
      <div>
         <NameElement />
         <AboutSection />
         <TechStackSection />
         {/* <ColorChangeOnScrollGsap /> */}
         {window.innerWidth < 600 ? (
            projects.map((project, idx) => (
               <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  className="z-10"
               >
                  <ProjectCard
                     projectData={project}
                     serial={idx + 1}
                     isInverted={idx % 2}
                     id="projectsElement"
                     ref={projectsRef}
                  />
               </a>
            ))
         ) : (
            <>
               <ProjectsTag />
               <ProjectsMini id="projectsMiniElement" />
               <ProjectsTag invert />
            </>
         )}
         <ContactElement ref={ref} />
      </div>
   );
});
