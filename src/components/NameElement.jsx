import { useEffect } from "react";

export const NameElement = () => {
   // useEffect(() => {
   // const text = document.querySelector(".text");
   // text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
   // const span = document.querySelectorAll("span");
   // span.forEach((element) => {
   //    element.style.position = "absolute";
   //    element.style.transformOrigin = "0 80px";
   // });

   // for (var i = 0; i < span.length; i++) {
   //    span[i].style.transform = "rotate(" + i * 16.5 + "deg)";
   // }
   // }, []);

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
