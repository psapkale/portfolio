import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";
import { Projects } from "./components/Projects";
import { NameElement } from "./components/NameElement";

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
      <div>
         <Appbar ref={appbarRef} />
         <Cursor showCursor={showCursor} appbarRef={appbarRef} />
         <NameElement />
         <Projects id="projects" />
         <div className=" h-[200vh]" />
      </div>
   );
}

export default App;
