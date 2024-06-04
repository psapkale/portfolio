import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeElement } from "./components/HomeElement";
import { ProjectsElement } from "./components/ProjectsElement";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";
import { Preloader } from "./components/PreLoader";

function App() {
   const appbarRef = useRef(null);
   const socialRef = useRef(null);
   const projectsRef = useRef(null);
   const [showCursor, setShowCursor] = useState(true);

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
            {window.innerWidth > 600 && (
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
                           <Preloader />
                           <HomeElement ref={socialRef} />
                        </>
                     }
                  />
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
               </Routes>
            </Router>
         </>
      </>
   );
}

export default App;
