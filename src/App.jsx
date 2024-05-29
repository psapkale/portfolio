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
      const projectsElement = document.getElementById("projects");

      const observer = new IntersectionObserver(
         ([entry]) => {
            setShowCursor(!entry.isIntersecting);
         },
         {
            threshold: 0.5,
         }
      );

      if (projectsElement) {
         observer.observe(projectsElement);
      }

      return () => {
         if (projectsElement) {
            observer.unobserve(projectsElement);
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
               <Route path="/projects" element={<ProjectsElement />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
