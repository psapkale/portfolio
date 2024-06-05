import gsap from "gsap";
import { useEffect } from "react";

export const NameElement = () => {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("name-show");
         } else {
            entry.target.classList.remove("name-show");
         }
      });
   });

   useEffect(() => {
      const nameText = document.getElementById(`nameText`);
      observer.observe(nameText);
      // nameText.classList.add("name-show");
      // const tl = gsap.timeline();
      // tl.to(nameText, {
      //    y: 0,
      //    duration: 100,
      //    ease: "power3.out",
      // });

      return () => {
         // nameText.classList.remove("name-show");
      };
   }, []);

   return (
      <div>
         <div className="header h-screen flex items-center justify-center pointer-events-none select-none">
            <div
               id="nameText"
               className="letters text-[#0E100F] flex flex-row text-[40px] sm:text-[60px] md:text-[80px] lg:text-[150px] scale-y-[3] sm:scale-y-[2.4] uppercase font-[880] drop-shadow-lg name-hidden"
            >
               <div className="text-center flex">
                  <h1>p</h1>
                  <h1>r</h1>
                  <h1>e</h1>
                  <h1>m</h1>
               </div>
               <div className="mr-2 sm:mr-12" />
               <div className="flex">
                  <h1>s</h1>
                  <h1>a</h1>
                  <h1>p</h1>
                  <h1>k</h1>
                  <h1>a</h1>
                  <h1>l</h1>
                  <h1>e</h1>
               </div>
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
