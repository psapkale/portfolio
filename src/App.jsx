import { useRef } from "react";
import "./App.css";
import { Appbar } from "./components/Appbar";
import { Cursor } from "./components/Cursor";
import { ProjectsDirection } from "./components/ProjectsDirection";
import { Herop } from "./components/Herop";

function App() {
   const appbarRef = useRef(null);

   return (
      <div>
         <Appbar ref={appbarRef} />
         <Cursor appbarRef={appbarRef} />
         <Herop />
         {/* <ProjectsDirection /> */}
      </div>
   );
}

export default App;
