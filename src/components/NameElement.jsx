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
               className="letters text-[#0E100F] flex flex-row text-[40px] sm:text-[60px] md:text-[88px] lg:text-[120px] xl:text-[180px] scale-y-[4] xxs:scale-x-[1.0] xs:scale-x-[1.18] sm:scale-y-[2.4] sm:scale-x-[1] lg:scale-y-[3.2] lg:scale-x-[0.72] uppercase font-[880] drop-shadow-lg name-hidden animated-bg"
            >
               <div className="wave"></div>
               <div className="wave"></div>
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
            <div className="absolute top-[62%] right-[16%] xs:top-[62%] xs:right-[16%] md:top-[62%] md:right-[14%] lg:top-[74%] lg:right-[20%] xl:top-[84%] xl:right-[20%] 2xl:top-[86.2%] 2xl:right-[16%] text-[12px] font-[360] 2xl:font-[400] scale-y-[1.28] scale-x-[1.4] md:scale-y-[1.6] md:scale-x-[1.62] 2xl:scale-x-[1.8] uppercase">
               <span className="absolute -left-6 scale-125">&#8600;</span>
               FullStack Developer <br />
               based in India
            </div>
         </div>
      </div>
   );
};
