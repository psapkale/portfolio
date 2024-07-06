import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactElement } from "./ContactElement";

gsap.registerPlugin(ScrollTrigger);

export const SliceThrough = () => {
   useEffect(() => {
      var tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#main",
            start: "center center",
            end: "bottom center",
            scrub: 1.6,
            pin: true,
            // markers: true,
         },
      });

      tl.fromTo(
         "#top",
         {
            top: "0%",
         },
         {
            top: "-50%",
         },
         "slice" // add same name to perform animation on same time
      )
         .fromTo(
            "#bottom",
            {
               bottom: "0%",
            },
            {
               bottom: "-50%",
            },
            "slice"
         )
         .fromTo(
            "#top-h",
            {
               top: "50vh",
            },
            {
               top: "120%",
            },
            "slice"
         )
         .fromTo(
            "#bottom-h",
            {
               bottom: "50vh",
            },
            {
               bottom: "120%",
            },
            "slice"
         )
         .fromTo(
            ".content",
            {
               paddingTop: "100vh",
            },
            {
               paddingTop: "0%",
            },
            "slice"
         );

      return () => {
         tl.revert();
      };
   }, []);

   return (
      <div
         id="main"
         className="w-full h-screen relative bg-sky-600 font-extrabold overflow-hidden"
      >
         <div
            id="top"
            className="w-full h-[50vh] bg-[#f1f1f1] absolute overflow-hidden pointer-events-none"
         >
            <h1
               id="top-h"
               className="text-[20vw] uppercase absolute left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
               Excited?
            </h1>
         </div>

         <div id="center" className="content w-full h-screen">
            <ContactElement />
         </div>

         <div
            id="bottom"
            className="w-full h-[50vh] bg-[#f1f1f1] absolute overflow-hidden pointer-events-none"
         >
            <h1
               id="bottom-h"
               className="text-[20vw] uppercase absolute left-[50%] translate-x-[-50%] translate-y-[50%]"
            >
               Excited?
            </h1>
         </div>
      </div>
   );

   // return (

   //    <div>
   //       <div
   //          id="main"
   //          className="w-full h-screen relative bg-sky-600 font-mono font-extrabold"
   //       >
   //          <div
   //             id="top"
   //             className="w-full h-[50vh] bg-[#f1f1f1] absolute overflow-hidden pointer-events-none"
   //          >
   //             <h1
   //                id="top-h"
   //                className="text-[20vw] uppercase absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50vh]"
   //             >
   //                {/* bottom-[16%] */}
   //                Excited?
   //             </h1>
   //          </div>
   //          <div id="center" className="content w-full h-screen">
   //             <ContactElement />
   //          </div>
   //          <div
   //             id="bottom"
   //             className="w-full h-[50vh] bg-[#f1f1f1] absolute overflow-hidden pointer-events-none"
   //          >
   //             <h1
   //                id="bottom-h"
   //                className="text-[20vw] uppercase absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bottom-[36.5dvh] xxs:bottom-[36.1dvh] xs:bottom-[36.1dvh] md:bottom-[27.53dvh] lg:bottom-[12.14dvh] xl:bottom-[2.66dvh] 2xl:bottom-[-15.6dvh]"
   //             >
   //                {/* 2xl:bottom-[2dvh] */}
   //                {/* top-[-1.78%] */}
   //                Excited?
   //             </h1>
   //          </div>
   //       </div>
   //    </div>
   // );
};
