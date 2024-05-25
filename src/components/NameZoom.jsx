import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export const NameZoom = () => {
   // const contentRef = useRef(null);
   // const lettersRef = useRef(null);

   // // useEffect(() => {
   // const contentHolderHeight = contentRef.current?.offsetHeight;
   // const imgHolderHeight = window.innerHeight;
   // const additionalScrollHeight = window.innerHeight;

   // const totalBodyHeight =
   //    contentHolderHeight + imgHolderHeight + additionalScrollHeight;
   // // document.body.style.height = `${totalBodyHeight}px`;
   // // }, []);

   // gsap.registerPlugin(ScrollTrigger);

   // function handleScroll() {
   //    console.log("asd");
   // }

   // ScrollTrigger.create({
   //    trigger: contentRef.current,
   //    start: "-0.1% top",
   //    end: "bottom bottom",
   //    onEnter: () => {
   //       gsap.set(contentRef.current, {
   //          position: "absolute",
   //          top: "195%",
   //       });
   //    },
   //    onLeaveBack: () => {
   //       gsap.set(contentRef.current, { position: "fixed", top: "0" });
   //    },
   // });

   // gsap.to(lettersRef.current, {
   //    scale: 100,
   //    x: () => innerWidth * 3,
   //    ease: "power3.inOut",
   //    scrollTrigger: {
   //       start: "top top",
   //       end: "+=200%",
   //       scrub: 1,
   //    },
   // });

   return (
      <div>
         <div className="header h-screen flex items-center justify-center pointer-events-none select-none relative">
            <div className="letters flex gap-5 text-[150px] scale-y-[3] absolute top-[32%] left-[10%] uppercase">
               <div>p</div>
               <div>r</div>
               <div>e</div>
               <div>m</div>
               <div className="mr-2" />
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
            <div className="absolute top-[87%] right-[15%] text-[15px] font-[300] tracking-[2px] scale-y-[2] scale-x-[2]">
               Fullstack Developer based in India
            </div>
         </div>
      </div>
   );
};
