import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/*" element={<App />} />
         </Routes>
      </Router>
   </React.StrictMode>
);

console.log(
   "██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ \n██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗\n███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║\n██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║\n██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝\n╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ \n\nHi Geek, \nI love to be friends with like minded people. Message me, maybe we could help each other.\nBest,\nPrem Sapkale\nmailto: prempravinsapkale@gmail.com"
);
