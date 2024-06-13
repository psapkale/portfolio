import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomeElement from "./components/HomeElement";
import ProjectsElement from "./components/ProjectsElement";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";
import { useIsDesktop } from "./hooks/useIsDesktop";
import { AnimatePresence } from "framer-motion";
import transition from "./animations/transition";
import { Preloader } from "./components/PreLoader";
import PageTitle from "./components/PageTitle";

const TransitionedHomeElement = transition(HomeElement);
const TransitionedProjectsElement = transition(ProjectsElement);

function App() {
   const location = useLocation();
   const appbarRef = useRef(null);
   const socialRef = useRef(null);
   const projectsRef = useRef(null);
   const [showCursor, setShowCursor] = useState(true);
   const isDesktop = useIsDesktop(800);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const projectsMiniElement = document.getElementById(
         "projectsMiniElement"
      );
      const waterDropGridElement = document.getElementById("water-drop-grid");

      const observer = new IntersectionObserver(
         (entry) => {
            entry.map((ent) => {
               setShowCursor(!ent.isIntersecting);
            });
         },
         {
            threshold: 0.5,
         }
      );

      // if (projectsMiniElement) {
      //    observer.observe(projectsMiniElement);
      // }

      // if (waterDropGridElement) {
      //    observer.observe(waterDropGridElement);
      // }

      location.pathname === "/" &&
         setTimeout(() => {
            window.scrollTo(0, 0);
            setIsLoading(false);
         }, 2440);

      return () => {
         // if (projectsMiniElement) {
         //    observer.unobserve(projectsMiniElement);
         // }
         // if (waterDropGridElement) {
         //    observer.unobserve(waterDropGridElement);
         // }
      };
   }, [location.pathname]);

   console.log(
      import.meta.env.VITE_MODE === "DEVELOPMENT"
         ? import.meta.env.VITE_DEVELOPMENT_URL
         : import.meta.env.VITE_PRODUCTION_URL
   );

   return (
      <>
         {/* {isDesktop && (
            <Cursor
               showCursor={showCursor}
               appbarRef={appbarRef}
               socialRef={socialRef}
               projectsRef={projectsRef}
            />
         )} */}
         <Appbar ref={appbarRef} />

         <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
               <Route
                  path="/"
                  element={
                     <>
                        <AnimatePresence mode="wait">
                           {isLoading && <Preloader />}
                        </AnimatePresence>
                        <PageTitle title="Portfolio | Prem Sapkale" />
                        <HomeElement
                           ref={(socialRef, projectsRef)}
                           socialRef={socialRef}
                           projectsRef={projectsRef}
                        />
                     </>
                  }
               />
               {isDesktop && (
                  <Route
                     path="/projects"
                     element={
                        <>
                           <PageTitle title="Projects | Prem Sapkale" />
                           <TransitionedProjectsElement
                              id="projectsElement"
                              ref={(socialRef, projectsRef)}
                              socialRef={socialRef}
                              projectsRef={projectsRef}
                           />
                        </>
                     }
                  />
               )}
            </Routes>
         </AnimatePresence>
      </>
   );
}

export default App;
