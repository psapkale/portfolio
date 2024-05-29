import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const MarqueeElement = () => {
   const [currentScroll, setCurrentScroll] = useState(0);
   const [isScrollingDown, setIsScrollingDown] = useState(true);
   const marqueeInnerRef = useRef();

   const handleScroll = (tween) => {
      const scrollY = window.scrollY;
      const scrollingDown = scrollY < currentScroll;
      setIsScrollingDown(scrollingDown);

      gsap.to(tween, {
         timeScale: scrollingDown ? 1 : 1,
      });

      setCurrentScroll(scrollY);
   };

   function handleScroll2() {
      const marqueeParts =
         marqueeInnerRef.current.querySelectorAll(".marquee__part");

      gsap
         .to(marqueeParts, {
            // xPercent: -100,
            // repeat: -1,
            rotate: 5,
            scale: 2,
            duration: 4,
            ease: "linear",
         })
         .totalProgress(0);
   }

   useGSAP(() => {
      const marqueeParts =
         marqueeInnerRef.current.querySelectorAll(".marquee__part");

      // const tween = gsap
      //    .to(marqueeParts, {
      //       xPercent: -100,
      //       repeat: -1,
      //       duration: 4,
      //       ease: "linear",
      //    })
      //    .totalProgress(0);

      window.addEventListener("scroll", () => handleScroll2());
   });

   return (
      <div>
         <section className="h-[200px]"></section>
         <section className="relative border-4 border-[#0f0f0f] text-[#eee] py-8 font-semibold text-2xl uppercase overflow-hidden">
            <div
               className="flex w-fit flex-auto flex-row marquee__inner"
               ref={marqueeInnerRef}
            >
               {Array(6)
                  .fill()
                  .map((_, index) => (
                     <div
                        className="flex items-center flex-shrink-0 px-1 text-6xl marquee__part"
                        key={index}
                     >
                        FullStack Developer based in India
                        <div
                           className={`w-20 h-20 mx-10 transform transition-all duration-1000 ease-cubic-bezier-[0.075,0.82,0.165,1] translate-y-[10px] rotate-[90deg] arrow ${
                              !isScrollingDown ? "scale-y-[-1]" : "scale-y-[1]"
                           }`}
                        >
                           <span style={{ fontSize: "100px" }}>&#8659;</span>
                        </div>
                     </div>
                  ))}
            </div>
         </section>
         <section className="h-[200px]"></section>
      </div>
   );
};
