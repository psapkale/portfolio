import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight } from "lucide-react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const NameElement = () => {
   useEffect(() => {
      const nameText = document.getElementById(`nameText`);
      const tagText = document.getElementById("tagText");

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("name-show");
            } else {
               entry.target.classList.remove("name-show");
            }
         });
      });

      // setTimeout(() => {
      //    if (nameText) {
      //       observer.observe(nameText);
      //    }
      // }, 400);

      setTimeout(() => {
         if (tagText) {
            observer.observe(tagText);
         }
      }, 400);

      return () => {
         if (tagText) {
            observer.unobserve(tagText);
         }
      };
   }, []);

   return (
      <>
         <div className="header w-[100dvw] h-[100dvh] md:h-[100dvh] mt-12 flex flex-col items-center justify-center pointer-events-none select-none relative">
            <div
               id="nameText"
               className="absolute translate-x-[0%] -translate-y-[50%] letters text-[#0E100F] flex flex-row items-center justify-center text-[40px] sm:text-[60px] md:text-[88px] lg:text-[120px] xl:text-[180px] leading-[0.78] scale-y-[3.2] xs:scale-y-[4.2] sm:scale-y-[4.2] xl:scale-y-[3.2] xl:scale-x-[0.72] uppercase font-[880] drop-shadow-lg animated-bg"
            >
               <div className="wave"></div>
               <div className="wave"></div>
               <div className="text-nowrap">Prem Sapkale</div>
            </div>
            <div className="h-[26%] sm:h-[32%] md:h-[44%] lg:h-[52%] xl:h-[60%]" />
            <div
               id="tagText"
               className="name-hidden w-[36%] xs:w-[40%] lg:w-[50%] xl:w-[40%] h-fit flex gap-6 items-center justify-end top-[62%] right-[16%] xs:top-[62%] xs:right-[16%] md:top-[62%] md:right-[14%] lg:top-[74%] lg:right-[20%] xl:top-[84%] xl:right-[20%] 2xl:top-[86.2%] 2xl:right-[16%] text-[12px] font-[360] 2xl:font-[400] scale-y-[1.28] scale-x-[1.4] md:scale-y-[1.6] md:scale-x-[1.62] 2xl:scale-x-[1.8] uppercase text-nowrap"
            >
               <span className="lg:scale-125">
                  <ArrowDownRight strokeWidth={1.6} />
               </span>
               <h1>
                  FullStack Developer <br />
                  based in India
               </h1>
            </div>
            <div className="absolute bottom-[10%] left-[2%]">
               <div
                  className="go-down-btn relative inline-block"
                  title="Scroll down"
               >
                  <svg
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     className="relative block"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     x="0px"
                     y="0px"
                     width="100px"
                     height="100px"
                     viewBox="0 0 100 100"
                     enableBackground="new 0 0 100 100"
                     xmlSpace="preserve"
                  >
                     <circle fill="#232426" cx="50" cy="50" r="6" />
                     <path
                        id="textPath"
                        fill="none"
                        d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
                     />
                     <text className="text-[10px] origin-center">
                        <textPath xlinkHref="#textPath">
                           <tspan x="10">SCROLL TO DISCOVER</tspan>
                           <tspan x="122">•</tspan>
                           <tspan x="134">SCROLL TO DISCOVER</tspan>
                           <tspan x="248">•</tspan>
                        </textPath>
                     </text>
                  </svg>
               </div>
            </div>
         </div>
      </>
   );
};
