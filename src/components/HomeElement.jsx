import { Projects } from "./Projects";
import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { ContactElement } from "./ContactElement";

export const HomeElement = () => {
   return (
      <div>
         <NameElement />
         {/* <MarqueeElement /> */}
         <Projects id="projects" />
         <AboutSection />
         <ContactElement />
      </div>
   );
};
