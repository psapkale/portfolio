import { NameElement } from "./NameElement";
import { AboutSection } from "./AboutSection";
import { TechStackSection } from "./TechStackSection";
import { forwardRef, useEffect } from "react";
import { ProjectsTag } from "./ProjectsTag";
import { useIsDesktop } from "../hooks/useIsDesktop";
import { HeroProjectsSection } from "./HeroProjectsSection";
import "../animations/styles.css";
import { SliceThrough } from "./SliceThrough";
import Footer from "./Footer";

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
         {/* {isDesktop && ( */}
         <div id="projectsMiniElement">
            <ProjectsTag />
            {/* <ProjectsMini id="projectsMiniElement" /> */}
            {/* <ProjectsTag invert /> */}
         </div>
         {/* )} */}
         <HeroProjectsSection />
         <SliceThrough />
         <Footer />
      </div>
   );
});

export default HomeElement;
