import { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeElement } from "./components/HomeElement";
import { ProjectsElement } from "./components/ProjectsElement";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";

function App() {
   const appbarRef = useRef(null);
   const [showCursor, setShowCursor] = useState(true);

   useEffect(() => {
      const projectsMiniElement = document.getElementById(
         "projectsMiniElement"
      );
      const projectsElement = document.querySelectorAll("#projectsElement");

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

      // const observer = new IntersectionObserver(
      //    ([entry]) => {
      //       setShowCursor(!entry.isIntersecting);
      //    },
      //    {
      //       threshold: 0.5,
      //    }
      // );

      if (projectsMiniElement) {
         observer.observe(projectsMiniElement);
      }

      if (projectsElement) {
         projectsElement.forEach((project) => {
            observer.observe(project);
         });
      }

      return () => {
         if (projectsMiniElement) {
            observer.unobserve(projectsMiniElement);
         }

         if (projectsElement) {
            projectsElement.forEach((project) => {
               observer.unobserve(project);
            });
         }
      };
   }, []);

   return (
      <>
         <Cursor showCursor={showCursor} appbarRef={appbarRef} />
         <Appbar ref={appbarRef} />

         <Router>
            <Routes>
               <Route path="/" element={<HomeElement />} />
               <Route
                  path="/projects"
                  element={<ProjectsElement id="projectsElement" />}
               />
            </Routes>
         </Router>
      </>
   );
}

export default App;
