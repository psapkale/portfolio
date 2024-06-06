import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeElement } from "./components/HomeElement";
import { ProjectsElement } from "./components/ProjectsElement";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";
import { PreLoader } from "./components/PreLoader";
import { useIsDesktop } from "./hooks/useIsDesktop";

function App() {
   const appbarRef = useRef(null);
   const socialRef = useRef(null);
   const projectsRef = useRef(null);
   const [showCursor, setShowCursor] = useState(true);
   const isDesktop = useIsDesktop(800);

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

      if (projectsMiniElement) {
         observer.observe(projectsMiniElement);
      }

      if (waterDropGridElement) {
         observer.observe(waterDropGridElement);
      }

      return () => {
         if (projectsMiniElement) {
            observer.unobserve(projectsMiniElement);
         }

         if (waterDropGridElement) {
            observer.unobserve(waterDropGridElement);
         }
      };
   }, []);

   return (
      <>
         <>
            {isDesktop && (
               <Cursor
                  showCursor={showCursor}
                  appbarRef={appbarRef}
                  socialRef={socialRef}
                  projectsRef={projectsRef}
               />
            )}
            <Appbar ref={appbarRef} />

            <Router>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <>
                           <PreLoader />
                           <HomeElement
                              ref={(socialRef, projectsRef)}
                              socialRef={socialRef}
                              projectsRef={projectsRef}
                           />
                        </>
                     }
                  />
                  {isDesktop ? (
                     <Route
                        path="/projects"
                        element={
                           <ProjectsElement
                              id="projectsElement"
                              ref={(socialRef, projectsRef)}
                              socialRef={socialRef}
                              projectsRef={projectsRef}
                           />
                        }
                     />
                  ) : (
                     <></>
                  )}
               </Routes>
            </Router>
         </>
      </>
   );
}

export default App;
