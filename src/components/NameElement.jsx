import { useEffect } from "react";

export const NameElement = () => {
   return (
      <div>
         <div className="header h-screen flex items-center justify-center pointer-events-none select-none relative">
            <div className="letters text-[#0E100F] flex text-[150px] scale-y-[3] absolute top-[32%] left-[12%] uppercase font-[880] drop-shadow-lg">
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
            {/* <div className="text font-[20px] animation-animate">
               FullStack Developer based in India
            </div> */}
            {/* <div className="absolute top-[82%] right-[20%] text-[15px] font-[300] scale-y-[1.7] scale-x-[1.7] uppercase">
               <span className="absolute -left-6 scale-125">&#8600;</span>
               FullStack Developer <br />
               based in India
            </div> */}
         </div>
      </div>
   );
};
