import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";
import { forwardRef } from "react";
import { ProjectsTag } from "./ProjectsTag";
import ColorChangeOnScrollGsap from "./ColorChangeOnScroll";

export const HomeElement = forwardRef((props, ref) => {
   return (
      <div>
         <NameElement />
         <AboutSection />
         <TechStackSection />
         {/* <ColorChangeOnScrollGsap /> */}
         <ProjectsTag />
         <ProjectsMini id="projectsMiniElement" />
         <ProjectsTag invert />
         <ContactElement ref={ref} />
      </div>
   );
});
