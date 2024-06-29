import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import { useEffect } from "react";

export const NameElement = () => {
   useEffect(() => {
      const nameText = document.getElementById(`nameText`);

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("name-show");
            } else {
               entry.target.classList.remove("name-show");
            }
         });
      });

      if (nameText) {
         observer.observe(nameText);
      }

      return () => {
         if (nameText) {
            observer.unobserve(nameText);
         }
      };
   }, []);

   return (
      <div>
         <div className="header w-[100dvw] h-[100dvh] mt-12 flex flex-col items-center justify-center pointer-events-none select-none relative">
            <div
               id="nameText"
               className="absolute translate-x-[0%] -translate-y-[50%] letters text-[#0E100F] flex flex-row items-center justify-center text-[40px] sm:text-[60px] md:text-[88px] lg:text-[120px] xl:text-[180px] leading-[0.78] scale-y-[3.2] xs:scale-y-[4.2] sm:scale-y-[4.2] xl:scale-y-[3.2] xl:scale-x-[0.72] uppercase font-[880] drop-shadow-lg name-hidden animated-bg"
            >
               <div className="wave"></div>
               <div className="wave"></div>
               <div className="text-nowrap">Prem Sapkale</div>
            </div>
            <div className="h-[26%] sm:h-[32%] md:h-[44%] lg:h-[52%] xl:h-[60%]" />
            <div className="w-[36%] xs:w-[40%] lg:w-[50%] xl:w-[40%] h-fit flex gap-6 items-center justify-end top-[62%] right-[16%] xs:top-[62%] xs:right-[16%] md:top-[62%] md:right-[14%] lg:top-[74%] lg:right-[20%] xl:top-[84%] xl:right-[20%] 2xl:top-[86.2%] 2xl:right-[16%] text-[12px] font-[360] 2xl:font-[400] scale-y-[1.28] scale-x-[1.4] md:scale-y-[1.6] md:scale-x-[1.62] 2xl:scale-x-[1.8] uppercase text-nowrap">
               <span className="lg:scale-125">
                  <ArrowDownRight strokeWidth={1.6} />
               </span>
               <h1>
                  FullStack Developer <br />
                  based in India
               </h1>
            </div>
         </div>
      </div>
   );
};
