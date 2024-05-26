import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const NameElement = () => {
   return (
      <div>
         <div className="header h-screen flex items-center justify-center pointer-events-none select-none relative">
            <div className="letters flex text-[150px] scale-y-[3] absolute top-[32%] left-[13%] uppercase">
               <div>p</div>
               <div>r</div>
               <div>e</div>
               <div>m</div>
               <div className="mr-12" />
               <div>s</div>
               <div>a</div>
               <div>p</div>
               <div>k</div>
               <div>a</div>
               <div>l</div>
               <div>e</div>
            </div>
            {/* rotating text */}
            <div className=""></div>
            <div className="absolute top-[82%] right-[20%] text-[15px] font-[300] scale-y-[1.7] scale-x-[1.7] uppercase">
               Frontend Developer <br />
               based in India
            </div>
         </div>
      </div>
   );
};
