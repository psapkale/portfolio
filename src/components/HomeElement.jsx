import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";
import { forwardRef } from "react";
import { ProjectsTag } from "./ProjectsTag";

export const HomeElement = forwardRef((props, ref) => {
   return (
      <div>
         <NameElement />
         {/* <MarqueeElement /> */}
         <AboutSection />
         <TechStackSection />
         <ProjectsTag />
         <ProjectsMini id="projectsMiniElement" />
         <ContactElement ref={ref} />
      </div>
   );
});
