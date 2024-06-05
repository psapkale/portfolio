import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";
import { forwardRef } from "react";
import { ProjectsTag } from "./ProjectsTag";
import ColorChangeOnScrollGsap from "./ColorChangeOnScroll";
import { useRef } from "react";
import { useIsDesktop } from "../hooks/useIsDesktop";

export const HomeElement = forwardRef((props, ref) => {
   const projectsRef = useRef();
   const isDesktop = useIsDesktop(800);

   return (
      <div>
         <NameElement />
         <AboutSection />
         <TechStackSection />
         {/* <ColorChangeOnScrollGsap /> */}
         <ProjectsTag />
         {!isDesktop ? (
            // projects.map((project, idx) => (
            //    <a
            //       key={project.title}
            //       href={project.link}
            //       target="_blank"
            //       className="z-10"
            //    >
            //       <ProjectCard
            //          projectData={project}
            //          serial={idx + 1}
            //          isInverted={idx % 2}
            //          id="projectsElement"
            //          ref={projectsRef}
            //       />
            //    </a>
            // ))
            <>asd</>
         ) : (
            <>
               <ProjectsMini id="projectsMiniElement" />
            </>
         )}
         <ProjectsTag invert />
         <ContactElement ref={ref} />
      </div>
   );
});
