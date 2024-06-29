import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stack = [
   {
      img: "/conception-2.gif",
      title: "Conception",
      link: "https://theconception.vercel.app",
      tech: ["/next.jpg", "/tailwind.svg"],
   },
   {
      img: "/homely-3.jpg",
      title: "Homely",
      link: "https://homely-jet.vercel.app",
      tech: ["/next.jpg", "/tailwind.svg"],
   },
   {
      img: "/intercord-2.gif",
      title: "Intercord",
      link: "https://intercord.vercel.app",
      tech: ["/react.svg", "/tailwind.svg", "/expressjs.svg", "/nodejs.svg"],
   },
   {
      img: "/hunger-bites-3.jpg",
      title: "Hunger Bites",
      link: "https://hunger-bites.vercel.app",
      tech: ["/react.svg", "/tailwind.svg", "/redux.svg"],
   },
];

export const StackProjects = () => {
   const container = useRef();

   useLayoutEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(
            ".card:not(:first-child)",
            {
               y: 1000,
            },
            {
               y: 0,
               stagger: 0.5,
               scrollTrigger: {
                  pin: container.current,
                  scrub: 0.5,
               },
            }
         );
      });
      return () => ctx.revert();
   }, []);

   return (
      <div
         ref={container}
         className="h-screen my-10 lg:my-40 flex items-center justify-center"
      >
         <div className="relative w-[90vw] lg:w-[80vw] h-[50vh] md:h-[60vh] lg:h-[80vh]">
            {stack.map((sta) => (
               <a
                  href={sta.link}
                  target="_blank"
                  key={sta.title}
                  className="card absolute top-0 left-0 h-full w-full group cursor-pointer"
               >
                  <img
                     className="w-full h-full rounded-lg object-cover"
                     src={sta.img}
                     alt={sta.title}
                  />
                  <div className="fadeBottomCustom h-full relative bottom-[100%] right-0 rounded-lg transition-all duration-300" />
                  <div className="absolute top-0 lg:top-[26%] left-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full w-full px-10">
                     <p className="animated-bg-white text-[40px] xs:text-[50px] sm:text-[90px] md:text-[100px] lg:text-[108px] text-[#f1f1f1] font-[1000] text-nowrap">
                        {sta.title}
                     </p>
                     <div className="flex items-center justify-center gap-6 flex-row lg:flex-row">
                        {sta.tech.map((t) => (
                           <img src={t} width={34} height={34} />
                        ))}
                     </div>
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
};
