import { ProjectsMini } from "./ProjectsMini";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";
import { TechStackSection } from "./TechStackSection";

export const HomeElement = () => {
   return (
      <div>
         <NameElement />
         {/* <MarqueeElement /> */}
         <AboutSection />
         <TechStackSection />
         <ProjectsMini id="projectsMiniElement" />
         <ContactElement />
      </div>
   );
};
